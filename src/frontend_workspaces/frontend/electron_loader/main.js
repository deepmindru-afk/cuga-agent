const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'), // Optional
            nodeIntegration: true,
        },
    });

    // Load your React app
    mainWindow.loadFile('dist/index.html');

    // Open DevTools (optional)
    mainWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        mainWindow = new BrowserWindow({
            width: '100%',
            height: '100%',
            webPreferences: {
                // preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true,
            },
        });

        mainWindow.loadFile('dist/index.html');
    }
});
