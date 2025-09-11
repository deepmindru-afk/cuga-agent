import React, { useState } from "react";

export default function AgentThoughtsComponent({ agentData }) {
  const [showFullThoughts, setShowFullThoughts] = useState(false);

  // Sample data for demonstration

  // Use props if provided, otherwise use sample data
  const { thoughts, next_agent, instruction } = agentData;

  function getAgentColor(agentName) {
    const colors = {
      ActionAgent: "bg-blue-100 text-blue-800 border-blue-300",
      ValidationAgent: "bg-green-100 text-green-800 border-green-300",
      NavigationAgent: "bg-purple-100 text-purple-800 border-purple-300",
      AnalysisAgent: "bg-yellow-100 text-yellow-800 border-yellow-300",
      TestAgent: "bg-orange-100 text-orange-800 border-orange-300",
    };
    return colors[agentName] || "bg-gray-100 text-gray-800 border-gray-300";
  }

  function getAgentIcon(agentName) {
    const icons = {
      ActionAgent: "🎯",
      QaAgent: "🔍",
    };
    return icons[agentName] || "🤖";
  }

  function truncateThoughts(thoughtsArray, maxLength = 120) {
    const firstThought = thoughtsArray[0] || "";
    if (firstThought.length <= maxLength) return firstThought;
    return firstThought.substring(0, maxLength) + "...";
  }

  function truncateInstruction(instruction, maxLength = 80) {
    if (instruction.length <= maxLength) return instruction;
    return instruction.substring(0, maxLength) + "...";
  }

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
                  <span className="text-xs text-gray-500 font-medium">Agent Analysis ({thoughts.length})</span>
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
              <span className="text-xl">🤖</span>
              Agent Workflow
            </h2>
            <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">Processing</span>
          </div>

          {/* Next Agent Card */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow mb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-lg">{getAgentIcon(next_agent)}</div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">Next Agent</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getAgentColor(next_agent)}`}>
                      {next_agent}
                    </span>
                    <span className="text-xs text-gray-500">Ready to execute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Instruction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-lg">📋</div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm mb-2">Current Instruction</h3>
                <div className="bg-white rounded-md p-3 border border-blue-100">
                  <p className="text-sm text-gray-700 leading-relaxed font-mono">{instruction}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-base font-bold text-blue-800">{thoughts.length}</div>
              <div className="text-xs text-blue-600">Thoughts</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-base font-bold text-green-800">{next_agent}</div>
              <div className="text-xs text-green-600">Next Agent</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded">
              <div className="text-base font-bold text-purple-800">{instruction.split(" ").length}</div>
              <div className="text-xs text-purple-600">Words in Task</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
