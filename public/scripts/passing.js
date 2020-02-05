let total = document.querySelector("#total")
const tbody = document.querySelector("tbody")
let count = 0

const readJsonFile = () => {
   fetch("/data/PassingData.json") //
      .then(response => response.json())
      .then(data => createTable(data))
      .catch(err => {})
}

const createTable = data => {
   data.forEach(item => {
      const tr = document.createElement("tr")

      const tdRank = document.createElement("td")
      tdRank.innerText = item["Rank"]
      tdRank.setAttribute("scope", "row")
      tr.appendChild(tdRank)

      const tdPlayer = document.createElement("td")
      tdPlayer.innerText = item["Player"]
      tr.appendChild(tdPlayer)

      const tdYards = document.createElement("td")
      tdYards.innerText = item["Yds"]
      tr.appendChild(tdYards)

      const tdYear = document.createElement("td")
      tdYear.innerText = item["Years"]
      tr.appendChild(tdYear)

      const tdTeam = document.createElement("td")
      tdTeam.innerText = item["Tm"]
      tr.appendChild(tdTeam)

      tbody.appendChild(tr)
      count++
   })
   total.innerText = "Total = " + count
}

readJsonFile()
