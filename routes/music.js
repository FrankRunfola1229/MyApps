const express = require("express")
const router = express.Router()
const cors = require("cors")
router.use(cors())
require("dotenv").config({ path: "variables.env" })

const music = [
   {
      name: "beatles",
      votes: 100
   },
   {
      name: "rollingStones",
      votes: 70
   }
]

router.get("/", (req, res) => {
   res.json(music)
})

module.exports = router
