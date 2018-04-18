// Require filesystem API (used to save data to file later on)
const fs = require('fs');
// ipc is used to open and communicate with the data viewer and other additional windows.
const ipc = require('electron').ipcRenderer;
const user = require('os').userInfo();

// Function triggered when one of the nav links are clicked with the Data being
// the ID of the page to be opened
function openPage(Data) {
    console.log(Data)
    // Send the data through ipc for the open-page listener to read the data
    ipc.send('open-page', Data);
}
