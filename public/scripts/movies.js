const gears = document.querySelector("#gearsContainer")
const btn = document.querySelector("#searchButton")
const total = document.querySelector("#total")
const cont = document.querySelector(".container")
const tableBody = document.querySelector("table tbody")
const thead = document.querySelector("table thead")
const thCount = document.querySelector("#count")
const thPlanetName = document.querySelector("#planetName")
const thPopulation = document.querySelector("#population")
let count = 0
const urlBase = "https://swapi.dev/api/planets/"
let urlNext = "https://swapi.dev/api/planets/"

const fetchNextPlanets = () => {
   if (!urlNext) {
      while (tableBody.hasChildNodes()) {
         tableBody.removeChild(tableBody.firstChild)
      }
      urlNext = urlBase // Start from beggining
      count = 0
      btn.innerText = `GET ${urlNext}`
      total.innerText = `Total=${count}`
   }
   else {
      fetch(urlNext)
         .then(response => response.json()) // PROMISE RETURNED AS RESOLVED
         .then(getPlanets)
         .catch(error => console.log(`fetch error!!${error}`)) // PROMISE RETURNED AS REJECTED

      gears.style.visibility = "visible" // ....WHILE API IS LOADING.....
      btn.innerText = "....loading"
   }
}

const getPlanets = data => {
   for (let planet of data.results) {
      const tr = document.createElement("tr")
      createTh(++count, tr)
      createTd(planet.name, tr)
      createTd(planet.population, tr)
      tableBody.appendChild(tr)
   }

   urlNext = data.next
   btn.innerText = urlNext ? "GET " + urlNext : "STAR OVER"
   gears.style.visibility = "hidden" // HIDE LOADING GEARS
   total.innerText = `Total=${count}`
}

// Create Table Header elem
const createTh = (data, tr) => {
   const th = document.createElement("th")
   th.innerText = data
   th.setAttribute("scope", "row")
   tr.appendChild(th)
}

// Create Table Data elem
const createTd = (data, tr) => {
   const td = document.createElement("td")
   td.innerText = data
   tr.appendChild(td)
}

btn.innerText = `GET ${urlNext}`
btn.addEventListener("click", fetchNextPlanets)
