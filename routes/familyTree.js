const express = require("express")
const router = express.Router()

//familyTree route
router.get("/familyTree", function(req, res) {
   res.render("familyTree")
})
