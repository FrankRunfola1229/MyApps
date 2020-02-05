const express = require("express")
const router = express.Router()

// computerScience
router.get("/computerScience", function(req, res) {
   res.render("computerScience")
})
