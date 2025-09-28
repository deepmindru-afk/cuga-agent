import { ChatCustomElement, ChatInstance, PublicConfig } from "@carbon/ai-chat";
import React, { useMemo } from "react"; // React declaration MUST be here
import { createRoot } from "react-dom/client";

// These functions hook up to your back-end.
import { customSendMessage } from "./customSendMessage";
// This function returns a React component for user defined responses.
import { renderUserDefinedResponse, resetCardManagerState } from "./renderUserDefinedResponse";
import { StopButton } from "./floating/stop_button";

export function App() {

  const chatConfig: PublicConfig = useMemo(
    () => ({
      headerConfig: { hideMinimizeButton: true, showRestartButton: true },
      debug: true,
      layout: { showFrame: false },
      openChatByDefault: true,
      messaging: { customSendMessage }
    }),
    []
  );

  function onBeforeRender(instance: ChatInstance) {
    // Handle feedback event.
    instance.on({ type: "FEEDBACK" as any, handler: feedbackHandler });
    instance.on({ type: "pre:restartConversation" as any, handler: restartConversationHandler });
  }

  /**
   * Handles when the user submits feedback.
   */
  function feedbackHandler(event: any) {
    if (event.interactionType === "SUBMITTED") {
      const { message, messageItem, ...reportData } = event;
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(reportData, null, 2));
      });
    }
  }
  async function restartConversationHandler(_event: any) {
    console.log("Restarting conversation");
    
    try {
      // Call the backend reset endpoint
      const response = await fetch('/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log("Backend reset successful:", result.message);
      } else {
        console.error("Backend reset failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error calling reset endpoint:", error);
    }
    
    // Reset the CardManager state
    resetCardManagerState();
    
    // Reset the CardManager through the global interface if available
    if (typeof window !== "undefined" && window.aiSystemInterface) {
      console.log("Resetting CardManager through global interface");
      window.aiSystemInterface.forceReset();
    }
  }
  const renderWriteableElements = useMemo(
    () => ({
      beforeInputElement: <StopButton location="sidebar" />,
    }),
    []
  );

  return (
    <ChatCustomElement
      config={chatConfig}
      className={"fullScreen"}
      renderWriteableElements={renderWriteableElements}
      onBeforeRender={onBeforeRender}
      renderUserDefinedResponse={renderUserDefinedResponse}
    />
  );
}

export function BootstrapAgentic(contentRoot: HTMLElement) {
  // Create a root for React to render into.
  console.log("Bootstrapping Agentic Chat in sidepanel");
  const root = createRoot(contentRoot);
  // Render the App component into the root.
  root.render(
      <App />
  );
}