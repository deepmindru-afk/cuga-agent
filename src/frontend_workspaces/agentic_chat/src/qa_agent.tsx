import React, { useState } from "react";

export default function QaAgentComponent({ qaData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);
  const [showFullAnswer, setShowFullAnswer] = useState(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const { thoughts, name, answer } = qaData;

  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
  }

  function truncateAnswer(answer, maxLength = 500) {
    if (answer.length <= maxLength) return answer;
    return answer.substring(0, maxLength) + "...";
  }

  function getAnswerPreview(answer) {
    const truncated = truncateAnswer(answer, 500);
    return truncated;
  }

  function getAnswerIcon(answer) {
    if (answer.length < 50) return "💡";
    if (answer.length < 200) return "📝";
    return "📄";
  }

  function getAnswerColor(answer) {
    if (answer.length < 50) return "bg-green-100 text-green-800 border-green-300";
    if (answer.length < 200) return "bg-blue-100 text-blue-800 border-blue-300";
    return "bg-purple-100 text-purple-800 border-purple-300";
  }

  const isAnswerTruncated = answer.length > 500;

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Thoughts Section */}
          <div className="mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">💭</span>
                  <span className="text-xs text-gray-500 font-medium">QA Analysis ({thoughts.length})</span>
                  <button
                    onClick={() => setShowFullThoughts(!showFullThoughts)}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    {showFullThoughts ? "▲" : "▼"}
                  </button>
                </div>
                {!showFullThoughts && <p className="text-xs text-gray-400 italic">{truncateThoughts(thoughts)}</p>}
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">🔍</span>
              QA Agent Response
            </h2>
            <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-800">Analysis Complete</span>
          </div>

          {/* Question Name */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">Question:</span>
            </div>
            <h3 className="font-medium text-gray-800 text-base bg-gray-50 rounded-lg p-3 border">{name}</h3>
          </div>

          {/* Answer Section */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-lg">{getAnswerIcon(answer)}</div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Answer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getAnswerColor(answer)}`}>
                      {answer.length} characters
                    </span>
                    <span className="text-xs text-gray-500">{answer.split(" ").length} words</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 leading-relaxed font-mono whitespace-pre-wrap">
                  {showFullAnswer ? answer : getAnswerPreview(answer)}
                </p>

                {isAnswerTruncated && (
                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowFullAnswer(!showFullAnswer)}
                      className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-xs font-medium transition-colors flex items-center gap-1 mx-auto"
                    >
                      {showFullAnswer ? (
                        <>
                          <span>Show less</span>
                          <span className="text-xs">▲</span>
                        </>
                      ) : (
                        <>
                          <span>Show full answer</span>
                          <span className="text-xs">▼</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-base font-bold text-blue-800">{thoughts.length}</div>
              <div className="text-xs text-blue-600">Analysis Steps</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-base font-bold text-green-800">{answer.length}</div>
              <div className="text-xs text-green-600">Answer Length</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded">
              <div className="text-base font-bold text-purple-800">{answer.split(" ").length}</div>
              <div className="text-xs text-purple-600">Words</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
