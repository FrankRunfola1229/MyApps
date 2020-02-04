// Create Table Header elem
const createTh = (data, tr) => {
   const th = document.createElement("th")
   th.innerText = data
   th.setAttribute("scope", "row")
   tr.appendChild(th)
}


function
perc1() {
   a = document.form1.a.value / 100;
   b = a * document.form1.b.value;
   document.form1.total1.value = b
}

function
perc2() {
   a = document.form1.c.value;
   b = document.form1.d.value;
   c = a / b;
   d = c * 100;
   document.form1.total2.value = d
}