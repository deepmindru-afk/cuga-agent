import React, { useState } from "react";
export default function TaskDecompositionComponent({ decompositionData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);

  // Extract data from props
  const { thoughts, task_decomposition } = decompositionData;

  function getAppIcon(appName) {
    switch (appName?.toLowerCase()) {
      case "gmail":
        return "📧";
      case "phone":
        return "📱";
      case "venmo":
        return "💰";
      case "calendar":
        return "📅";
      case "drive":
        return "📁";
      case "sheets":
        return "📊";
      case "slack":
        return "💬";
      default:
        return "🔧";
    }
  }

  function getAppColor(appName) {
    switch (appName?.toLowerCase()) {
      case "gmail":
        return "bg-red-100 text-red-800 border-red-200";
      case "phone":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "venmo":
        return "bg-green-100 text-green-800 border-green-200";
      case "calendar":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "drive":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }

  function getStepNumber(index) {
    return String(index + 1).padStart(2, "0");
  }

  function truncateThoughts(text, maxLength = 120) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Thoughts Section - Subtle */}
          <div className="mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">💭</span>
                  <span className="text-xs text-gray-500 font-medium">Analysis</span>
                  <button
                    onClick={() => setShowFullThoughts(!showFullThoughts)}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    {showFullThoughts ? "▲" : "▼"}
                  </button>
                </div>
                <p className="text-xs text-gray-400 italic">
                  {showFullThoughts ? thoughts : truncateThoughts(thoughts)}
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">📋</span>
              Task Breakdown
            </h2>
            <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-200">
              {task_decomposition.length} steps planned
            </span>
          </div>

          {/* Task Steps */}
          <div className="space-y-4">
            {task_decomposition.map((task, index) => (
              <div key={index} className="relative">
                {/* Connector Line (except for last item) */}
                {index < task_decomposition.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                )}

                <div className="flex items-start gap-4">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {getStepNumber(index)}
                  </div>

                  {/* Task Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border-2 ${getAppColor(task.app)}`}
                        >
                          {getAppIcon(task.app)} {task.app}
                        </span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-gray-600 border">{task.type}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">{task.task}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
