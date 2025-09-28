import React, { useState } from "react";
import Markdown from "react-markdown";

export default function CoderAgentOutput({ coderData }) {
  const [showFullCode, setShowFullCode] = useState(false);
  const [showFullOutput, setShowFullOutput] = useState(false);

  // Sample data - you can replace this with props

  const { code, summary } = coderData;

  function getCodeSnippet(fullCode, maxLines = 4) {
    const lines = fullCode.split("\n");
    if (lines.length <= maxLines) return fullCode;
    return lines.slice(0, maxLines).join("\n") + "\n...";
  }

  function truncateOutput(text, maxLength = 400) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  const codeLines = code.split("\n").length;
  const outputLength = summary.length;

  return (
    <div className="p-3">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="text-sm">💻</span>
              Coder Agent
            </h3>
            <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-700">Complete</span>
          </div>

          {/* Code Section */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">Code ({codeLines} lines)</span>
              <button
                onClick={() => setShowFullCode(!showFullCode)}
                className="text-xs text-purple-600 hover:text-purple-800"
              >
                {showFullCode ? "▲ Less" : "▼ More"}
              </button>
            </div>

            <div className="bg-gray-900 rounded p-2" style={{ overflowX: "scroll" }}>
              <pre className="text-green-400 text-xs font-mono">{showFullCode ? code : getCodeSnippet(code)}</pre>
            </div>
          </div>

          {/* Output Section */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">Output ({outputLength} chars)</span>
              <button
                onClick={() => setShowFullOutput(!showFullOutput)}
                className="text-xs text-green-600 hover:text-green-800"
              >
                {showFullOutput ? "▲ Less" : "▼ More"}
              </button>
            </div>

            <div className="bg-green-50 rounded p-2 border border-green-200" style={{ overflowY: "scroll" }}>
              <p className="text-xs text-green-700 leading-relaxed">
                <Markdown>{showFullOutput ? summary : truncateOutput(summary)}</Markdown>
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-3 text-xs text-gray-500">
            <span>📊 {codeLines} lines</span>
            <span>📝 {outputLength} chars</span>
            <span>🎯 Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
