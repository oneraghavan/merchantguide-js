describe("A suite", function() {
    var mValues,gConversion,galacticMapping;
  	beforeEach(function(){
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    })

  it("Should test getMetalUnitpricefromLines", function() {
    inputLines = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits'];
    mValues.getMetalUnitpricefromLines(inputLines);
    metalUnitPrices = mValues.getMetalUnitPrices();
    expect(metalUnitPrices['Silver']).toBe(17);
    expect(metalUnitPrices['Gold']).toBe(14450);

})

  it("Should test getMappingFromLine", function() {
    inputLine = 'pish pish Iron is 3910 Credits'
    mValues.getMetalUnitpricefromLine(inputLine)
    metalUnitPrices = mValues.getMetalUnitPrices();
    expect(metalUnitPrices["Iron"]).toBe(195.5);
})

  it("Should test getMappingFromLine", function() {
    inputLine = 'pish pish Iron'
    metalQuantityArray = mValues.getMetalandQuatityValue(inputLine)
    expect(metalQuantityArray[0]).toBe('Iron');
    expect(metalQuantityArray[1]).toBe(20);
})

  it("Should test getMappingFromLine", function() {
    inputLine = '3910 Credits'
    expect(mValues.getTotalCreditsforgivenMetal(inputLine)).toBe(3910);
})

  it("Should test getMappingFromLine", function() {
    inputLine = '3910 Credits'
    expect(mValues.getTotalCreditsforgivenMetal(inputLine)).toBe(3910);
})

});