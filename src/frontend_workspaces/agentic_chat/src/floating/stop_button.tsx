// StopButton.tsx
import React, { useState, useEffect } from "react";
import { streamStateManager } from "../StreamManager";
import "../WriteableElementExample.css";
interface StopButtonProps {
  location?: "sidebar" | "inline";
}

export const StopButton: React.FC<StopButtonProps> = ({ location = "sidebar" }) => {
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const unsubscribe = streamStateManager.subscribe(setIsStreaming);
    return unsubscribe;
  }, []);

  const handleStop = async () => {
    await streamStateManager.stopStream();
    if (typeof window !== "undefined" && (window as any).aiSystemInterface) {
      try {
        (window as any).aiSystemInterface.stopProcessing?.();
        (window as any).aiSystemInterface.setProcessingComplete?.(true);
      } catch (e) {
        // noop
      }
    }
  };

  if (!isStreaming) {
    return null;
  }

  return (
    <div className="floating-controls-container">
      <button
        onClick={handleStop}
        // className="floating-toggle"
        style={{
          color: "black",
          border: "#c6c6c6 solid 1px",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          opacity: "0.6",
          fontWeight: "400",
          borderRadius: "4px",
          marginBottom: "6px",
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "black";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "";
          e.currentTarget.style.color = "black";
          e.currentTarget.style.opacity = "0.6";
        }}
      >
        Stop Processing
      </button>
    </div>
  );
};
