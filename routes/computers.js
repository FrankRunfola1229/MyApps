const express = require("express")
const router = express.Router()

// computers
router.get("/", function(req, res) {
   res.render("computers")
})
module.exports = router
