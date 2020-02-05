const express = require("express")
const router = express.Router()
// music route
router.get("/music", function(req, res) {
   res.render("music")
})
