const express = require("express")
const router = express.Router()

//familyTree route
router.get("/", function(req, res) {
   res.render("familyTree")
})
module.exports = router
