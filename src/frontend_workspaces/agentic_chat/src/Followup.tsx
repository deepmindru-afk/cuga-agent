import React, { useState, useEffect } from "react";
import { Check, X, Send, ChevronDown, Clock } from "lucide-react";

export const FollowupAction = ({ followupAction, callback }) => {
  const [response, setResponse] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime] = useState(Date.now());
  const [isWaiting, setIsWaiting] = useState(true);

  const {
    action_id,
    action_name,
    description,
    type,
    button_text,
    placeholder,
    options = [],
    max_selections,
    min_selections = 1,
    required = true,
    validation_pattern,
    max_length,
    min_length,
    priority = 1,
    icon,
    color = "primary",
  } = followupAction;

  // Simulate initial loading/waiting state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaiting(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Color themes with enhanced gradients and shadows
  const colorThemes = {
    primary: {
      button:
        "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-blue-500 shadow-lg hover:shadow-xl",
      accent: "text-blue-600 border-blue-200 bg-blue-50",
      ring: "ring-blue-500",
      glow: "shadow-blue-200",
    },
    success: {
      button:
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-green-500 shadow-lg hover:shadow-xl",
      accent: "text-green-600 border-green-200 bg-green-50",
      ring: "ring-green-500",
      glow: "shadow-green-200",
    },
    warning: {
      button:
        "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-yellow-500 shadow-lg hover:shadow-xl",
      accent: "text-yellow-600 border-yellow-200 bg-yellow-50",
      ring: "ring-yellow-500",
      glow: "shadow-yellow-200",
    },
    danger: {
      button:
        "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-red-500 shadow-lg hover:shadow-xl",
      accent: "text-red-600 border-red-200 bg-red-50",
      ring: "ring-red-500",
      glow: "shadow-red-200",
    },
    secondary: {
      button:
        "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white border-gray-500 shadow-lg hover:shadow-xl",
      accent: "text-gray-600 border-gray-200 bg-gray-50",
      ring: "ring-gray-500",
      glow: "shadow-gray-200",
    },
  };

  const theme = colorThemes[color] || colorThemes.primary;

  const createResponse = (responseData) => {
    const baseResponse = {
      action_id,
      response_type: type,
      timestamp: new Date().toISOString(),
      response_time_ms: Date.now() - startTime,
      client_info: {
        user_agent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
      },
    };

    return { ...baseResponse, ...responseData };
  };

  const handleSubmit = (responseData) => {
    if (isSubmitted) return;

    setIsSubmitted(true);
    const fullResponse = createResponse(responseData);
    callback(fullResponse);
  };

  const handleTextSubmit = () => {
    if (!response.trim() && required) return;

    // Validation
    if (validation_pattern && !new RegExp(validation_pattern).test(response)) {
      // Replaced alert with a simple console log for demonstration.
      // In a real app, you'd use a custom modal or inline error message.
      console.error("Please enter a valid response");
      return;
    }

    if (min_length && response.length < min_length) {
      console.error(`Response must be at least ${min_length} characters`);
      return;
    }

    if (max_length && response.length > max_length) {
      console.error(`Response must be no more than ${max_length} characters`);
      return;
    }

    handleSubmit({ text_response: response });
  };

  const handleButtonClick = () => {
    handleSubmit({ button_clicked: true });
  };

  const handleConfirmation = (confirmed) => {
    handleSubmit({ confirmed });
  };

  const handleSelectChange = (value) => {
    let newSelection;

    if (type === "multi_select") {
      if (selectedValues.includes(value)) {
        newSelection = selectedValues.filter((v) => v !== value);
      } else {
        if (max_selections && selectedValues.length >= max_selections) {
          return; // Max selections reached
        }
        newSelection = [...selectedValues, value];
      }
    } else {
      newSelection = [value];
    }

    setSelectedValues(newSelection);

    // Auto-submit for single select
    if (type === "select") {
      const selectedOptions = options.filter((opt) => newSelection.includes(opt.value));
      handleSubmit({
        selected_values: newSelection,
        selected_options: selectedOptions,
      });
    }
  };

  const handleMultiSelectSubmit = () => {
    if (selectedValues.length < min_selections) {
      console.error(`Please select at least ${min_selections} option(s)`);
      return;
    }

    const selectedOptions = options.filter((opt) => selectedValues.includes(opt.value));
    handleSubmit({
      selected_values: selectedValues,
      selected_options: selectedOptions,
    });
  };

  const renderWaitingState = () => (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Clock className="w-5 h-5 text-gray-400 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin"></div>
        </div>
        <span className="text-sm text-gray-500 animate-pulse">Preparing your action...</span>
      </div>
    </div>
  );

  const renderActionContent = () => {
    if (isWaiting) {
      return renderWaitingState();
    }

    if (isSubmitted) {
      return (
        <div className="flex items-center justify-center py-4 text-green-600 animate-in fade-in duration-300">
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <Check className="w-5 h-5 animate-in zoom-in duration-200" />
            <span className="text-sm font-medium">Response submitted successfully!</span>
          </div>
        </div>
      );
    }

    switch (type) {
      case "button":
        return (
          <button
            onClick={handleButtonClick}
            className={`w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${theme.button} flex items-center justify-center gap-2 animate-in slide-in-from-bottom-4 duration-500`}
          >
            {icon && <span className="animate-in zoom-in duration-300 delay-100">{icon}</span>}
            <span className="animate-in fade-in duration-300 delay-200">{button_text || action_name}</span>
          </button>
        );

      case "text_input":
      case "natural_language":
        return (
          <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative">
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder={placeholder || "Enter your response..."}
                className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-transparent focus:ring-4 focus:${
                  theme.ring
                } focus:ring-opacity-20 text-sm transition-all duration-200 ${response.trim() ? theme.accent : ""}`}
                rows={type === "natural_language" ? 3 : 1}
                maxLength={max_length}
              />
              {response.trim() && (
                <div className="absolute right-3 top-3 animate-in zoom-in duration-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            {max_length && (
              <div className="text-xs text-gray-500 text-right transition-all duration-200">
                <span className={response.length > max_length * 0.8 ? "text-orange-500" : ""}>{response.length}</span>/
                {max_length}
              </div>
            )}
            <button
              onClick={handleTextSubmit}
              disabled={!response.trim() && required}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                !response.trim() && required
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : `${theme.button} hover:shadow-lg`
              } flex items-center gap-2`}
            >
              <Send className="w-4 h-4" />
              Submit
            </button>
          </div>
        );

      case "select":
        return (
          <div className="space-y-2 animate-in slide-in-from-bottom-4 duration-500">
            {options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleSelectChange(option.value)}
                className={`w-full px-4 py-3 text-left rounded-xl border-2 transition-all duration-200 text-sm transform hover:scale-[1.01] hover:shadow-md ${
                  selectedValues.includes(option.value)
                    ? `${theme.button} border-current shadow-lg animate-in zoom-in duration-200`
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="font-medium">{option.label}</div>
                {option.description && <div className="text-xs opacity-75 mt-1">{option.description}</div>}
              </button>
            ))}
          </div>
        );

      case "multi_select":
        return (
          <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {options.map((option, index) => (
                <label
                  key={option.value}
                  className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md transform hover:scale-[1.01] ${
                    selectedValues.includes(option.value)
                      ? `${theme.accent} border-current shadow-sm`
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleSelectChange(option.value)}
                    className={`mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500 transition-all duration-200 ${
                      selectedValues.includes(option.value) ? "animate-in zoom-in duration-200" : ""
                    }`}
                    disabled={
                      !selectedValues.includes(option.value) &&
                      max_selections &&
                      selectedValues.length >= max_selections
                    }
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{option.label}</div>
                    {option.description && <div className="text-xs text-gray-600 mt-1">{option.description}</div>}
                  </div>
                </label>
              ))}
            </div>
            {max_selections && (
              <div className="text-xs text-gray-500 transition-all duration-200">
                <span className={selectedValues.length === max_selections ? "text-orange-500 font-medium" : ""}>
                  {selectedValues.length}
                </span>
                /{max_selections} selected
              </div>
            )}
            <button
              onClick={handleMultiSelectSubmit}
              disabled={selectedValues.length < min_selections}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                selectedValues.length < min_selections
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : `${theme.button} hover:shadow-lg`
              } flex items-center gap-2`}
            >
              <Check className="w-4 h-4" />
              Submit ({selectedValues.length})
            </button>
          </div>
        );

      case "confirmation":
        return (
          <div className="flex gap-3 animate-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={() => handleConfirmation(true)}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Confirm
            </button>
            <button
              onClick={() => handleConfirmation(false)}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        );

      default:
        return <div className="text-gray-500 text-sm">Unsupported action type: {type}</div>;
    }
  };

  return (
    // The main container div for the FollowupAction component.
    // It applies various styling classes based on the component's state.
    // - `bg-white`, `border-2`, `border-gray-100`, `rounded-2xl`, `p-5`, `mx-auto`: Basic styling for the card.
    // - `transition-all duration-300`: Smooth transitions for state changes.
    // - Conditional classes:
    //   - `isWaiting ? "animate-pulse"`: Applies a pulse animation when the component is initially waiting.
    //   - `!isWaiting && !isSubmitted`: These conditions mean the component is ready for user interaction.
    //     - `animate-in slide-in-from-bottom-6 duration-700`: An entrance animation.
    //     - `hover:shadow-xl hover:border-gray-200`: Hover effects.
    //     - `animate-subtle-glow`: **NEW!** This class applies a subtle, continuous glow animation
    //                                  to indicate it's waiting for user interaction.
    //   - `${!isWaiting && !isSubmitted ? theme.glow : ""}`: Applies a theme-specific glow shadow.
    <div
      className={`bg-white border-2 border-gray-100 rounded-2xl p-5 mx-auto transition-all duration-300 ${
        isWaiting
          ? "animate-pulse"
          : `animate-in slide-in-from-bottom-6 duration-700 hover:shadow-xl hover:border-gray-200 ${
              !isSubmitted ? "animate-subtle-glow" : ""
            }`
      } ${!isWaiting && !isSubmitted ? theme.glow : ""}`}
    >
      {/* Defines the keyframe animation for a subtle glow effect. */}
      {/* This animation makes the element's shadow subtly expand and contract, */}
      {/* giving a "breathing" or "waiting" visual cue without being too distracting. */}
      {/* It targets the `box-shadow` property and runs infinitely. */}
      <style jsx>{`
        @keyframes subtle-glow {
          0%,
          100% {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 0 0px rgba(0, 0, 0, 0);
          }
          50% {
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(var(--accent-rgb), 0.2);
          }
        }
        .animate-subtle-glow {
          animation: subtle-glow 2s infinite alternate ease-in-out;
        }
      `}</style>

      {!isWaiting && (
        <div className="mb-4 animate-in fade-in duration-500 delay-300">
          <div className="flex items-center gap-2 mb-2">
            {icon && <span className="text-lg animate-in zoom-in duration-300 delay-400">{icon}</span>}
            <h3 className="font-semibold text-gray-900 text-sm animate-in slide-in-from-left-2 duration-300 delay-500">
              {action_name}
            </h3>
            {required && <span className="text-red-500 text-xs animate-in zoom-in duration-200 delay-600">*</span>}
          </div>
          {description && (
            <p className="text-gray-600 text-xs leading-relaxed animate-in slide-in-from-left-2 duration-300 delay-700">
              {description}
            </p>
          )}
        </div>
      )}

      {renderActionContent()}
    </div>
  );
};
