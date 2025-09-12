import React, { useState } from "react";

export default function ShortlisterComponent({ shortlisterData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);
  const [showAllApis, setShowAllApis] = useState(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const { thoughts, result } = shortlisterData;

  const displayedApis = showAllApis ? result : result.slice(0, 2);
  const remainingCount = result.length - 2;

  function getScoreColor(score) {
    if (score >= 0.95) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 0.9) return "bg-blue-100 text-blue-800 border-blue-300";
    if (score >= 0.8) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  }

  function getScoreIcon(score) {
    if (score >= 0.95) return "🎯";
    if (score >= 0.9) return "✅";
    if (score >= 0.8) return "👍";
    return "📝";
  }

  function truncateApiName(name, maxLength = 30) {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  }

  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
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
                  <span className="text-xs text-gray-500 font-medium">API Analysis ({thoughts.length})</span>
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
              API Shortlist
            </h2>
            <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
              {result.length} APIs selected
            </span>
          </div>

          {/* Top APIs Preview */}
          <div className="space-y-3">
            {displayedApis.map((api, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{getScoreIcon(api.relevance_score)}</div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">{truncateApiName(api.name)}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium border ${getScoreColor(
                            api.relevance_score
                          )}`}
                        >
                          {(api.relevance_score * 100).toFixed(0)}% match
                        </span>
                        <span className="text-xs text-gray-500">Rank #{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed pl-8">{api.reasoning}</p>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllApis && remainingCount > 0 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowAllApis(true)}
                className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <span>Show {remainingCount} more APIs</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
          )}

          {/* Show Less Button */}
          {showAllApis && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowAllApis(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <span>Show less</span>
                <span className="text-xs">▲</span>
              </button>
            </div>
          )}

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-base font-bold text-green-800">
                {result.filter((api) => api.relevance_score >= 0.95).length}
              </div>
              <div className="text-xs text-green-600">High Priority</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-base font-bold text-blue-800">
                {((result.reduce((sum, api) => sum + api.relevance_score, 0) / result.length) * 100).toFixed(0)}%
              </div>
              <div className="text-xs text-blue-600">Avg Relevance</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded">
              <div className="text-base font-bold text-purple-800">{result.length}</div>
              <div className="text-xs text-purple-600">APIs Shortlisted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
