var historyFallback = require("connect-history-api-fallback")
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

var defaultFile = "index.html"

module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": "./build",
    "proxy": false,
    "port": 3000,
    "middleware": [historyFallback()],
    "serveStatic": [],
    "open": "ui",
    "server": {
        baseDir: ["./resources/public", "./build"],
        middleware: function(req, res, next) {
            var fileName = url.parse(req.url)
            fileName = fileName.href.split(fileName.search).join("")
            var fileExists = fs.existsSync(folder + fileName)
            if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
                req.url = "/" + defaultFile
            }
            return next()
        }
    }
}