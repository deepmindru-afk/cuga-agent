import { ChatInstance, RenderUserDefinedState } from "@carbon/ai-chat";
import React from "react";

import { CustomResponseExample } from "./CustomResponseExample";

function renderUserDefinedResponse(state: RenderUserDefinedState, instance: ChatInstance) {
  const { messageItem } = state;
  // The event here will contain details for each user defined response that needs to be rendered.
  // If you need to access data from the parent component, you could define this function there instead.
  console.log("user defined!!", messageItem);

  if (messageItem) {
    switch (messageItem.user_defined?.user_defined_type) {
      case "my_unique_identifier":
        return (
          <CustomResponseExample
            data={messageItem.user_defined as { step_title: string; data: string }}
            chatInstance={instance}
          />
        );
      default:
        return undefined;
    }
  }
  return undefined;
}

export { renderUserDefinedResponse };
