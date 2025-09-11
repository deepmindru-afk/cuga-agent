import { useState } from "react";
import React from "react";
export default function TaskStatusDashboard({ taskData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);

  // Sample data - you can replace this with props

  const {
    thoughts,
    subtasks_progress,
    next_subtask,
    next_subtask_type,
    next_subtask_app,
    conclude_task,
    conclude_final_answer,
  } = taskData;

  const total = subtasks_progress.length;
  const completed = subtasks_progress.filter((status) => status === "completed").length;
  const progressPercentage = (completed / total) * 100;

  function getStatusIcon(status) {
    if (status === "completed") return "✅";
    if (status === "in-progress") return "🔄";
    if (status === "not-started") return "⏳";
    return "❓";
  }

  function getAppIcon(app) {
    if (!app) return "🔧";
    const appLower = app.toLowerCase();
    if (appLower === "gmail") return "📧";
    if (appLower === "calendar") return "📅";
    if (appLower === "drive") return "📁";
    if (appLower === "sheets") return "📊";
    return "🔧";
  }

  function getTypeColor(type) {
    if (type === "api") return "bg-blue-100 text-blue-800";
    if (type === "analysis") return "bg-purple-100 text-purple-800";
    if (type === "calculation") return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  }

  function truncateText(text, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  // Create a summary of thoughts
  function getThoughtsSummary() {
    if (thoughts.length === 0) return "No thoughts recorded";
    const firstThought = truncateText(thoughts[0], 100);
    return firstThought;
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Thoughts Section - Top & Subtle */}
          <div className="mb-3 pb-2 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">💭</span>
                  <span className="text-xs text-gray-500 font-medium">Thoughts ({thoughts.length})</span>
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
            <h2 className="text-lg font-bold text-gray-800">Task Progress</h2>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                conclude_task ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {conclude_task ? "✅ Complete" : "⏳ Active"}
            </span>
          </div>

          {/* Compact Progress Section */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Subtasks</span>
              <span className="text-xs text-gray-500">
                {completed}/{total}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Progress Bar */}
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              {/* Task Icons */}
              <div className="flex gap-1">
                {subtasks_progress.map((status, index) => (
                  <span
                    key={index}
                    className="text-lg hover:scale-110 transition-transform cursor-pointer"
                    title={`Task ${index + 1}: ${status.replace("-", " ")}`}
                  >
                    {getStatusIcon(status)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next Action - Compact */}
          <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">🎯</span>
              <span className="font-medium text-gray-800">Next:</span>
              <span className={`px-2 py-0.5 rounded text-xs ${getTypeColor(next_subtask_type)}`}>
                {next_subtask_type}
              </span>
              {next_subtask_app && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-white rounded text-xs text-gray-600 border">
                  {getAppIcon(next_subtask_app)} {next_subtask_app}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed pl-6">{next_subtask}</p>
          </div>

          {/* Final Answer Section (if available) */}
          {conclude_final_answer && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                <span>🎉</span> Result
              </h3>
              <p className="text-sm text-green-700">{conclude_final_answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
