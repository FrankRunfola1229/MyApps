const express = require("express")
const router = express.Router()

// computers
router.get("/", (req, res) => {
   res.render("computers")
})
module.exports = router
