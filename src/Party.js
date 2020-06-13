class Party {
  
    constructor(newName){
        this.name = newName
        this.totalVotes = 0
        this.percentVotes = 0.0
    }

    toString(){
      var party = `${this.name}`
      return party
    }

    toRadio(){
        var ballotRadio
        ballotRadio = `<div class="field">
                         <div class="ui radio checkbox">
                           <input type="radio"  name="party" tabindex="0">
                           <label style="color:aliceblue;">${this.name}</label>
                         </div>
                       </div>`
        return ballotRadio  
    }

    setTotalVotes(newTotalVotes) {
      this.totalVotes = parseInt(newTotalVotes)
    }
  
    setPercentVotes(newPercentVotes) {
      this.percentVotes = parseInt(newPercentVotes)
    }
  
    toResults(){
      let result
      result = `
                         <tr>
                            <td>${this.name} &nbsp; &nbsp; - &nbsp; &nbsp; ${this.totalVotes} &nbsp; &nbsp; ${this.percentVotes}%</td>
                         </tr>`
      return result
    }
  
    toResultsTableRow(){
      let result
      result = `<tr>
                    <td>${this.name}</td>
                    <td>${this.totalVotes}</td>
                    <td>${this.percentVotes}%</td>
                  </tr>`
      return result
    }
  
    toResultsInput(){
      let result
      result = `<div class="ui right labeled input voteInput">
                            <input type="Number" style="width: 10%"  id="${this.name}" name="${this.name}" min="0"><a class="ui tag label" style="width: 80%">
                            ${this.name}
                          </a>
                        </div>
                        `
      return result
    }
}