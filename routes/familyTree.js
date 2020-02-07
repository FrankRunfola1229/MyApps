const express = require("express")
const router = express.Router()

//familyTree route
router.get("/", (req, res) => {
   res.render("familyTree")
})
module.exports = router
