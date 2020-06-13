
// describe('task1 adding Electorate', () => {
//   describe('Electorate Properties', () => {
//     let theElectorate
//     beforeEach(() => {
//       theElectorate = new Electorate()
//     })
//       it('should have a .name property', () => {
//         expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
//       }),
//       it('should have a .year property', () => {
//         expect(theElectorate.hasOwnProperty('year')).toBeTruthy()
//       })
//   })

// })

// describe('task3 adding Parties', () => {
//   describe('Party', () => {
//     let theParty
//     beforeEach(() => {
//       theParty = new Party()
//     })
//       it('should have a .name property', () => {
//         expect(theParty.hasOwnProperty('name')).toBeTruthy()
//        }),
//        it('should set the .name property in the constructor', () => {
//         theParty = new Party("ACT New Zealand")
//         expect(theParty.name === "ACT New Zealand").toBeTruthy()
//       })
//   }),
//   describe('Electorate changes', () =>{
//     let theElectorate
//     beforeEach(()=>{
//       theElectorate = new Electorate()
//     })
//     it('should have an .allMyParties property',()=>{
//       expect(theElectorate.hasOwnProperty('allMyParties')).toBeTruthy()
//     }),
//     it('should have an .allMyParties property that is an array',()=>{
//       expect(Array.isArray(theElectorate.allMyParties)).toBeTruthy()
//     }),
//     it('should have an .sortPartiesByName method',()=>{
//       expect((typeof theElectorate.sortPatiesByName === 'function')).toBeTruthy()
//     })
//   }),
//   describe('values of party from the setup method of controller', () =>{
//     let theElectorate
//     beforeEach(()=>{
//       theElectorate = Controller.setup()
//     })
//     it('should have the correct correct number of parties',()=>{
//       expect((theElectorate.allMyParties.length)===16).toBeTruthy()
//     }),
//     it('should have the correct name for the first party', ()=>{
//       expect((theElectorate.allMyParties[0].name)==='ACT New Zealand').toBeTruthy()
//     }),
//     it('should have the correct name for the last party', ()=>{
//       expect((theElectorate.allMyParties[15].name)==='United Future').toBeTruthy()
//     })
//   })
// })

// describe('task5 adding Candidates', () => {
//   describe('Candidate', () => {
//     let theCandidate
//     beforeEach(() => {
//       theCandidate = new Candidate()
//     })
//       it('should have a .name property', () => {
//         expect(theCandidate.hasOwnProperty('name')).toBeTruthy()
//       }),
//       it('should set .name property in the constructor', () => {
//         theCandidate = new Candidate("HUMPHREY, Hilary Jane Hammonds","Labour Party")
//         expect(theCandidate.name === "HUMPHREY, Hilary Jane Hammonds").toBeTruthy()
//       }),
//       it('should have a .myParty property', () => {
//         expect(theCandidate.hasOwnProperty('myParty')).toBeTruthy()
//       }),
//       it('should set .myParty property in the constructor', () => {
//         theCandidate = new Candidate("HUMPHREY, Hilary Jane Hammonds","Labour Party")
//         expect(theCandidate.myParty.name === "Labour Party").toBeTruthy()
//       })
//   }),
//   describe('Electorate Changes', () => {
//     let theElectorate
//     beforeEach(() => {
//        theElectorate = new Electorate()
//     })
//       it('should have an .allMyCandidates property', () => {
//         expect(theElectorate.hasOwnProperty('allMyCandidates')).toBeTruthy()
//       }),
//       it('should have an .allMyCandidates property that is an array', () => {
//         expect(Array.isArray(theElectorate.allMyCandidates)).toBeTruthy()
//       }),
//       it('should have a .sortCandidatesByName method', () => {
//         expect(typeof theElectorate.sortCandidatesByName === 'function').toBeTruthy()
//       })
//   }),
//   describe('value of candidates from the setup method of the Controller', () => {
//        let theElectorate
//        beforeEach(() => {
//          theElectorate = Controller.setup()
//        })
//        it('should have the correct number of Candidates',() => {
//          expect((theElectorate.allMyCandidates.length)===4).toBeTruthy()
//        }),
//        it('Should have the correct name for the first candidate',() => {
//          expect((theElectorate.allMyCandidates[0].name)==='HUMPHREY, Hilary Jane Hammonds').toBeTruthy()
//        }),
//        it('should have the correct name for the last candidate',() => {
//          expect((theElectorate.allMyCandidates[3].name)==='THOMSON, Allan George Robin').toBeTruthy()
//        })
//   })

