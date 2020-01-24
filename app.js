const express = require("express")
const app = express()
//==================================================================================================
/// To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. (express.static(root, [options]))
//==================================================================================================
app.use(express.static("public")) //https://expressjs.com/en/starter/static-files.html
app.use(express.static("data"))
app.use(express.static("images"))

// view engine setup
app.set("view engine", "ejs")

// root route
app.get("/", function(req, res) {
   res.render("index")
})

// nfl route
app.get("/nfl", function(req, res) {
   res.render("nfl")
})

// root route
app.get("/movies", function(req, res) {
   res.render("movies")
})

// tools route
app.get("/tools", function(req, res) {
   res.render("tools")
})

//familyTree route
app.get("/familyTree", function(req, res) {
   res.render("familyTree")
})

// music route
app.get("/music", function(req, res) {
   res.render("music")
})

// passing route
app.get("/passing", function(req, res) {
   res.render("passing")
})

// receiving route
app.get("/receiving", function(req, res) {
   res.render("receiving")
})

// defense route
app.get("/defense", function(req, res) {
   res.render("defense")
})

app.get("/flex", function(req, res) {
   res.render("flex")
})

var port = process.env.PORT || 3000

app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
})
