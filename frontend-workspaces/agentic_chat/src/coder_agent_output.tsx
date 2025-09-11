import { useState } from "react";
import React from "react";
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
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">Coder Agent</h2>
            <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-800">✅ Complete</span>
          </div>

          {/* Code Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-700 flex items-center gap-2">
                <span className="text-sm">💻</span>
                Code ({codeLines} lines)
              </h3>
              <button
                onClick={() => setShowFullCode(!showFullCode)}
                className="text-xs text-purple-600 hover:text-purple-800"
              >
                {showFullCode ? "▲ Less" : "▼ More"}
              </button>
            </div>

            <div className="bg-gray-900 rounded p-3" style={{ overflowX: "scroll" }}>
              <pre className="text-green-400 text-xs font-mono">{showFullCode ? code : getCodeSnippet(code)}</pre>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-700 flex items-center gap-2">
                <span className="text-sm">📄</span>
                Output ({outputLength} chars)
              </h3>
              <button
                onClick={() => setShowFullOutput(!showFullOutput)}
                className="text-xs text-green-600 hover:text-green-800"
              >
                {showFullOutput ? "▲ Less" : "▼ More"}
              </button>
            </div>

            <div className="bg-green-50 rounded p-3 border border-green-200" style={{ overflowY: "scroll" }}>
              <p className="text-sm text-green-800 leading-relaxed">
                <Markdown>{showFullOutput ? summary : truncateOutput(summary)}</Markdown>
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 flex gap-4 text-xs text-gray-500">
            <span>📊 {codeLines} lines of code</span>
            <span>📝 {outputLength} characters output</span>
            <span>🎯 Task completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
