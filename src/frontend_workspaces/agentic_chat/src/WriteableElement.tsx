import React, { useState } from "react";
import "./WriteableElementExample.css";

// Define the structure for each flag option
interface FlagOption {
  value: string;
  label: string;
  icon: string;
}

// Define the structure for each flag configuration
interface FlagConfig {
  key: string;
  label: string;
  options: FlagOption[];
  defaultValue: string;
}

interface FloatingChatControlsProps {
  location: string;
  parentStateText: string;
  flags: FlagConfig[];
  onFlagChange?: (flagKey: string, value: string, allFlags: Record<string, string>) => void;
  onAllFlagsChange?: (allFlags: Record<string, string>) => void;
}

function FloatingChatControls({
  location,
  parentStateText,
  flags,
  onFlagChange,
  onAllFlagsChange,
}: FloatingChatControlsProps) {
  // Initialize state with default values from flag configs
  const [flagStates, setFlagStates] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    flags.forEach((flag) => {
      initialState[flag.key] = flag.defaultValue;
    });
    return initialState;
  });

  const handleFlagToggle = (flagKey: string) => {
    const flag = flags.find((f) => f.key === flagKey);
    if (!flag) return;

    const currentIndex = flag.options.findIndex((option) => option.value === flagStates[flagKey]);
    const nextIndex = (currentIndex + 1) % flag.options.length;
    const newValue = flag.options[nextIndex].value;

    const newFlagStates = {
      ...flagStates,
      [flagKey]: newValue,
    };

    setFlagStates(newFlagStates);

    // Call individual flag change callback
    onFlagChange?.(flagKey, newValue, newFlagStates);

    // Call all flags change callback
    onAllFlagsChange?.(newFlagStates);
  };

  const getCurrentOption = (flagKey: string): FlagOption | undefined => {
    const flag = flags.find((f) => f.key === flagKey);
    if (!flag) return undefined;

    return flag.options.find((option) => option.value === flagStates[flagKey]);
  };

  return (
    <div className="floating-controls-container">
      {flags.map((flag) => {
        const currentOption = getCurrentOption(flag.key);
        if (!currentOption) return null;

        return (
          <div
            key={flag.key}
            style={{ display: "inline-block", marginRight: "5px" }}
            className="floating-toggle"
            onClick={() => handleFlagToggle(flag.key)}
            title={`${flag.label}: ${currentOption.label}`}
          >
            <span className="toggle-icon">{currentOption.icon}</span>
            <span className="toggle-text">{currentOption.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export { FloatingChatControls };
export type { FlagConfig, FlagOption, FloatingChatControlsProps };

// Example usage:
/*
const exampleFlags: FlagConfig[] = [
  {
    key: "mode",
    label: "Processing Mode",
    options: [
      { value: "fast", label: "Fast", icon: "⚡" },
      { value: "accurate", label: "Accurate", icon: "🎯" },
      { value: "balanced", label: "Balanced", icon: "⚖️" }
    ],
    defaultValue: "accurate"
  },
  {
    key: "privacy",
    label: "Privacy Level",
    options: [
      { value: "public", label: "Public", icon: "🌐" },
      { value: "private", label: "Private", icon: "🔒" },
      { value: "anonymous", label: "Anonymous", icon: "👤" }
    ],
    defaultValue: "private"
  },
  {
    key: "language",
    label: "Response Language",
    options: [
      { value: "en", label: "English", icon: "🇺🇸" },
      { value: "es", label: "Spanish", icon: "🇪🇸" },
      { value: "fr", label: "French", icon: "🇫🇷" }
    ],
    defaultValue: "en"
  }
];

// Usage in parent component:
<FloatingChatControls
  location="sidebar"
  parentStateText="Some state text"
  flags={exampleFlags}
  onFlagChange={(flagKey, value, allFlags) => {
    console.log(`Flag ${flagKey} changed to ${value}`);
    console.log('All flags:', allFlags);
  }}
  onAllFlagsChange={(allFlags) => {
    console.log('All flags updated:', allFlags);
  }}
/>
*/
