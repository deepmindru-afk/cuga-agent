import { useState } from "react";
import React from "react";
export default function AppAnalyzerComponent({ appData }) {
  const [showAllApps, setShowAllApps] = useState(false);

  // Sample data - you can replace this with props

  function getAppIcon(appName) {
    switch (appName.toLowerCase()) {
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
      case "spotify":
        return "🎵";
      case "uber":
        return "🚗";
      case "weather":
        return "🌤️";
      default:
        return "🔧";
    }
  }

  function getAppColor(appName) {
    switch (appName.toLowerCase()) {
      case "gmail":
        return "bg-red-100 text-red-700";
      case "phone":
        return "bg-blue-100 text-blue-700";
      case "venmo":
        return "bg-green-100 text-green-700";
      case "calendar":
        return "bg-purple-100 text-purple-700";
      case "drive":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  const displayedApps = showAllApps ? appData : appData.slice(0, 4);

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md border p-4">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800 flex items-center gap-2">App Analysis</h2>
            <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700 font-medium">
              {appData.length} apps
            </span>
          </div>

          {/* Compact Apps Display */}
          <div className="flex flex-wrap gap-2 mb-3">
            {displayedApps.map((app, index) => (
              <div key={index} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${getAppColor(app.name)}`}>
                <span className="text-base">{getAppIcon(app.name)}</span>
                <span className="text-sm font-medium capitalize">{app.name}</span>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {appData.length > 4 && (
            <div className="mb-3">
              <button
                onClick={() => setShowAllApps(!showAllApps)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                {showAllApps ? "▲ Less" : `▼ +${appData.length - 4} more`}
              </button>
            </div>
          )}

          {/* Simple Status */}
          <div className="text-xs text-gray-500">
            ✅ Ready to use {appData.length} integrated services for your request
          </div>
        </div>
      </div>
    </div>
  );
}
