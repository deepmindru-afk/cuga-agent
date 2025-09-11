import React, { createContext, useContext, useReducer, useCallback } from "react";
import { ChatInstance } from "@carbon/ai-chat";

interface Step {
  id: string;
  title: string;
  content: string;
  expanded: boolean;
  timestamp: number;
  isNew?: boolean;
}

interface StreamState {
  steps: Step[];
  isStreaming: boolean;
  isComplete: boolean;
  isStopped: boolean;
  currentStreamId: string | null;
}

type StreamAction =
  | { type: "START_STREAM"; streamId: string }
  | { type: "ADD_STEP"; step: Omit<Step, "id" | "timestamp"> }
  | { type: "STOP_STREAM" }
  | { type: "COMPLETE_STREAM" }
  | { type: "RESET_STREAM"; streamId: string };

const initialState: StreamState = {
  steps: [],
  isStreaming: false,
  isComplete: false,
  isStopped: false,
  currentStreamId: null,
};

function streamReducer(state: StreamState, action: StreamAction): StreamState {
  switch (action.type) {
    case "START_STREAM":
      // Only start if this is a new stream or if we're not currently streaming
      if (state.currentStreamId === action.streamId && state.isStreaming) {
        return state; // Already streaming this exact stream
      }

      return {
        ...state,
        isStreaming: true,
        isComplete: false,
        isStopped: false,
        currentStreamId: action.streamId,
      };

    case "ADD_STEP":
      if (!state.isStreaming || state.isStopped) return state;

      const newStep: Step = {
        id: `step-${Date.now()}-${Math.random()}`,
        timestamp: Date.now(),
        expanded: true,
        isNew: true, // Mark as new for animation
        ...action.step,
      };

      return {
        ...state,
        steps: [...state.steps, newStep],
      };

    case "STOP_STREAM":
      return {
        ...state,
        isStopped: true,
        isStreaming: false,
      };

    case "COMPLETE_STREAM":
      return {
        ...state,
        isComplete: true,
        isStreaming: false,
      };

    case "RESET_STREAM":
      // Clear everything and prepare for new stream
      return {
        steps: [],
        isStreaming: true,
        isComplete: false,
        isStopped: false,
        currentStreamId: action.streamId,
      };

    default:
      return state;
  }
}

interface StreamContextValue {
  state: StreamState;
  startStream: (streamId: string) => void;
  addStep: (title: string, content: string) => void;
  stopStream: () => void;
  completeStream: () => void;
  resetStream: (streamId: string) => void;
}

const StreamContext = createContext<StreamContextValue | null>(null);

export function StreamProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(streamReducer, initialState);

  const startStream = useCallback((streamId: string) => {
    dispatch({ type: "START_STREAM", streamId });
  }, []);

  const addStep = useCallback((title: string, content: string) => {
    dispatch({ type: "ADD_STEP", step: { title, content } });
  }, []);

  const stopStream = useCallback(() => {
    dispatch({ type: "STOP_STREAM" });
  }, []);

  const completeStream = useCallback(() => {
    dispatch({ type: "COMPLETE_STREAM" });
  }, []);

  const resetStream = useCallback((streamId: string) => {
    dispatch({ type: "RESET_STREAM", streamId });
  }, []);

  const value: StreamContextValue = {
    state,
    startStream,
    addStep,
    stopStream,
    completeStream,
    resetStream,
  };

  return <StreamContext.Provider value={value}>{children}</StreamContext.Provider>;
}

export function useStream() {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error("useStream must be used within a StreamProvider");
  }
  return context;
}
