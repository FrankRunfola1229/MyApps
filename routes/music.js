const express = require("express")
const router = express.Router()
// music route
router.get("/", function(req, res) {
   res.render("music")
})
module.exports = router
