describe('task5 adding Candidates', () => {
    describe('Candidate', () => {
      let theCandidate
      beforeEach(() => {
        theCandidate = new Candidate()
      })
        it('should have a .name property', () => {
          expect(theCandidate.hasOwnProperty('name')).toBeTruthy()
        }),
        it('should set .name property in the constructor', () => {
          theCandidate = new Candidate("HUMPHREY, Hilary Jane Hammonds","Labour Party")
          expect(theCandidate.name === "HUMPHREY, Hilary Jane Hammonds").toBeTruthy()
        }),
        it('should have a .myParty property', () => {
          expect(theCandidate.hasOwnProperty('myParty')).toBeTruthy()
        }),
        it('should set .myParty property in the constructor', () => {
          theCandidate = new Candidate("HUMPHREY, Hilary Jane Hammonds","Labour Party")
          expect(theCandidate.myParty.name === "Labour Party").toBeTruthy()
        })
    }),
    describe('Electorate Changes', () => {
      let theElectorate
      beforeEach(() => {
         theElectorate = new Electorate()
      })
        it('should have an .allMyCandidates property', () => {
          expect(theElectorate.hasOwnProperty('allMyCandidates')).toBeTruthy()
        }),
        it('should have an .allMyCandidates property that is an array', () => {
          expect(Array.isArray(theElectorate.allMyCandidates)).toBeTruthy()
        }),
        it('should have a .sortCandidatesByName method', () => {
          expect(typeof theElectorate.sortCandidatesByName === 'function').toBeTruthy()
        })
    }),
    describe('value of candidates from the setup method of the Controller', () => {
         let theElectorate
         beforeEach(() => {
           theElectorate = Controller.setup()
         })
         it('should have the correct number of Candidates',() => {
           expect((theElectorate.allMyCandidates.length)===4).toBeTruthy()
         }),
         it('Should have the correct name for the first candidate',() => {
           theElectorate.sortCandidatesByName()
           expect((theElectorate.allMyCandidates[0].name)==='HUMPHREY, Hilary Jane Hammonds').toBeTruthy()
         }),
         it('should have the correct name for the last candidate',() => {
           expect((theElectorate.allMyCandidates[3].name)==='THOMSON, Allan George Robin').toBeTruthy()
         })
    })
  
  })