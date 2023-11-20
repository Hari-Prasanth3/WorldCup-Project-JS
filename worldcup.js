
async function matches() {
  const match = await fetch(`./series.json`)
  const matche = await match.json();
  if (matche.status === "success") {
    const data = matche.data

    let matchBody = document.getElementById("match-details")
    let pointTableBody = document.getElementById("point-table-body")
    let teamInfoBody = document.getElementById("teaminfo-body")
    let navbar = document.getElementById("nav")
    let scorecard = document.getElementById("score-card")
    let squad = document.getElementById("squad")
    matchBody.style.display = 'none'
    pointTableBody.style.display = 'none'
    teamInfoBody.style.display = 'none'
    navbar.style.display = 'none'
    scorecard.style.display = 'none'
    squad.style.display = 'none'

    // console.log(a);
    let b = data.matchList
    let c = b.filter((match) => match.teams.includes("Australia"))
    // console.log(b);
    c.forEach(x => {
      let div = document.createElement('div')
      div.setAttribute("class", "match-box")
      div.innerHTML = `
        <h2><b>${x.venue}</b></h2>
        <h3>${x.date}</h3><hr><br>
       
        <h2>${x.name}</h2><br>
        <hr>
       <br> <h3>${x.dateTimeGMT}</h3><br>
        <hr><br>
        <center><a href="#" id = "link">${x.status}</a></center>`
      let show = div.querySelector("#link")
      show.addEventListener("click", async (a) => {
        a.preventDefault()

        // fetch(`https://api.cricapi.com/v1/match_scorecard?apikey=a2d55738-6402-4c62-af02-aabe3a89ad9c&id=${x.id}`)
        const card = await fetch(`./sample.json`)
        const cards = await card.json();


        console.log(data);
        if (cards.status === "success") {


          let matchbody = document.getElementById("match-details")
          let navbar = document.getElementById("nav")
          matchbody.style.display = 'none'
          navbar.style.display = 'block'

          let matchBody = document.getElementById("match-body")
          matchBody.style.display = 'block'
          document.getElementById("score-card").style.display = "block";
          // let y = data.data;
          // console.log(x);
          const data = cards.data
          console.log(data);
          let score = data.score;
          console.log(score);
          let score1 = score[0]
          console.log(score1);
          let score2 = score[1]
          console.log(score2);
          let scorecard = data.scorecard;
          console.log(scorecard);

          let t1 = scorecard[0]
          console.log(t1);

          let t2 = scorecard[1]
          console.log(t2);
          let teamTable1 = document.getElementById("team-table-1")
          teamTable1.innerHTML = `<h1>${t1.inning}</h1>
                <table id = "team1Table">
                <tr>
                    <th>Name</th>
                    <th>Dismissal</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>Strike Rate</th>
                
                </tr>
                </table>`
          let team1batting = t1.batting
          // console.log(team1batting);
          team1batting.forEach(i => {
            let batsman = i.batsman
            let dismissal = i['dismissal-text']
            let run = i.r
            let balls = i.b
            let fours = i['4s']
            let sixes = i['6s']
            let strikerate = i.sr
            let teamone = document.getElementById("team1Table")
            let tr = document.createElement("tr")
            tr.innerHTML = `<td>${batsman.name}</td>
                    <td>${dismissal}</td>
                    <td>${run}</td>
                    <td>${balls}</td>
                    <td>${fours}</td>
                    <td>${sixes}</td>
                    <td>${strikerate}</td>`
            teamone.appendChild(tr)
          })
          let teamone = document.getElementById("team1Table")
          let extras = t1.extras
          let table1 = document.createElement("tr")
          table1.innerHTML = `<td colspan = "2">Extra</td><td>${extras.r}</td><td colspan = "4"></td>`
          teamone.appendChild(table1)
          let table2 = document.createElement("tr")
          table2.innerHTML = `<td colspan = "2">Total</td><td colspan = "5">${score1.r}/${score1.w}[${score1.o}]</td>`
          teamone.appendChild(table2)
          //team 2 score card

          let teamTable2 = document.getElementById("team-table-2")
          teamTable2.innerHTML = `<h1>${t2.inning}</h1>
                <table id = "team2Table">
                <tr>
                    <th>Name</th>
                    <th>Dismissal</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>Strike Rate</th>
                
                </tr>
                </table>`
          let team2batting = t2.batting
          // console.log(team2batting);
          team2batting.forEach(i => {
            let batsman = i.batsman
            let dismissal = i['dismissal-text']
            let run = i.r
            let balls = i.b
            let fours = i['4s']
            let sixes = i['6s']
            let strikerate = i.sr
            let teamtwo = document.getElementById("team2Table")
            let tr = document.createElement("tr")
            tr.innerHTML = `<td>${batsman.name}</td>
                    <td>${dismissal}</td>
                    <td>${run}</td>
                    <td>${balls}</td>
                    <td>${fours}</td>
                    <td>${sixes}</td>
                    <td>${strikerate}</td>`
            teamtwo.appendChild(tr)
          })
          let teamtwo = document.getElementById("team2Table")
          let extra = t2.extra
          let Table1 = document.createElement("tr")
          Table1.innerHTML = `<td colspan = "2">Extra</td><td>${extras.r}</td><td colspan = "4"></td>`
          teamone.appendChild(Table1)
          let Table2 = document.createElement("tr")
          Table2.innerHTML = `<td colspan = "2">Total</td><td colspan = "5">${score2.r}/${score2.w}[${score2.o}]</td>`
          teamtwo.appendChild(Table2)

        }
        document.getElementById("squad-btn").addEventListener("click", async (a) => {
          a.preventDefault()
          // let x = data.data
          // console.log(x);
          let team = x.teams
          // console.log(team);
          let team1 = team[0]
          // console.log(team1);
          let team2 = team[1]
          // console.log(team2);

          const fetch5 = await fetch(`/team.json`)
          const data = await fetch5.json()

          if (data.status === 'success') {

            let matchbody = document.getElementById('match-details')
            matchbody.style.display = 'none'
            let scorecard = document.getElementById('score-card')
            scorecard.style.display = 'none'
            let squad = document.getElementById('squad')
            squad.style.display = 'block'

            let a = data.data
            // console.log(a);
            let squad1 = a.find(x => x.teamName === team1)
            let squad2 = a.find(x => x.teamName === team2)
            let squadOne = document.getElementById("squad-1")
            squadOne.innerHTML = `<h1>${squad1.teamName}</h1>`
            let squadTwo = document.getElementById("squad-2")
            squadTwo.innerHTML = `<h1>${squad2.teamName}</h1>`
            let teamone = squad1.players
            let teamtwo = squad2.players
            teamone.forEach((o) => {
              let squadOne = document.getElementById("squad-1")
              let player = document.createElement("tr")
              player.setAttribute("class", "pl")
              player.innerHTML = `<td><img src=${o.playerImg}><h3>${o.name}</h3><h4>(${o.role})</h4></td>`
              squadOne.appendChild(player)
            })
            teamtwo.forEach((o) => {
              let squadTwo = document.getElementById("squad-2")
              let player = document.createElement("tr")
              player.setAttribute("class", "pl")
              player.innerHTML = `<td><img src=${o.playerImg}><h3>${o.name}</h3><h4>(${o.role})</h4></td>`
              squadTwo.appendChild(player)
            })


          }
          document.getElementById("score-btn").addEventListener("click", async (x) => {
            let scorecard = document.getElementById("score-card")
            let squad = document.getElementById("squad")
            scorecard.style.display = 'block'
            squad.style.display = 'none'

          })


        })

        //data
      })

      matchBody.appendChild(div)
    })
  }

}
matches()


