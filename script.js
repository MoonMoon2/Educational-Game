// Require filesystem API (used to save data to file later on)
const fs = require('fs');
// ipc is used to open and communicate with the data viewer and other additional windows.
const ipc = require('electron').ipcRenderer;
const user = require('os').userInfo();
