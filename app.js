const express = require("express")
const ejsMate = require("ejs-mate")
const app = express()
const bodyParser = require("body-parser")

// requiring routes
const indexRoutes = require("./routes/index")
const moviesRoutes = require("./routes/movies")
const sportsRoutes = require("./routes/sports")

app.engine('ejs', ejsMate)
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

//==========================================================================
//  To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. 
//  (express.static(root, [options]))
//==========================================================================

app.use(express.static(__dirname + "/public")) // https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/data"))

app.use("/", indexRoutes)
app.use("/movies", moviesRoutes)
app.use("/sports", sportsRoutes)


const port = 3000

app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
})
