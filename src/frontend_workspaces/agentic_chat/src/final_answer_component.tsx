import { useState } from "react";
import React from "react";

export default function FinalAnswerComponent({ answerData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);
  const [showFullAnswer, setShowFullAnswer] = useState(false);

  // Sample data - you can replace this with props

  const { thoughts, final_answer } = answerData;

  function truncateText(text, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  function getThoughtsSummary() {
    if (thoughts.length === 0) return "No analysis recorded";
    const firstThought = truncateText(thoughts[0], 100);
    return firstThought;
  }

  function getAnswerPreview(text, maxLength = 150) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-6">
          {/* Thoughts Section - Subtle */}
          <div className="mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">💭</span>
                  <span className="text-xs text-gray-500 font-medium">Final Analysis ({thoughts.length})</span>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              Task Complete
            </h2>
            <span className="px-4 py-2 rounded-full text-sm bg-green-100 text-green-800 border border-green-200 font-medium">
              ✅ Final Answer Ready
            </span>
          </div>

          {/* Final Answer Section */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📋</span>
                <h3 className="text-lg font-semibold text-gray-800">Final Answer</h3>
              </div>
              <button
                onClick={() => setShowFullAnswer(!showFullAnswer)}
                className="text-sm text-green-600 hover:text-green-800 bg-white px-3 py-1 rounded border"
              >
                {showFullAnswer ? "▲ Collapse" : "▼ Expand"}
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                {showFullAnswer ? final_answer : getAnswerPreview(final_answer)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
