import React, { useState } from "react";

export default function ActionStatusDashboard({ actionData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);

  // Sample data - you can replace this with props

  const { thoughts, action, action_input_shortlisting_agent, action_input_coder_agent, action_input_conclude_task } =
    actionData;

  function truncateText(text, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  function getThoughtsSummary() {
    if (thoughts.length === 0) return "No thoughts recorded";
    const firstThought = truncateText(thoughts[0], 100);
    return firstThought;
  }

  function getActionIcon(actionType) {
    switch (actionType) {
      case "CoderAgent":
        return "👨‍💻";
      case "ShortlistingAgent":
        return "📋";
      case "conclude_task":
        return "🎯";
      default:
        return "⚡";
    }
  }

  function getActionColor(actionType) {
    switch (actionType) {
      case "CoderAgent":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "ShortlistingAgent":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "conclude_task":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }

  // Determine which action is active
  const activeAction = action;
  const activeActionInput = action_input_coder_agent || action_input_shortlisting_agent || action_input_conclude_task;

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Thoughts Section - Subtle */}
          <div className="mb-3 pb-2 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">💭</span>
                  <span className="text-xs text-gray-500 font-medium">Analysis ({thoughts.length})</span>
                  <button
                    onClick={() => setShowFullThoughts(!showFullThoughts)}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    {showFullThoughts ? "▲" : "▼"}
                  </button>
                </div>
                {!showFullThoughts && <p className="text-xs text-gray-400 italic">{getThoughtsSummary()}</p>}
              </div>
            </div>

            {showFullThoughts && (
              <div className="mt-2 space-y-1">
                {thoughts.map((thought, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-xs text-gray-300 mt-0.5 font-mono">{index + 1}.</span>
                    <p className="text-xs text-gray-500 leading-relaxed">{thought}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Active Action</h2>
            <span className={`px-3 py-1 rounded-full text-sm border ${getActionColor(activeAction)}`}>
              {getActionIcon(activeAction)} {activeAction}
            </span>
          </div>

          {/* Active Action Details */}
          {activeActionInput && (
            <div className={`p-4 rounded-lg border-2 ${getActionColor(activeAction)}`}>
              {/* Coder Agent */}
              {action_input_coder_agent && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">👨‍💻</span>
                    <h3 className="font-semibold text-purple-800">Coder Agent Task</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-purple-700">Task:</span>
                      <p className="text-sm text-purple-600 mt-1 leading-relaxed">
                        {action_input_coder_agent.task_description}
                      </p>
                    </div>

                    {action_input_coder_agent.context_variables_from_history &&
                      action_input_coder_agent.context_variables_from_history.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-purple-700">Context Variables:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {action_input_coder_agent.context_variables_from_history.map((variable, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs border"
                              >
                                📦 {variable}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    {action_input_coder_agent.relevant_apis && action_input_coder_agent.relevant_apis.length > 0 && (
                      <div>
                        <span className="text-sm font-medium text-purple-700">APIs:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {action_input_coder_agent.relevant_apis.map((api, index) => (
                            <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs border">
                              🔌 {api.api_name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Shortlisting Agent */}
              {action_input_shortlisting_agent && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">📋</span>
                    <h3 className="font-semibold text-blue-800">Shortlisting Agent Task</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-purple-700">Task:</span>
                      <p className="text-sm text-purple-600 mt-1 leading-relaxed">
                        {action_input_shortlisting_agent.task_description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Conclude Task */}
              {action_input_conclude_task && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🎯</span>
                    <h3 className="font-semibold text-green-800">Task Conclusion</h3>
                  </div>
                  <p className="text-sm text-green-600 leading-relaxed">{action_input_conclude_task.final_response}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Status Overview */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div
              className={`p-2 rounded text-center text-xs ${
                action_input_coder_agent ? "bg-purple-100 text-purple-800" : "bg-gray-50 text-gray-400"
              }`}
            >
              <div className="text-base mb-1">👨‍💻</div>
              <div className="font-medium">Coder</div>
              <div>{action_input_coder_agent ? "Active" : "Inactive"}</div>
            </div>

            <div
              className={`p-2 rounded text-center text-xs ${
                action_input_shortlisting_agent ? "bg-blue-100 text-blue-800" : "bg-gray-50 text-gray-400"
              }`}
            >
              <div className="text-base mb-1">📋</div>
              <div className="font-medium">Shortlister</div>
              <div>{action_input_shortlisting_agent ? "Active" : "Inactive"}</div>
            </div>

            <div
              className={`p-2 rounded text-center text-xs ${
                action_input_conclude_task ? "bg-green-100 text-green-800" : "bg-gray-50 text-gray-400"
              }`}
            >
              <div className="text-base mb-1">🎯</div>
              <div className="font-medium">Conclude</div>
              <div>{action_input_conclude_task ? "Active" : "Inactive"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
