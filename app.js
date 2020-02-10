const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// requiring routes
const indexRoutes = require("./routes/index")
const moviesRoutes = require("./routes/movies")
const sportsRoutes = require("./routes/sports")
const toolsRoutes = require("./routes/tools")
const musicRoutes = require("./routes/music")
const computersRoutes = require("./routes/computers")
const familyTreeRoutes = require("./routes/familyTree")

//==================================================================================================
/// To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. (express.static(root, [options]))
//==================================================================================================
//routes.initialize(app)

// view engine setup
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public")) // https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/data"))

app.use("/", indexRoutes)
app.use("/movies", moviesRoutes)
app.use("/sports", sportsRoutes)
app.use("/tools", toolsRoutes)
app.use("/music", musicRoutes)
app.use("/familyTree", familyTreeRoutes)
app.use("/computers", computersRoutes)

var port = process.env.PORT || 3000

const server = app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
   console.log(`Express running → PORT ${server.address().port}`)
})
