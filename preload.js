//global.ipcRenderer = require('electron').ipcRenderer;
const _setImmediate = setImmediate;
const _clearImmediate = clearImmediate;
process.once('loaded', () => {
  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;
  global.ipcRenderer = require('electron').ipcRenderer;
});

