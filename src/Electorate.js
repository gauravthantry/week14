class Electorate {
  constructor(newName, newYear) {
    this.name = newName
    this.year = newYear
    this.allMyParties = []
    this.allMyCandidates = []
  }

  toString() {
    var electorateDetails = `Electorate Name: ${this.name} Year: ${this.year}`
    return electorateDetails //Not used as of now
  }

  toTable() {
    var table
    table = `
        <table class='ui inverted table'>
        <thead>
          <tr>
           <th>ELECTORATE</th>
           <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
           <tr>
             <td>${this.name}</td>
             <td>${this.year}</td>
           </tr>
        </tbody>
        </table>
    `
    return table
  }

  addParty(newName) {
    var theParty = new Party(newName)
    this.allMyParties.push(theParty)
    this.sortPatiesByName()
  }

  sortPatiesByName() {
    this.allMyParties.sort()
  }

  toPartyBallot() {
    var result = ''
    for (var i of this.allMyParties) {
      var theParty = new Party(i)
      result += theParty.toRadio()

    }
    result = `<div class="ui inverted grey table" id="partyBallot">
                  <h3 class="heading">Party Ballot<h3>
                  <hr>
                   <div class="ui form">
                     <div class="grouped fields">
                       ${result}
                     </div>
                   </div>
                   </div>`
    return result
  }

  findParty(targetPartyName) {
    if(this.allMyParties.find(aParty => aParty.name === targetPartyName))
    {
      return this.allMyParties.find(aParty => aParty.name === targetPartyName)
    }
    else{
      var theParty = new Party(targetPartyName)
      this.allMyParties.push(theParty)
      return this.allMyParties.find(aParty => aParty.name === targetPartyName)
    }
    
  }

  addCandidate(newName, aPartyName) {
    let theParty = this.findParty(aPartyName)
    let theCandidate = new Candidate(newName, theParty)
    this.allMyCandidates.push(theCandidate)
    this.sortCandidatesByName()
  }

  sortCandidatesByName() {
    this.allMyCandidates.sort()
  }

  toCandidateTable() {
    var result = ''
           for (var candidate of this.allMyCandidates) {
             var theParty = candidate.myParty.name
             var theCandidate = new Candidate(candidate.name, theParty)
             result += theCandidate.toTableRow(theCandidate)
           }
    var table
    table = `
    <div class="ui inverted grey table" id="candidateBallot">    
    <h3 class="heading">Candidate Ballot</h3>
        <hr>
        <table class='ui inverted grey table'>
        <thead>
          <tr>
           <th>Candidate Name</th>
           <th>Party</th>
          </tr>
        </thead>
        <tbody>
           ${result}
        </tbody>
        </table>
        </div>
    `
    return table
  }

  toCandidateBallot() {
    var result = ''
    for (var candidate of this.allMyCandidates) {
      var theParty = candidate.myParty.name
      var theCandidate = new Candidate(candidate.name, theParty)
      result += theCandidate.toRadio(theCandidate)
    }

    result = `<div class="ui inverted grey table" id="candidateBallot">
                <h3 class="heading">Candidate Ballot<h3>
                <hr>
                   <div class="ui form">
                     <div class="grouped fields">
                       ${result}
                     </div>
                   </div>
                   </div>`
    return result
  }

  findCandidate(targetCandidateName){
    if(this.allMyCandidates.find(aCandidate => aCandidate.name === targetCandidateName)){
      return this.allMyCandidates.find(aCandidate => aCandidate.name === targetCandidateName)
    }
  }

  //------------------For Candidate Votes--------------------------------------------------------------//
  setCandidateVotes(targetCandidateName, newVoteTotal){
    var theCandidate = this.findCandidate(targetCandidateName)
    theCandidate.setTotalVotes(newVoteTotal)
  }

  calcCandidatePercentages()
  {
    var totalCombinedVotes = 0
    
    for (var theCandidate of this.allMyCandidates)
    {
      totalCombinedVotes += parseInt(theCandidate.totalVotes)
    }
    for (var theCandidate of this.allMyCandidates)
    {
      theCandidate.setPercentVotes(Number((theCandidate.totalVotes/totalCombinedVotes)*100).toFixed(2))
    }
    this.sortCandidateByVotes()
  }

  sortCandidateByVotes()
  {
    this.allMyCandidates.sort(function (a , b){
      return b.totalVotes - a.totalVotes
    })
  }
//-------------------------------------------------------------------------------------------------------------//

//-----------------------------For Party Votes ----------------------------------------------------------------//
  setPartyVotes(targetPartyName, newVoteTotal){
    var theParty = this.findParty(targetPartyName)
    theParty.setTotalVotes(newVoteTotal)
  }

  calcPartyPercentages()
  {
    var totalCombinedVotes = 0
    
    for (var theParty of this.allMyParties)
    {
      totalCombinedVotes += parseInt(theParty.totalVotes)
    }
   
    for (var theParty of this.allMyParties)
    {
      theParty.setPercentVotes(Number((theParty.totalVotes/totalCombinedVotes)*100).toFixed(2))
    }
    this.sortPartyByVotes()
  }

  sortPartyByVotes()
  {
    this.allMyParties.sort(function (a , b){
      return b.totalVotes - a.totalVotes
    })
  }
  //--------------------------------------------------------------------------------------------------------//

  //------------------------------------ For fetching candidate results ------------------------------------//
  toCandidateResults(){
   var result = `<div class="ui inverted  table" id="candidateHeader">   
                     <h3 class="heading">CANDIATE VOTES</h3></div> 
                         <table class="ui inverted grey table" id="candidateVoteList">
                             <tbody>
                                `
   for(var theCandidate of this.allMyCandidates){
    
    result += theCandidate.toResults()
   }

   result+= `   </tbody>
                      </table>
                           `
   return result
  
  }

  toCandidateResultsTable(){
    var result = `<table class="ui inverted grey table" id="candidateVoteTable">
                                    <thead>
                                      <tr>
                                        <th>${this.name}</th>
                                        <th colspan='2' style="text-align: center">${this.year}&emsp;&emsp;&emsp;&emsp;</th>
                                      </tr>
                                    </thead>
                                     <tbody>`

    for(var theCandidate of this.allMyCandidates){
      result += theCandidate.toResultsTableRow()
    }
    result += `   </tbody>
                          </table>`
    return result

  }

  toCandidateResultsForm(){
     var result = `<div class="ui grey inverted segment">
                        <h4>Taranaki-King Country 2017 Candidate Vote Total Entry</h4>
                                 <form class="ui form" id="candidate-vote-update-form">`
    for(var theCandidate of this.allMyCandidates){
      result += theCandidate.toResultsInput()
    }

    result += `
         </form>
         <div class="formButton"><button class="ui button" onclick="updateCandidateVotes()">Update</button></div>
      </div>`
    return result
  }
//---------------------------------------------------------------------------------------------------------------//


//---------------------------------- For fetching party results -------------------------------------------------//
  toPartyResults(){
    var result = `<div class="ui inverted  table" id="partyHeader">   
                         <h3 class="heading">PARTY VOTES</h3></div> <table class="ui inverted grey table" id="partyVoteList">
                              <tbody>
                                 `
    for(var theParty of this.allMyParties){
     
      result += theParty.toResults()
    }
 
    result += `   </tbody>
                       </table>`
    return result
   
   }
 
   toPartyResultsTable(){
     var result = `<table class="ui inverted grey table" id="candidateVoteTable">
                               <thead>
                                 <tr>
                                   <th>${this.name}</th>
                                   <th colspan='2' style="text-align: center">${this.year}&emsp;&emsp;&emsp;&emsp;</th>
                                 </tr>
                               </thead>
                                <tbody>`
 
     for(var theParty of this.allMyParties){
      result += theParty.toResultsTableRow()
     }
     result += `   </tbody>
                           </table>`
     return result
 
   }
 
   toPartyResultsForm(){
      var result = `<div class="ui grey inverted segment">
                         <h4>Taranaki-King Country 2017 Candidate Vote Total Entry</h4>
                                  <form class="ui form" id="party-vote-update-form">`
     for(var theParty of this.allMyParties){
       result += theParty.toResultsInput()
     }
 
     result += `
          </form>
          <div class="formButton"><button class="ui button" onclick="updatePartyVotes()">Update</button></div>
       </div>`
     return result
   }
//------------------------------------------------------------------------------------------------------------------//
}

