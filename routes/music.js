const express = require("express")
const router = express.Router(

// music route
router.get("/", (req, res) => {
   res.render("music")
})

module.exports = router
