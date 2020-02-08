const express = require("express")
const router = express.Router()
const form = require("express-form")
const field = form.field

// root route
router.get("/", (req, res) => {
   res.render("tools", { result: "0" }) //res.render(view [, locals] [, callback])
})

router.post("/percentage",
   form(
      field("part").trim().required().is(/^[0-9]{1,6}$/),
      field("whole").trim().required().is(/^[0-9]{1,6}$/)
   ),
   (req, res) => {
      if (!req.form.isValid) {
         console.log(req.form.errors)
      }
      else {
         console.dir(`req.body = ${req.body}`)
         console.dir(`req.body.part = ${req.body.part}`)
         part = req.body.part / 100
         whole = req.body.whole
         result = part * whole
         console.dir(`result = ${result}`)
      }
      res.render("tools", { result: result })
   }
)
module.exports = router
