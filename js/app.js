var theElectorate
var updateVotesCandidate = false
var updateVotesParty = false
google.charts.load('current', { 'packages': ['corechart'] })

window.onload = function main() {
    zoom()

    theElectorate = Controller.setup(updateVotesCandidate, updateVotesParty)

    document.getElementById("content").innerHTML = theElectorate.toTable()


    //---------------- Creates main Grid Div ------------------- //
    var gridDiv = document.createElement('div')
    gridDiv.className = "ui grid"
    gridDiv.setAttribute("id", "gridContent")
    document.getElementById("content").appendChild(gridDiv)
    //----------------------------------------------------------- //

    var candidateVoteInfo = document.createElement('div')
    candidateVoteInfo.className = "five wide column"
    candidateVoteInfo.setAttribute("id", "candidateVoteInfo")
    document.getElementById("gridContent").appendChild(candidateVoteInfo)

    //----------------- Prints the candidate votes without formating into columns--------//
    var candidateVoteList = document.createElement('div')
    candidateVoteList.setAttribute("id", "candidateVoteList")
    document.getElementById("candidateVoteInfo").appendChild(candidateVoteList)
    candidateVoteList.innerHTML = theElectorate.toCandidateResults()

    //----------------- Prints the candidate votes in table column format-------//
    var candidateVoteTable = document.createElement('div')
    candidateVoteTable.setAttribute("id", "candidateVoteTable")
    document.getElementById("candidateVoteInfo").appendChild(candidateVoteTable)
    candidateVoteTable.innerHTML = theElectorate.toCandidateResultsTable()

    //----------------- Prints the form format for inputing candidate votes------//
    var candidateForm = document.createElement('div')
    candidateForm.setAttribute("id", "candidateForm")
    document.getElementById("candidateVoteInfo").appendChild(candidateForm)
    candidateForm.innerHTML = theElectorate.toCandidateResultsForm()
    
    //----------------- 3 column div for the pie chart --------//
    var pieChart = document.createElement('div')
    pieChart.className = "six wide column"
    pieChart.setAttribute("id", "pieChart")
    document.getElementById("gridContent").appendChild(pieChart)
 
    //----------------- candidate votes pie chart --------------//
    var candidateVotePie = document.createElement('div')
    candidateVotePie.setAttribute("id", "candidateVotePie")
    document.getElementById("pieChart").appendChild(candidateVotePie)
    google.charts.setOnLoadCallback(candidateChart)
    candidateVotePie.innerHTML = '<div id="candidatePieChart"></div>'

     //----------------- party votes pie chart --------------//
     var partyVotePie = document.createElement('div')
     partyVotePie.setAttribute("id", "partyVotePie")
     document.getElementById("pieChart").appendChild(partyVotePie)
     google.charts.setOnLoadCallback(partyChart)
     partyVotePie.innerHTML = '<div id="partyPieChart"></div>'
    //-----------------------------------------------------------//

    var partyVoteInfo = document.createElement('div')
    partyVoteInfo.className = "five wide column"
    partyVoteInfo.setAttribute("id", "partyVoteInfo")
    document.getElementById("gridContent").appendChild(partyVoteInfo)

     //----------------- Prints the party votes without formating into columns--------//
     var partyVoteList = document.createElement('div')
     partyVoteList.setAttribute("id", "partyVoteList")
     document.getElementById("partyVoteInfo").appendChild(partyVoteList)
     partyVoteList.innerHTML = theElectorate.toPartyResults()
 
     //----------------- Prints the party votes in table column format-------//
     var partyVoteTable = document.createElement('div')
     partyVoteTable.setAttribute("id", "partyVoteTable")
     document.getElementById("partyVoteInfo").appendChild(partyVoteTable)
     partyVoteTable.innerHTML = theElectorate.toPartyResultsTable()
 
     //----------------- Prints the form format for inputing party votes------//
     var partyForm = document.createElement('div')
     partyForm.setAttribute("id", "partyForm")
     document.getElementById("partyVoteInfo").appendChild(partyForm)
     partyForm.innerHTML = theElectorate.toPartyResultsForm()

}

function updateCandidateVotes() {
    var updateVotesInputs = document.getElementById("candidate-vote-update-form").elements
    updateVotesCandidate = true
    for (var candidateInput of updateVotesInputs) {
        if (candidateInput.value > 0) {
            var updatedCandidateVote = candidateInput.value
            theElectorate.setCandidateVotes(candidateInput.getAttribute("id"), updatedCandidateVote)
            theElectorate.calcCandidatePercentages()
        }
    }
    document.getElementById("candidateVoteList").innerHTML = theElectorate.toCandidateResults()
    document.getElementById("candidateVoteTable").innerHTML = theElectorate.toCandidateResultsTable()
    candidateChart()
}

function updatePartyVotes() {
    var updateVotesInputs = document.getElementById("party-vote-update-form").elements
    updateVotesParty = true
    for (var partyInput of updateVotesInputs) {
        if (partyInput.value > 0) {
            var updatedPartyVote = partyInput.value
            theElectorate.setPartyVotes(partyInput.getAttribute("id"), updatedPartyVote)
            theElectorate.calcPartyPercentages()
        }
    }
    document.getElementById("partyVoteList").innerHTML = theElectorate.toPartyResults()
    document.getElementById("partyVoteTable").innerHTML = theElectorate.toPartyResultsTable()
    partyChart()
}

function candidateChart() {
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Candidate')
    data.addColumn('number', 'Votes');
    for (var i = 0; i < theElectorate.allMyCandidates.length; i++) {
        data.addRow(
            [theElectorate.allMyCandidates[i].name, theElectorate.allMyCandidates[i].totalVotes]
        )
    }

     var options = {
         legend: 'none',
        pieSliceText: 'label',
        title: 'Candidate Votes',
        pieStartAngle: 100,
        backgroundColor: 'transparent',
        pieHole: 0.4,
        'width': 700,
        'height': 600
     }
    var chart = new google.visualization.PieChart(document.getElementById('candidatePieChart'));

    chart.draw(data, options)
}

function partyChart() {
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Party')
    data.addColumn('number', 'Votes');
    for (var i = 0; i < theElectorate.allMyParties.length; i++) {
        data.addRow(
            [theElectorate.allMyParties[i].name, theElectorate.allMyParties[i].totalVotes]
        )
    }

    var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Party Votes',
        pieStartAngle: 100,
        backgroundColor: 'transparent',
        pieHole: 0.4,
        'width': 700,
        'height': 600
     }

    var chart = new google.visualization.PieChart(document.getElementById('partyPieChart'))

    chart.draw(data, options)
}


function zoom() {
    document.body.style.zoom = "50%" 
}




