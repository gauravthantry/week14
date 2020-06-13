class Candidate {
  constructor(newName, theParty) {
    this.name = newName
    this.myParty = new Party(theParty)
    this.totalVotes = 0
    this.percentVotes = 0.0
  }

  toString() {
    let result
    if (this.myParty) {
      result = `${this.name} - ${this.party}`
    }
    else {
      result = `${this.name} - Independent`
    }

    return result
  }

  toTableRow() {
    let result
    result = `
           <tr>
             <td><input type="radio"  name="candidate" tabindex="0">
             <label style="color:aliceblue;">${this.name}</label> </td>
             <td>${this.myParty}</td>
           </tr>
         `

    return result
  }

  toRadio() {
    let result

    result = `<div class="field">
                       <div class="ui radio checkbox">
                         <input type="radio"  name="candidate" tabindex="0">
                         <label style="color:aliceblue;">${this.name} - ${this.myParty}</label>
                       </div>
                     </div>`

    return result
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
                          <td>${this.name} &nbsp; &nbsp; - &nbsp; &nbsp;${this.myParty} &nbsp; &nbsp; ${this.totalVotes} &nbsp; &nbsp; ${this.percentVotes}%</td>
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
                          ${this.name} - ${this.myParty}
                        </a>
                      </div>
                      `
    return result
  }
  
}
