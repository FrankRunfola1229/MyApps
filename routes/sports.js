const express = require("express")
const router = express.Router()

// nfl route
router.get("/", function(req, res) {
   res.render("sports")
})

// passing route
router.get("/passing", function(req, res) {
   res.render("sports/passing")
})

// receiving route
router.get("/rushing", function(req, res) {
   res.render("sports/rushing")
})
// receiving route
router.get("/receiving", function(req, res) {
   res.render("sports/receiving")
})

// defense route
router.get("/defense", function(req, res) {
   res.render("sports/defense")
})
module.exports = router
