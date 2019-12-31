let total = document.querySelector("#total")
const btn = document.querySelector("button")
const tbody = document.querySelector("tbody")
let count = 0

const readJsonFile = () => {
	fetch("/data.json") //
		.then(response => response.json())
		.then(data => createTable(data))
		.catch(err => {})
}

const createTable = data => {
	console.log("data=" + data)

	data.forEach(item => {
		const tr = document.createElement("tr")

		const thRank = document.createElement("th")
		thRank.innerText = item["Rank"]
		thRank.setAttribute("scope", "row")
		tr.appendChild(thRank)

		const tdPlayer = document.createElement("th")
		tdPlayer.innerText = item["Player"]
		tr.appendChild(tdPlayer)

		const tdYards = document.createElement("th")
		tdYards.innerText = item["Yds"]
		tr.appendChild(tdYards)

		const tdYear = document.createElement("th")
		tdYear.innerText = item["Years"]
		tr.appendChild(tdYear)

		const tdTeam = document.createElement("th")
		tdTeam.innerText = item["Tm"]
		tr.appendChild(tdTeam)

		tbody.appendChild(tr)
		count++
	})
	total.innerText = "Total = " + count
}

readJsonFile()

$(function() {
	$("#navbar-frame").load("navbar.html")
})
