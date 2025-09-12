import { ChatCustomElement, ChatInstance, PublicConfig } from "@carbon/ai-chat";
import React, { useMemo } from "react"; // React declaration MUST be here
import { createRoot } from "react-dom/client";

// These functions hook up to your back-end.
import { customSendMessage } from "./customSendMessage";
// This function returns a React component for user defined responses.
import { renderUserDefinedResponse } from "./renderUserDefinedResponse";
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
  const renderWriteableElements = useMemo(
    () => ({
      beforeInputElement: <StopButton location="sidebar" />,
      // <FloatingChatControls
      //   location="sidebar"
      //   parentStateText="Some state text"
      //   flags={exampleFlags}
      //   onFlagChange={(flagKey, value, allFlags) => {
      //     console.log(`Flag ${flagKey} changed to ${value}`);
      //     console.log("All flags:", allFlags);
      //   }}
      //   onAllFlagsChange={(allFlags) => {
      //     console.log("All flags updated:", allFlags);
      //   }}
      // />
      // ),
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