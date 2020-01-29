// Highlight the menu clicked
$(document).on("click", ".nav li", function(e) {
   $(this).addClass("active").siblings().removeClass("active")
})

$('[data-toggle="tooltip"]').tooltip({
   trigger: "hover"
})

$(".btn").click(function(event) {
   // Removes focus of the button.
   $(this).blur()
})

$(document).ready(function() {
   $(".dropdown").on("show.bs.dropdown", function(e) {
      var linkText = $(e.relatedTarget).text() // Get the link text
   })
})

window.dataLayer = window.dataLayer || []
function gtag() {
   dataLayer.push(arguments)
}
gtag("js", new Date())
gtag("config", "UA-2344909-14")
