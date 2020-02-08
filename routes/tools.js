const express = require("express")

const router = express.Router()
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
   extended: true
}));
router.use(bodyParser.json());
router.use(bodyParser.raw());

const form = require("express-form")
const field = form.field

// root route
router.get("/", (req, res) => {
   res.render("tools", {
      operation: '',
      result: "0"
   }) //res.render(view [, locals] [, callback])
})

// post 
router.post("/",

   form(field("part").trim().required().is(/^[0-9]{1,6}$/), field("whole").trim().required().is(/^[0-9]{1,6}$/)),

   (req, res) => {
      if (!req.form.isValid) {
         console.log(req.form.errors)
      } else {
         part = req.body.part
         whole = req.body.whole
         console.dir(`----------------`)
         console.dir(`part = ${part}`)
         console.dir(`whole = ${whole}`)
         resultDecimal = (part / whole)
         operation = `(${part} / ${whole}) * 100 = ${resultDecimal}`
         console.dir(operation)
         result = resultDecimal * 100

         console.dir(`${resultDecimal} * 100 =  ${result} %`)
         console.dir(`----------------`)
      }
      res.render("tools", {
         operation: operation,
         result: result
      })
   })

module.exports = router