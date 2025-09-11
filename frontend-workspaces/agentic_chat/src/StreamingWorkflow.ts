import { fetchEventSource } from "@microsoft/fetch-event-source";
import { ChatInstance, CustomSendMessageOptions, GenericItem, MessageRequest, StreamChunk } from "@carbon/ai-chat";
import { streamStateManager } from "./StreamManager";

// When built without webpack DefinePlugin, `FAKE_STREAM` may not exist at runtime.
// Declare it for TypeScript and compute a safe value that won't throw if undefined.
declare const FAKE_STREAM: boolean | undefined;
const USE_FAKE_STREAM: boolean =
  typeof FAKE_STREAM !== "undefined" ? !!FAKE_STREAM : !!(globalThis as any).FAKE_STREAM;
const FAKE_STREAM_FILE = "/fake_data.json"; // Path to your JSON file
const FAKE_STREAM_DELAY = 1000; // Delay between fake stream events in milliseconds
// Unique timestamp generator for IDs
const generateTimestampId = () => {
  return Date.now().toString();
};

function renderPlan(planJson) {
  console.log("Current plan json", planJson);
  return planJson;
}

function getCurrentStep(event) {
  console.log("getCurrentStep received: ", event);
  switch (event.event) {
    case "__interrupt__":
      return;
    case "Stopped":
      // Handle the stopped event from the server
      if (window.aiSystemInterface) {
        window.aiSystemInterface.stopProcessing();
      }
      return renderPlan(event.data);
    default:
      return renderPlan(event.data);
  }
}

const simulateFakeStream = async (instance: ChatInstance, query: string) => {
  console.log("Starting fake stream simulation with query:", query.substring(0, 50));

  // Create abort controller for this stream
  const abortController = new AbortController();
  streamStateManager.setAbortController(abortController);

  let fullResponse = "";
  let workflowInitialized = false;
  let workflowId = "workflow_" + generateTimestampId();

  // Set streaming state AFTER setting abort controller
  streamStateManager.setStreaming(true);

  try {
    // Check if already aborted before starting
    if (abortController.signal.aborted) {
      console.log("Stream aborted before starting");
      return fullResponse;
    }

    // Load the fake stream data from JSON file
    const response = await fetch(FAKE_STREAM_FILE, {
      signal: abortController.signal, // Pass abort signal to fetch
    });

    if (!response.ok) {
      throw new Error(`Failed to load fake stream data: ${response.status} ${response.statusText}`);
    }

    const fakeStreamData = await response.json();

    if (!fakeStreamData.steps || !Array.isArray(fakeStreamData.steps)) {
      throw new Error("Invalid fake stream data format. Expected { steps: [{ name: string, data: any }] }");
    }

    workflowInitialized = true;

    // Use abortable delay for initial wait
    await abortableDelay(300, abortController.signal);

    // Process each step from the fake data
    for (let i = 0; i < fakeStreamData.steps.length; i++) {
      // Check abort signal at the start of each iteration
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted by user at step", i);
        break;
      }

      const step = fakeStreamData.steps[i];
      console.log(`Processing step ${i + 1}/${fakeStreamData.steps.length}: ${step.name}`);

      // Use abortable delay instead of regular setTimeout
      await abortableDelay(FAKE_STREAM_DELAY, abortController.signal);

      // Check again after delay in case it was aborted during the wait
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted during delay at step", i);
        break;
      }

      // Simulate the event
      const fakeEvent = {
        event: step.name,
        data: step.data,
      };

      console.log("Simulating fake stream event:", fakeEvent);

      let currentStep = getCurrentStep(fakeEvent);
      let stepTitle = step.name;

      // Add the message (this is not abortable, but it's fast)
      await instance.messaging.addMessage({
        output: {
          generic: [
            {
              id: workflowId + stepTitle,
              response_type: "user_defined",
              user_defined: {
                user_defined_type: "my_unique_identifier",
                data: currentStep,
                step_title: stepTitle,
              },
            },
          ],
        },
      });

      // Final check after adding message
      if (abortController.signal.aborted) {
        console.log("Fake stream process aborted after adding message at step", i);
        break;
      }
    }

    // If we completed all steps without aborting
    if (!abortController.signal.aborted) {
      console.log("Fake stream completed successfully");
    }

    return fullResponse;
  } catch (error) {
    if (error.name === "AbortError" || abortController.signal.aborted) {
      console.log("Fake stream was cancelled by user");

      // Add a message indicating the stream was stopped
      await instance.messaging.addMessage({
        output: {
          generic: [
            {
              id: workflowId + "_stopped",
              response_type: "text",
              text: "⏹️ Processing was stopped by user.",
            },
          ],
        },
      });

      return fullResponse; // Return partial response
    } else {
      console.error("Fake streaming error:", error);

      // Add error message
      await instance.messaging.addMessage({
        output: {
          generic: [
            {
              id: workflowId + "_error",
              response_type: "text",
              text: "❌ An error occurred while processing your request.",
            },
          ],
        },
      });

      throw error;
    }
  } finally {
    // Always reset streaming state when done
    console.log("Cleaning up fake stream state");
    streamStateManager.setStreaming(false);
    streamStateManager.setAbortController(null);
  }
};

