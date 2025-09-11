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
          backgroundColor: "#fa7684ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          marginBottom: "4px",
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#c82333";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#dc3545";
        }}
      >
        ⏹️ Stop Processing
      </button>
    </div>
  );
};
