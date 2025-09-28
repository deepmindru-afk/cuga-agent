import React from "react";
import { ChatInstance, RenderUserDefinedState } from "@carbon/ai-chat";

import CardManager from "./CardManager";

// Global state to track if we should show the card manager
let shouldShowCardManager = false;
let cardManagerInstance: ChatInstance | null = null;

// Function to set the card manager state
export const setCardManagerState = (show: boolean, instance?: ChatInstance) => {
  shouldShowCardManager = show;
  if (instance) {
    cardManagerInstance = instance;
  }
};

// Function to reset the card manager state
export const resetCardManagerState = () => {
  shouldShowCardManager = false;
  cardManagerInstance = null;
};

function renderUserDefinedResponse(state: RenderUserDefinedState, _instance: ChatInstance) {
  const { messageItem } = state;
  console.log("renderUserDefinedResponse called:", {
    messageItem,
    shouldShowCardManager,
    cardManagerInstance: !!cardManagerInstance,
    isCardManager: messageItem?.user_defined?.isCardManager
  });

  if (messageItem) {
    switch (messageItem.user_defined?.user_defined_type) {
      case "my_unique_identifier":
        // Render the CardManager when card manager is enabled and properly configured
        if (shouldShowCardManager && cardManagerInstance && messageItem.user_defined.isCardManager) {
          console.log("Rendering CardManager");
          return <CardManager chatInstance={cardManagerInstance} />;
        }
        console.log("Card manager not properly configured, returning null");
        return null;
      default:
        return undefined;
    }
  }
  return undefined;
}

export { renderUserDefinedResponse };
