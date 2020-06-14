describe('task3 adding Parties', () => {
    describe('Party', () => {
      let theParty
      beforeEach(() => {
        theParty = new Party()
      })
        it('should have a .name property', () => {
          expect(theParty.hasOwnProperty('name')).toBeTruthy()
         }),
         it('should set the .name property in the constructor', () => {
          theParty = new Party("ACT New Zealand")
          expect(theParty.name === "ACT New Zealand").toBeTruthy()
        })
    }),
    describe('Electorate changes', () =>{
      let theElectorate
      beforeEach(()=>{
        theElectorate = new Electorate()
      })
      it('should have an .allMyParties property',()=>{
        expect(theElectorate.hasOwnProperty('allMyParties')).toBeTruthy()
      }),
      it('should have an .allMyParties property that is an array',()=>{
        expect(Array.isArray(theElectorate.allMyParties)).toBeTruthy()
      }),
      it('should have an .sortPartiesByName method',()=>{
        expect((typeof theElectorate.sortPatiesByName === 'function')).toBeTruthy()
      })
    }),
    describe('values of party from the setup method of controller', () =>{
      let theElectorate
      beforeEach(()=>{
        theElectorate = Controller.setup()
      })
      it('should have the correct correct number of parties',()=>{
        expect((theElectorate.allMyParties.length)===16).toBeTruthy()
      }),
      it('should have the correct name for the first party', ()=>{
        theElectorate.sortPatiesByName()
        expect((theElectorate.allMyParties[0].name)==='ACT New Zealand').toBeTruthy()
      }),
      it('should have the correct name for the last party', ()=>{
        theElectorate.sortPatiesByName()
        expect((theElectorate.allMyParties[15].name)==='United Future').toBeTruthy()
      })
    })
  })