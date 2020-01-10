const express = require("express")
const app = express()
//==================================================================================================
/// To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express. (express.static(root, [options]))
//==================================================================================================
app.use(express.static("public")) //https://expressjs.com/en/starter/static-files.html
app.use(express.static("data")) //https://expressjs.com/en/starter/static-files.html

// view engine setup
app.set("view engine", "ejs")

// root route
app.get("/", function(req, res) {
   res.render("index")
})

// rushing route
app.get("/rushing", function(req, res) {
   res.render("rushing")
})

// root passing
app.get("/passing", function(req, res) {
   res.render("passing")
})

// rushing route
app.get("/receiving", function(req, res) {
   res.render("receiving")
})

var port = process.env.PORT || 3000

app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
})
