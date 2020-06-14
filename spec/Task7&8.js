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
        it('should set the .percentVotes with the .setPercentVotes method', () => {
          theCandidate.setPercentVotes(60)
          console.log(theCandidate.percentVotes)
          expect(theCandidate.percentVotes === '60.00').toBeTruthy()
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