document.getElementById('point-tables').addEventListener("click", async (a) => {
  const point = await fetch(`/point-table.json`)
  // fetch(`/sample.json`)
  const points = await point.json()

  if (points.status === "success") {
    let a = points.data
    console.log(a);
    a.sort((b, a) => a.wins - b.wins)
    let matchbody = document.getElementById("match-body")
    let pointTable = document.getElementById("point-table-body")
    let team = document.getElementById("teaminfo-body")
    matchbody.style.display = 'none'
    pointTable.style.display = 'block'
    team.style.display = 'none'
    const y = points.data
    // console.log(y);



    let table = document.getElementById("tableP")
    table.innerHTML = `<h2>ICC WorldCup 2023 - Points Table</h2>
      <table id = "table1">
      <tr>
      <div id = "th"><th>Teams</th>
      <th>Matches</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Ties</th>
      <th>NR</th>
     </div> </tr>      
      
      </table>`
    a.forEach(p => {
      let name = p.teamname
      let image = p.img
      let match = p.matches
      let wins = p.wins
      let loss = p.loss
      let ties = p.ties
      let nr = p.nr
      let tab = document.getElementById("table1")
      let tr = document.createElement("tr")
      tr.innerHTML = ` <td><img src=${image}><h3>${name}</h3></td>
        <td>${match}</td>
        <td>${wins}</td>
        <td>${loss}</td>
        <td>${ties}</td>
        <td>${nr}</td>`
      tab.appendChild(tr)


    })
    document.getElementById("matches").addEventListener("click", async (a) => {
      let matchbody = document.getElementById("match-body")
      let pointable = document.getElementById("point-table-body")
      let team = document.getElementById("teaminfo-body")
      matchbody.style.display = 'block'
      pointable.style.display = 'none'
      team.style.display = 'none'


    })



  }

})
async function team() {
  const profile = await fetch(`/team.json`)
  // fetch(`/sample.json`)
  const profiles = await profile.json()

  if (profiles.status === "success") {
    let matchbody = document.getElementById("match-body")
    let pointTable = document.getElementById("point-table-body")
    let team = document.getElementById("teaminfo-body")
    matchbody.style.display = 'none'
    pointTable.style.display = 'none'
    team.style.display = 'none'
    let a = profiles.data
    let b = a.find((x) => x.teamName == "Australia")

    const { teamName, img, shortname } = b
    console.log(b);

    let teams = document.getElementById("teamss")
    teams.innerHTML = `<img src ="flag-wave-250.png" alt="${teamName}"><br>
<h1>${teamName}</h1><br>
<h2>${shortname}</h2>`
    let x = b.players
    x.forEach(i => {
      const { playerImg, name, role, battingStyle, bowlingStyle } = i
      let players = document.getElementById("players")
      let div = document.createElement('div')
      div.setAttribute("class", "details")
      div.innerHTML = `<img src=${playerImg}><br><h2>${name}</h2>
  <h3>${role}</h3>
  <h3>${battingStyle}</h3>
  <h3>${bowlingStyle} </h3>`

      players.appendChild(div)
      // console.log(i);

    })
  }
}
team()
document.getElementById("matches").addEventListener("click", async (a) => {
  let matchbody = document.getElementById("match-body")
  let pointable = document.getElementById("point-table-body")
  let team = document.getElementById("teaminfo-body")
  matchbody.style.display = 'block'
  pointable.style.display = 'none'
  team.style.display = 'none'


})








// console.log(x);



document.getElementById('matches').addEventListener("click", () => {
  let matchBody = document.getElementById("match-details")
  let pointTableBody = document.getElementById("point-table-body")
  let teamInfoBody = document.getElementById("teaminfo-body")
  let navbar = document.getElementById("nav")
  let scorecard = document.getElementById("score-card")
  let squad = document.getElementById("squad")
  matchBody.style.display = 'grid'
  pointTableBody.style.display = 'none'
  teamInfoBody.style.display = 'none'
  navbar.style.display = 'none'
  scorecard.style.display = 'none'
  squad.style.display = 'none'
})
document.getElementById('team-info').addEventListener("click", (a) => {
  let matchbody = document.getElementById("match-body")
  let pointTable = document.getElementById("point-table-body")
  let team = document.getElementById("teaminfo-body")
  matchbody.style.display = 'none'
  pointTable.style.display = 'none'
  team.style.display = 'block'
})