const express = require("express")
const router = express.Router()

// root route
router.get("/movies", function(req, res) {
   res.render("movies")
})