// Helper function to create abortable delays
function abortableDelay(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    // If already aborted, reject immediately
    if (signal.aborted) {
      reject(new Error("Aborted"));
      return;
    }

    const timeoutId = setTimeout(() => {
      resolve();
    }, ms);

    // Listen for abort signal
    const abortHandler = () => {
      clearTimeout(timeoutId);
      reject(new Error("Aborted"));
    };

    signal.addEventListener("abort", abortHandler, { once: true });
  });
}

// Enhanced streaming function that integrates workflow component
// Helper function to send messages easily
const addStreamMessage = async (
  instance: ChatInstance,
  workflowId: string,
  stepTitle: string,
  data: any,
  responseType: "user_defined" | "text" = "user_defined"
) => {
  const messageConfig =
    responseType === "text"
      ? {
          id: workflowId + stepTitle,
          response_type: "text",
          text: typeof data === "string" ? data : JSON.stringify(data),
        }
      : {
          id: workflowId + stepTitle,
          response_type: "user_defined",
          user_defined: {
            user_defined_type: "my_unique_identifier",
            data: data,
            step_title: stepTitle,
          },
        };

  await instance.messaging.addMessage({
    output: {
      generic: [messageConfig],
    },
  });
};

const fetchStreamingData = async (instance: ChatInstance, query: string, action: object = null) => {
  // Check if we should use fake streaming
  if (USE_FAKE_STREAM) {
    console.log("Using fake stream simulation");
    return simulateFakeStream(instance, query);
  }

  console.log("🚀 Starting new fetchStreamingData with query:", query.substring(0, 50));

  // Create abort controller for this stream
  const abortController = new AbortController();
  streamStateManager.setAbortController(abortController);

  let fullResponse = "";
  let workflowInitialized = false;
  let workflowId = "workflow_" + generateTimestampId();

  // Set streaming state
  streamStateManager.setStreaming(true);
  console.log("🎯 Set streaming to true, abort controller set");

  // Add abort listener for debugging
  abortController.signal.addEventListener("abort", () => {
    console.log("🛑 ABORT SIGNAL RECEIVED IN FETCH STREAM!");
  });

  try {
    // Check if already aborted before starting
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted before starting");
      return fullResponse;
    }

    // IMPORTANT: Force a complete reset of the UI component for each new request
    if (window.aiSystemInterface && window.aiSystemInterface.forceReset) {
      console.log("🔄 Forcing complete reset of the UI component");
      window.aiSystemInterface.forceReset();

      // Use abortable delay instead of regular setTimeout
      await abortableDelayV2(500, abortController.signal);
    }

    // Check after reset delay
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted after UI reset");
      return fullResponse;
    }

    // First create the workflow component
    console.log("💬 Adding initial workflow message");
    await addStreamMessage(instance, workflowId, "init", "Processing your request...", "text");
    workflowInitialized = true;

    // Give a moment for the component to initialize
    await abortableDelayV2(300, abortController.signal);

    // Check after initialization delay
    if (abortController.signal.aborted) {
      console.log("🛑 Stream aborted after initialization");
      return fullResponse;
    }

    console.log("🌊 Beginning stream connection");

    // Start streaming with abort signal
    await fetchEventSource("http://localhost:8005/stream", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: query ? JSON.stringify({ query }) : JSON.stringify(action),
      signal: abortController.signal, // 🔑 KEY: Pass abort signal to fetchEventSource

      async onopen(response) {
        console.log("🌊 Stream connection opened:", response.status);

        // Check if aborted during connection
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted during connection opening");
          return;
        }

        await addStreamMessage(
          instance,
          workflowId,
          "simple_text",
          "Processing request and preparing response...",
          "text"
        );
      },

      async onmessage(ev) {
        // Check if aborted before processing message
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted - skipping message processing");
          return;
        }

        let currentStep = getCurrentStep(ev);

        if (currentStep) {
          let stepTitle = ev.event;
          console.log("⚡ Processing step:", stepTitle);

          await addStreamMessage(instance, workflowId, stepTitle, currentStep, "user_defined");
        }

        // Check if aborted after processing message
        if (abortController.signal.aborted) {
          console.log("🛑 Stream aborted after processing message");
          return;
        }
      },

      async onclose() {
        console.log("🌊 Stream connection closed");
        console.log("🌊 Signal aborted state:", abortController.signal.aborted);
      },

      async onerror(err) {
        console.error("🌊 Stream error:", err);
        console.log("🌊 Error name:", err.name);
        console.log("🌊 Signal aborted:", abortController.signal.aborted);

        // Don't add error message if stream was aborted by user
        if (abortController.signal.aborted) {
          console.log("🛑 Stream error was due to user abort - not adding error message");
          return;
        }

        // Add error step for real errors
        if (workflowInitialized) {
          await addStreamMessage(
            instance,
            workflowId,
            "error",
            `An error occurred during processing: ${err.message}`,
            "text"
          );
        }
      },
    });

    // Check if completed successfully or was aborted
    if (abortController.signal.aborted) {
      console.log("🛑 Stream completed due to abort");
    } else {
      console.log("🎉 Stream completed successfully");
    }

    return fullResponse;
  } catch (error) {
    console.log("❌ Caught error in fetchStreamingData:", error);
    console.log("❌ Error name:", error.name);
    console.log("❌ Signal aborted:", abortController.signal.aborted);

    // Handle abort vs real errors
    if (error.name === "AbortError" || error.message === "Aborted" || abortController.signal.aborted) {
      console.log("🛑 Fetch stream was cancelled by user");

      // Add a message indicating the stream was stopped
      if (workflowInitialized) {
        await addStreamMessage(instance, workflowId, "stopped", "⏹️ Processing was stopped by user.", "text");
      }

      return fullResponse; // Return partial response
    } else {
      console.error("💥 Real error in fetchStreamingData:", error);

      // Add error step if workflow is initialized
      if (workflowInitialized) {
        await addStreamMessage(instance, workflowId, "error", `❌ An error occurred: ${error.message}`, "text");

        // Signal completion to the system on error
        if (window.aiSystemInterface && window.aiSystemInterface.setProcessingComplete) {
          window.aiSystemInterface.setProcessingComplete(true);
        }
      }

      throw error;
    }
  } finally {
    // Always reset streaming state when done
    console.log("🧹 Cleaning up fetch stream state");
    streamStateManager.setStreaming(false);
    streamStateManager.setAbortController(null);
    console.log("🧹 Fetch stream cleanup complete");
  }
};

