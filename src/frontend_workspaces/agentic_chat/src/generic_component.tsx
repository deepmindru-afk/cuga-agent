import React, { useState } from "react";
import Markdown from "react-markdown";

export default function SingleExpandableContent({ title, content, maxLength = 600 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Sample data for demonstration
  const sampleTitle = title;
  const sampleContent = content;
  const shouldTruncate = sampleContent.length > maxLength;
  const displayContent = isExpanded || !shouldTruncate ? sampleContent : sampleContent.substring(0, maxLength) + "...";

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-6">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-2xl">📄</span>
              {sampleTitle}
            </h2>
          </div>

          {/* Content */}
          <div className="mb-4" style={{ overflowY: "scroll" }}>
            <p className="text-gray-700 leading-relaxed text-sm">
              <Markdown>{displayContent}</Markdown>
            </p>
          </div>

          {/* Expand/Collapse Button */}
          {shouldTruncate && (
            <div className="flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <span>{isExpanded ? "Show less" : "Read more"}</span>
                <span className="text-xs">{isExpanded ? "▲" : "▼"}</span>
              </button>
            </div>
          )}

          {/* Content Stats */}
          {/* <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📊</span>
              <h3 className="font-semibold text-gray-800">Content Stats</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Total characters:</span>
                <span className="font-medium text-gray-800 ml-2">{sampleContent.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Word count:</span>
                <span className="font-medium text-gray-800 ml-2">{sampleContent.split(" ").length}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
