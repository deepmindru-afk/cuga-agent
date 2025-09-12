import React, { useEffect, useState, useRef } from "react";
import Markdown from "react-markdown";
import "./CustomResponseStyles.css";

// Import your custom components
import TaskStatusDashboard from "./task_status_component";
import ActionStatusDashboard from "./action_status_component";
import CoderAgentOutput from "./coder_agent_output";
import FinalAnswerComponent from "./final_answer_component";
import AppAnalyzerComponent from "./app_analyzer_component";
import TaskDecompositionComponent from "./task_decomposition";
import ShortlisterComponent from "./shortlister";
import SingleExpandableContent from "./generic_component";
import ActionAgent from "./action_agent";
import QaAgentComponent from "./qa_agent";
import { FollowupAction } from "./Followup";
import { fetchStreamingData } from "./StreamingWorkFlow";
import { ChatInstance } from "@carbon/ai-chat";
import ToolCallFlowDisplay from "./ToolReview";

// Add this interface for window global access
declare global {
  interface Window {
    aiSystemInterface?: {
      addStep: (title: string, content: string) => void;
      getAllSteps: () => Step[];
      stopProcessing: () => void;
      isProcessingStopped: () => boolean;
      setProcessingComplete: (isComplete: boolean) => void;
      forceReset: () => void;
      hasStepWithTitle: (title: string) => boolean;
    };
    aiSystemInterfaceResetCounter: number;
    currentSessionId: string;
  }
}

interface Step {
  id: string;
  title: string;
  content: string;
  expanded: boolean;
  isNew?: boolean;
}

interface CustomResponseExampleData {
  step_title: string;
  data: string;
}

// Update the props interface to include the ChatInstance
interface CustomResponseExampleProps {
  data: CustomResponseExampleData;
  chatInstance: ChatInstance; // Add this line
}

// Initialize these global variables if they don't exist
if (typeof window !== "undefined") {
  window.aiSystemInterfaceResetCounter = window.aiSystemInterfaceResetCounter || 0;
  window.currentSessionId = window.currentSessionId || Date.now().toString();
}