// Enhanced abortable delay function (same as before but with logging)
function abortableDelayV2(ms: number, signal: AbortSignal): Promise<void> {
  console.log(`⏰ Creating abortable delay for ${ms}ms, signal.aborted:`, signal.aborted);

  return new Promise((resolve, reject) => {
    // If already aborted, reject immediately
    if (signal.aborted) {
      console.log("⏰ Delay rejected immediately - already aborted");
      reject(new Error("Aborted"));
      return;
    }

    const timeoutId = setTimeout(() => {
      console.log("⏰ Delay timeout completed normally");
      resolve();
    }, ms);

    // Listen for abort signal
    const abortHandler = () => {
      console.log("⏰ Delay abort handler called - clearing timeout");
      clearTimeout(timeoutId);
      reject(new Error("Aborted"));
    };

    signal.addEventListener("abort", abortHandler, { once: true });
    console.log("⏰ Abort listener added to delay");
  });
}

const waitForInterfaceReady = async (timeoutMs = 3000, intervalMs = 100): Promise<void> => {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (window.aiSystemInterface && typeof window.aiSystemInterface.addStep === "function") {
      return;
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  console.warn("aiSystemInterface not available after", timeoutMs, "ms");
};

export const streamViaBackground = async (
  instance: ChatInstance,
  query: string
) => {
  // Guard against empty query
  if (!query?.trim()) {
    return;
  }

  // -------------------------------------------------------------
  // Replicate the original workflow UI behaviour (same as in
  // fetchStreamingData) so that incoming agent responses are
  // rendered through the side-panel component.
  // -------------------------------------------------------------

  // 1. Hard-reset the custom workflow component if it already exists
  if (window.aiSystemInterface && window.aiSystemInterface.forceReset) {
    window.aiSystemInterface.forceReset();
    // Give React a brief moment to remount the component tree
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // 2. Insert an initial user_defined message that hosts our Workflow UI
  const workflowId = "workflow_" + generateTimestampId();

  await instance.messaging.addMessage({
    output: {
      generic: [
        {
          id: workflowId,
          response_type: "user_defined",
          user_defined: {
            user_defined_type: "my_unique_identifier",
            text: "Processing your request...",
          },
        } as any,
      ],
    },
  });

  // Wait until the workflow component has mounted
  await waitForInterfaceReady();

  // Track whether processing has been stopped
  let isStopped = false;

  const responseID = crypto.randomUUID();
  let accumulatedText = "";

  // We no longer push plain chat chunks for each stream segment because
  // the workflow component renders them in its own UI. Keeping chat
  // payloads suppressed avoids duplicate, unformatted messages.
  const pushPartial = (_text: string) => {};
  const pushComplete = (_text: string) => {};

  // -------------------------------------------------------------
  // Helper : parse the `content` received from the background into
  // an object compatible with the old fetchEventSource `ev` shape.
  // -------------------------------------------------------------
  const parseSSEContent = (raw: string): { event: string; data: string } => {
    let eventName = "Message";
    const dataLines: string[] = [];

    raw.split(/\r?\n/).forEach((line) => {
      if (line.startsWith("event:")) {
        eventName = line.slice(6).trim();
      } else if (line.startsWith("data:")) {
        dataLines.push(line.slice(5).trim());
      } else if (line.trim().length) {
        // If the line isn't prefixed, treat it as data as well
        dataLines.push(line.trim());
      }
    });

    return { event: eventName, data: dataLines.join("\n") };
  };

  // Add initial step indicating that the connection has been established
  if (window.aiSystemInterface) {
    window.aiSystemInterface.addStep(
      "Connection Established",
      "Processing request and preparing response..."
    );
  }

  // -------------------------------------------------------------
  // Listener for streaming responses coming back from the background
  // -------------------------------------------------------------
  const listener = (message: any) => {
    if (!message || message.source !== "background") return;

    switch (message.type) {
      case "agent_response": {
        const rawContent = message.content ?? "";

        // Convert the raw content into an SSE-like event structure so we can
        // reuse the original render logic.
        const ev = parseSSEContent(rawContent);

        // Handle workflow-step visualisation
        if (
          !isStopped &&
          window.aiSystemInterface &&
          !window.aiSystemInterface.isProcessingStopped()
        ) {
          const currentStep = getCurrentStep(ev);
          if (currentStep) {
            const stepTitle = ev.event;

            if (ev.event === "Stopped") {
              // Graceful stop handling
              window.aiSystemInterface.stopProcessing();
              isStopped = true;
            } else if (
              !window.aiSystemInterface.hasStepWithTitle(stepTitle)
            ) {
              window.aiSystemInterface.addStep(stepTitle, currentStep);
            }
          }
        }

        // No longer sending plain chat messages – only updating workflow UI
        accumulatedText += ev.data;
        break;
      }
      case "agent_complete": {
        // Finalise UI state (no plain chat message)

        if (window.aiSystemInterface && !isStopped) {
          window.aiSystemInterface.setProcessingComplete?.(true);
        }

        (window as any).chrome.runtime.onMessage.removeListener(listener);
        break;
      }
      case "agent_error": {
        // Report error in workflow UI
        window.aiSystemInterface?.addStep(
          "Error Occurred",
          `An error occurred during processing: ${message.message}`
        );
        if (window.aiSystemInterface && !isStopped) {
          window.aiSystemInterface.setProcessingComplete?.(true);
        }
        (window as any).chrome.runtime.onMessage.removeListener(listener);
        break;
      }
      default:
        break;
    }
  };

  // Register the listener *before* dispatching the query so that no
  // early backend messages are missed.
  (window as any).chrome.runtime.onMessage.addListener(listener);

  // -------------------------------------------------------------
  // Now dispatch the query to the background service-worker. We do
  // NOT await the response here because the background script keeps
  // the promise pending until the stream completes, which would block
  // our execution and cause UI updates to stall.
  // -------------------------------------------------------------

  (window as any).chrome.runtime
    .sendMessage({
      source: "popup",
      type: "send_agent_query",
      query,
    })
    .then((bgResp: any) => {
      if (bgResp?.type === "error") {
        console.error("Background returned error during dispatch", bgResp);
        window.aiSystemInterface?.addStep(
          "Error Occurred",
          bgResp.message || "Background error"
        );
        window.aiSystemInterface?.setProcessingComplete?.(true);
      }
    })
    .catch((err: any) => {
      console.error("Failed to dispatch agent_query", err);
      if (window.aiSystemInterface) {
        window.aiSystemInterface.addStep(
          "Error Occurred",
          `An error occurred: ${err.message || "Failed to dispatch query"}`
        );
        window.aiSystemInterface.setProcessingComplete?.(true);
      }
    });
};

export { fetchStreamingData, USE_FAKE_STREAM, FAKE_STREAM_FILE, FAKE_STREAM_DELAY };
