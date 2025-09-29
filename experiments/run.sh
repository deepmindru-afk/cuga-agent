#!/bin/bash

# Kill any process running on port 8080
echo "Checking for processes on port 8080..."
PID=$(lsof -ti :8080)
if [ ! -z "$PID" ]; then
    echo "Killing process $PID running on port 8080"
    kill -9 $PID
    sleep 1
fi

# Start simple HTTP server on port 8080
echo "Starting HTTP server on port 8080..."
uv run python -m http.server 8080



