const express = require("express")
const router = express.Router()

// nfl route
router.get("/", (req, res) => {
   res.render("sports")
})

// passing route
router.get("/passing", (req, res) => {
   res.render("sports/passing")
})

// receiving route
router.get("/rushing", (req, res) => {
   res.render("sports/rushing")
})
// receiving route
router.get("/receiving", (req, res) => {
   res.render("sports/receiving")
})

// defense route
router.get("/defense", (req, res) => {
   res.render("sports/defense")
})
module.exports = router
