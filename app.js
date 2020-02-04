const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const form = require("express-form")
const field = form.field
//==================================================================================================
/// To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. (express.static(root, [options]))
//==================================================================================================
app.use(express.static("public")) //https://expressjs.com/en/starter/static-files.html
app.use(express.static("data"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser())

// view engine setup
app.set("view engine", "ejs")

// root route
app.get("/", function(req, res) {
   res.render("index")
})

app.post(
   "/percentage",
   form(
      field("part").trim().required().is(/^[0-9]{1,6}$/),
      field("whole").trim().required().is(/^[0-9]{1,6}$/)
   ),
   function(req, res) {
      if (!req.form.isValid) {
         console.log(req.form.errors)
      }
      else {
         console.log(`req.body = ${req.body}`)
         console.log(`req.body.part = ${req.body.part}`)
         part = req.body.part / 100
         whole = req.body.whole
         result = part * whole
         console.log(`result = ${result}`)
      }
      res.render("tools", { result: result })
   }
)

// nfl route
app.get("/sports", function(req, res) {
   res.render("sports")
})

// root route
app.get("/movies", function(req, res) {
   res.render("movies")
})

// tools route
app.get("/tools", function(req, res) {
   const result = "0"
   res.render("tools", { result: result })
})

//familyTree route
app.get("/familyTree", function(req, res) {
   res.render("familyTree")
})

// music route
app.get("/music", function(req, res) {
   res.render("music")
})

// music route
app.get("/computerScience", function(req, res) {
   res.render("computerScience")
})

// music route
app.get("/geography", function(req, res) {
   res.render("geography")
})

// passing route
app.get("/cars", function(req, res) {
   res.render("cars")
})

// passing route
app.get("/passing", function(req, res) {
   res.render("passing")
})

// receiving route
app.get("/rushing", function(req, res) {
   res.render("rushing")
})
// receiving route
app.get("/receiving", function(req, res) {
   res.render("receiving")
})

// defense route
app.get("/defense", function(req, res) {
   res.render("defense")
})

var port = process.env.PORT || 3000

app.listen(port, function() {
   console.log("The Server Has Started!..")
   console.log("Port= " + port)
})
