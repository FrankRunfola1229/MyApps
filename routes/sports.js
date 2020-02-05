const express = require("express")
const router = express.Router()

// nfl route
router.get("/sports", function(req, res) {
   res.render("sports")
})

// passing route
router.get("/passing", function(req, res) {
   res.render("passing")
})

// receiving route
router.get("/rushing", function(req, res) {
   res.render("rushing")
})
// receiving route
router.get("/receiving", function(req, res) {
   res.render("receiving")
})

// defense route
router.get("/defense", function(req, res) {
   res.render("defense")
})
