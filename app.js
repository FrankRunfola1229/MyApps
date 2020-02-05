const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// requiring routes
const toolsRoutes = require("./routes/tools")
const sports = require("./routes/sports")

//==================================================================================================
/// To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. (express.static(root, [options]))
//==================================================================================================
routes.initialize(app)

// view engine setup
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public")) // https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/data"))

app.use("/sports", sports)
app.use("/movies")
app.use("/tools", toolsRoutes)
app.use("/music")
app.use("/familTree")
app.use("/computerScience")

var port = process.env.PORT || 3000

app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
   console.log("url= " + url)
})
