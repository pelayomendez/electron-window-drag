# electron-window-drag

This is a plugin to easy configure window drag on Windows 10 frameless Electron windows.

## Usage:

Create tyour window without frame.

```
mainWindow = new BrowserWindow({ 
	frame: false
})
```
Require the module and activate the drag bar.

```
const titleBar = require('../../js/modules/titlebar') 
var options = { backgroundColor: "transparent" }
titleBar.setup(options)
```