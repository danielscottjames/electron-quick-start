// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('data', function (e, data) {
    document.body.innerHTML += `<p>${data}</p>`;
});