// })

describe('Task7 Setting candidate votes', () => {
  describe('Candidate', () => {
    let theCandidate
    beforeEach(() => {

      theCandidate = new Candidate()
    })
    it('should have a .totalVotes Property', () => {
      expect(theCandidate.hasOwnProperty('totalVotes')).toBeTruthy()
    }),
      it('should set the .totalVotes Property in Constructor to 0', () => {
        expect(theCandidate.totalVotes === 0).toBeTruthy()
      }),
      it('should have a .percentVotes Property', () => {
        expect(theCandidate.hasOwnProperty('percentVotes')).toBeTruthy()
      }),
      it('should set the .percentVotes Property in Constructor to 0', () => {
        expect(theCandidate.totalVotes === 0).toBeTruthy()
      }),
      it('should have a .setTotalVotes method', () => {
        expect(typeof theCandidate.setTotalVotes === 'function').toBeTruthy()
      }),
      it('should set the .totalVotes with the .setTotalVotes method', () => {
        theCandidate.setTotalVotes(999)
        expect(theCandidate.totalVotes === 999).toBeTruthy()
      }),
      it('should have a .setPercentVotes method', () => {
        expect(typeof theCandidate.setPercentVotes === 'function').toBeTruthy()
      }),
      it('should set the .totalVotes with the .setPercentVotes method', () => {
        theCandidate.setPercentVotes(60)
        expect(theCandidate.percentVotes === 60).toBeTruthy()
      })
  })
  describe('Electorate changes', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = new Electorate()
    })
    describe('Electorate .findCandidate method', () => {

      it('should have a .findCandidate method', () => {
        expect(typeof theElectorate.findCandidate === 'function').toBeTruthy()
      }),
        it('should  find a target candidate by name with the .findCandidate method', () => {
          var candidate = theElectorate.findParty('HUMPHREY, Hilary Jane Hammonds')
          expect(candidate.name === 'HUMPHREY, Hilary Jane Hammonds').toBeTruthy()
        })
    })
    describe('Electorate .setCandidateVote method', () => {
      it('should have a .setCandidateVote method', () => {
        expect(typeof theElectorate.setCandidateVotes === 'function').toBeTruthy()
      }),
        it('should set the number of total votes of a designed candidate with the .setCandidateVote method', () => {
          theElectorate.addCandidate('HUMPHREY, Hilary Jane Hammonds', 'Labour Party')
          theElectorate.setCandidateVotes('HUMPHREY, Hilary Jane Hammonds', 8595)
          var candidate = theElectorate.findCandidate('HUMPHREY, Hilary Jane Hammonds')
          expect(candidate.totalVotes === 8595).toBeTruthy()
        })
    })
    describe('Electorate .calcCandidatePercentages method', () => {
      it('should have a .calcCandidatePercentages method', () => {
        expect(typeof theElectorate.calcCandidatePercentages === 'function').toBeTruthy()
      }),
        it('should correctly calculate the percent of votes for each candidate with .calcCandidatePercentages method', () => {
          theElectorate.addCandidate('A', 'Party A')
          theElectorate.addCandidate('B', 'Party B')
          theElectorate.setCandidateVotes('A', 60)
          theElectorate.setCandidateVotes('B', 40)
          theElectorate.calcCandidatePercentages()
          expect(theElectorate.allMyCandidates[0].percentVotes === '60.00').toBeTruthy()
          expect(theElectorate.allMyCandidates[1].percentVotes === '40.00').toBeTruthy()
        })
    })
  })

})



