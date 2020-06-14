
describe('task1 adding Electorate', () => {
  describe('Electorate Properties', () => {
    let theElectorate
    beforeEach(() => {
      theElectorate = new Electorate()
    })
      it('should have a .name property', () => {
        expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
      }),
      it('should have a .year property', () => {
        expect(theElectorate.hasOwnProperty('year')).toBeTruthy()
      })
  })
  describe('values of Electorate from the setup method of Controller',() => {
    let theElectorate
    beforeEach(()=>{
      theElectorate = Controller.setup()
    })
    it('should have the correct name',()=>{
      expect(theElectorate.name=== 'Taranaki-King Country').toBeTruthy()
    }),
    it('should have the correct year',()=>{
      expect(theElectorate.year=== 2017).toBeTruthy()
    })
  })
  describe('types of values of Electorate from the setup method of Controller',() => {
    let theElectorate
    beforeEach(()=>{
      theElectorate = Controller.setup()
    })
    it('name should not have leading spaces',()=>{
      expect(theElectorate.name[0]=== ' ').not.toBe()
    }),
    it('name should not have trailing spaces',()=>{
      expect(theElectorate.name[theElectorate.name.length-1]=== ' ').not.toBe()
    }),
    it('year should be a number',()=>{
      expect(typeof theElectorate.year === 'number').not.toBe()
    })
  })

})



