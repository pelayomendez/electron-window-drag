
var windowTopBar
const remote = require('electron').remote;

module.exports = {

    setup: function(options) {

        windowTopBar = document.createElement('div')
        windowTopBar.style.width = "100%"
        windowTopBar.style.height = "32px"
        windowTopBar.style.backgroundColor = options.backgroundColor
        windowTopBar.style.position = "absolute"
        windowTopBar.style.top = windowTopBar.style.left = 0
        windowTopBar.style.padding = "10px"
        windowTopBar.style.webkitAppRegion = "drag"

        document.body.appendChild(windowTopBar)
        document.body.style.marginTop = "32px"
        document.body.style.overflow = "hidden"

        //

        this.createButton("#fc605c", module.exports.closeApp)
        this.createButton("#fdbe41", module.exports.minimizeApp)
        this.createButton("#34c84a", module.exports.maximizeApp)

    },

    createButton: function(buttonColor, callBack) {

        var button = document.createElement('div')
        button.style.borderRadius = "50%"
        button.style.width = button.style.height = "11px"
        button.style.background = buttonColor
        button.style.border = "0px"
        button.style.marginLeft = "5px"
        button.style.float = "left"
        button.style.cursor = "pointer"
        button.style.zIndex = 1007
        button.style.webkitAppRegion = "no-drag"

        button.addEventListener('click', callBack)
        windowTopBar.appendChild(button)

    },

    closeApp: function() {

        var window = remote.getCurrentWindow()
        window.close()

    },

    minimizeApp: function() {

       var window = remote.getCurrentWindow()
       window.minimize()

    },

    maximizeApp: function() {

       var window = remote.getCurrentWindow()
       if (!window.isMaximized()) {
           window.maximize()          
       } else {
           window.unmaximize()
       }

    }

} // Exports end