function CustomResponseExample({ data, chatInstance }: CustomResponseExampleProps) {
  // const [sessionId] = useState(() => window.currentSessionId);
  // const [steps, setSteps] = useState<Step[]>([]);
  // const [isStreamingActive, setIsStreamingActive] = useState<boolean>(false);
  // const [isStopped, setIsStopped] = useState<boolean>(false);
  // const [isStopRequested, setIsStopRequested] = useState<boolean>(false);
  // const [isProcessingComplete, setIsProcessingComplete] = useState<boolean>(false);

  // // Refs for scrolling
  // const stepsContainerRef = useRef<HTMLDivElement>(null);
  // const stopButtonRef = useRef<HTMLButtonElement>(null);
  // const isInitialized = useRef<boolean>(false);

  // // Initialize with first step on mount
  // useEffect(() => {
  //   if (!isInitialized.current) {
  //     isInitialized.current = true;
  //     // setSteps([
  //     //   {
  //     //     id: `step-init-${Date.now()}`,
  //     //     title: "Request Received",
  //     //     content: data.text || "Processing your request...",
  //     //     expanded: true,
  //     //     isNew: true,
  //     //   },
  //     // ]);
  //     console.log(`Component initialized with sessionId: ${sessionId}`);
  //   }
  // }, []);

  // Effect to remove the "isNew" flag after animation completes
  // useEffect(() => {
  //   const newStepTimer = setTimeout(() => {
  //     setSteps((prevSteps) =>
  //       prevSteps.map((step) => ({
  //         ...step,
  //         isNew: false,
  //       }))
  //     );
  //   }, 1000);
  //   return () => clearTimeout(newStepTimer);
  // }, [steps]);

  // Effect to scroll to the latest component when new step is added
  useEffect(() => {
    if (steps.length > 0) {
      setTimeout(() => {
        let lastElement = document.querySelectorAll(".component-container");
        lastElement = lastElement[lastElement.length - 1];
        if (lastElement) {
          lastElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }
  }, [1]);

  // const addStep = (title: string, content: string) => {
  //   console.log(`Adding step: ${title} for sessionId: ${sessionId}`);

  //   if (isStopped) {
  //     console.log(`System is stopped, not adding step: ${title}`);
  //     return;
  //   }

  //   setIsStreamingActive(true);

  //   const newStep: Step = {
  //     id: `step-${Date.now()}`,
  //     title,
  //     content,
  //     expanded: true,
  //     isNew: true,
  //   };

  //   setSteps((prevSteps) => [...prevSteps, newStep]);
  // };

  // const stopProcessing = async () => {
  //   if (isStopped || isStopRequested) {
  //     console.log("Already stopped or stopping, ignoring duplicate stop request");
  //     return;
  //   }

  //   console.log(`Stopping processing for sessionId: ${sessionId}`);
  //   setIsStopRequested(true);

  //   try {
  //     const response = await fetch("http://localhost:8005/stop", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     console.log("Stop response:", data);

  //     if (data.status === "success") {
  //       setIsStopped(true);
  //       setIsStreamingActive(false);

  //       const hasStopStep = steps.some(
  //         (step) =>
  //           step.title === "Processing Stopped" ||
  //           (step.title === "Stopped" && step.content.includes("stopped by user"))
  //       );

  //       if (!hasStopStep) {
  //         console.log("Adding stop step to UI");
  //         const stopStep: Step = {
  //           id: `step-${Date.now()}`,
  //           title: "Processing Stopped",
  //           content: "The processing was stopped by user request.",
  //           expanded: true,
  //           isNew: true,
  //         };
  //         setSteps((prevSteps) => [...prevSteps, stopStep]);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error stopping the agent:", error);
  //     setIsStopped(true);
  //     setIsStreamingActive(false);

  //     const errorStep: Step = {
  //       id: `step-${Date.now()}`,
  //       title: "Error Stopping Processing",
  //       content: `There was an error while trying to stop the agent: ${error.message}`,
  //       expanded: true,
  //       isNew: true,
  //     };
  //     setSteps((prevSteps) => [...prevSteps, errorStep]);
  //   } finally {
  //     setIsStopRequested(false);
  //   }
  // };

  // const handleProcessComplete = (isComplete: boolean) => {
  //   if (isComplete) {
  //     setIsProcessingComplete(true);
  //     setIsStreamingActive(false);
  //     console.log("Processing is complete, hiding stop button");
  //   } else {
  //     setIsProcessingComplete(false);
  //   }
  // };

  // const forceReset = () => {
  //   console.log(`Force reset called for sessionId: ${sessionId}`);
  //   window.currentSessionId = Date.now().toString();
  //   window.aiSystemInterfaceResetCounter = (window.aiSystemInterfaceResetCounter || 0) + 1;
  //   console.log(`New session ID: ${window.currentSessionId}, reset counter: ${window.aiSystemInterfaceResetCounter}`);
  // };

  // // Function to render the appropriate component based on step title and content
  const renderStepContent = (step: Step) => {
    try {
      let parsedContent;

      if (typeof step.content === "string") {
        try {
          parsedContent = JSON.parse(step.content);
          const keys = Object.keys(parsedContent);
          if (keys.length === 1 && keys[0] === "data") {
            const data = parsedContent.data;
            parsedContent = data;
          }
        } catch (e) {
          // console.error("Failed to parse JSON:", e);
          parsedContent = step.content; // fallback
        }
      } else {
        parsedContent = step.content; // already an object
      }
      let outputElements = [];
      if (parsedContent && parsedContent.additional_data && parsedContent.additional_data.tool) {
        const newElem = <ToolCallFlowDisplay toolData={parsedContent.additional_data.tool} />;
        outputElements.push(newElem);
      }

      let mainElement = null;

      switch (step.title) {
        case "PlanControllerAgent":
          if (parsedContent.subtasks_progress && parsedContent.next_subtask) {
            mainElement = <TaskStatusDashboard taskData={parsedContent} />;
          }
          break;
        case "TaskDecompositionAgent":
          mainElement = <TaskDecompositionComponent decompositionData={parsedContent} />;
          break;
        case "APIPlannerAgent":
          if (
            parsedContent.action &&
            (parsedContent.action_input_coder_agent ||
              parsedContent.action_input_shortlisting_agent ||
              parsedContent.action_input_conclude_task)
          ) {
            mainElement = <ActionStatusDashboard actionData={parsedContent} />;
          } else {
            mainElement = <SingleExpandableContent title={"Code Reflection"} content={parsedContent} />;
          }
          break;
        case "CodeAgent":
          if (parsedContent.code) {
            mainElement = <CoderAgentOutput coderData={parsedContent} />;
          }
          break;
        case "ShortlisterAgent":
          if (parsedContent) {
            mainElement = <ShortlisterComponent shortlisterData={parsedContent} />;
          }
          break;
        case "WaitForResponse":
          return null;
        case "TaskAnalyzerAgent":
          if (parsedContent && Array.isArray(parsedContent)) {
            mainElement = <AppAnalyzerComponent appData={parsedContent} />;
          }
          break;
        case "PlannerAgent":
          if (parsedContent) {
            mainElement = <ActionAgent agentData={parsedContent} />;
          }
          break;
        case "simple_text_box":
          if (parsedContent) {
            mainElement = parsedContent;
          }
          break;
        case "QaAgent":
          if (parsedContent) {
            mainElement = <QaAgentComponent qaData={parsedContent} />;
          }
          break;
        case "FinalAnswerAgent":
          if (parsedContent && parsedContent.final_answer) {
            mainElement = <FinalAnswerComponent answerData={parsedContent} />;
          }
          break;
        case "SuggestHumanActions":
          if (parsedContent && parsedContent.action_id) {
            mainElement = (
              <FollowupAction
                followupAction={parsedContent}
                callback={async (d: any) => {
                  console.log("calling fetch again");
                  await fetchStreamingData(chatInstance, "", d);
                }}
              />
            );
          }
          break;
        default:
          const isJSONLike =
            parsedContent !== null &&
            (typeof parsedContent === "object" || Array.isArray(parsedContent)) &&
            !(parsedContent instanceof Date) &&
            !(parsedContent instanceof RegExp);
          if (isJSONLike) {
            parsedContent = JSON.stringify(parsedContent, null, 2);
            parsedContent = `\`\`\`json\n${parsedContent}\n\`\`\``;
          }
          if (!parsedContent) {
            parsedContent = "";
          }
          mainElement = <SingleExpandableContent title={step.title} content={parsedContent} />;
      }

      // Add main element to outputElements if it exists
      if (mainElement) {
        outputElements.push(mainElement);
      }

      return <div>{outputElements}</div>;
    } catch (error) {
      console.log(`Failed to parse JSON for step ${step.title}:`, error);
      return null;
    }
  };

  // const LoadingSpinner = () => (
  //   <svg
  //     width="16"
  //     height="16"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="animate-spin"
  //   >
  //     <circle
  //       cx="12"
  //       cy="12"
  //       r="10"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeDasharray="40"
  //       strokeDashoffset="20"
  //       fill="none"
  //     />
  //   </svg>
  // );

  const StopIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    </svg>
  );

  const errorStep: Step = {
    id: `step-${Date.now()}`,
    title: data.step_title,
    content: data.data,
    expanded: true,
    isNew: true,
  };
  const mapStepTitle = (stepTitle) => {
    const titleMap = {
      TaskDecompositionAgent: "📋 Task Decomposition",
      TaskAnalyzerAgent: "🔍 Task Analyzer",
      PlanControllerAgent: "🎯 Plan Controller",
      SuggestHumanActions: (
        <span style={{ display: "flex" }}>
          <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          <span style={{ marginLeft: "5px" }}>CUGA is waiting for your input</span>
        </span>
      ),
      APIPlannerAgent: "📋 API Planner",
      CodeAgent: "👨‍💻 Code Agent",
      FinalAnswerAgent: "✅ Final Answer",
      Answer: "Answer",
    };

    return titleMap[stepTitle] || stepTitle;
  };
  const steps = [errorStep];
  console.log("current steps are: ", steps);
  return (
    <div className="components-container">
      {steps.map((step) => {
        const componentContent = renderStepContent(step);

        // Only render if we have valid component content
        if (!componentContent) return null;
        if (step.title == "simple_text") {
          return <div style={{ marginBottom: "10px" }}>{step.content}</div>;
        }
        return (
          <div
            key={step.id}
            className={`component-container ${step.isNew ? "new-component" : ""}`}
            style={{
              marginBottom: "24px",
              padding: "16px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Component Title */}
            <div
              style={{
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "2px solid #f3f4f6",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#374151",
                  margin: "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {mapStepTitle(step.title)}
              </h2>
            </div>

            {/* Component Content */}
            <div>{componentContent}</div>
          </div>
        );
      })}
    </div>
  );
}

// Top-level component wrapper that forces re-rendering on reset
function CustomResponseWrapper(props: CustomResponseExampleProps) {
  const [resetCounter] = useState(() => window.aiSystemInterfaceResetCounter || 0);

  if (resetCounter !== window.aiSystemInterfaceResetCounter) {
    return null;
  }

  return <CustomResponseExample {...props} />;
}
export { CustomResponseWrapper as CustomResponseExample };
