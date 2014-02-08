describe("A suite", function() {
  var galacticMapping;

  beforeEach(function(){
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50};
  })

  it("Should return valid value for a given galactic number", function() {
  	var galacticConversion = require("../galacticConversion.js");
  	var gConversion = new galacticConversion(galacticMapping);
  	expect(gConversion.getValuesFromGalactic(['pish','tegj','glob'])).toBe(41)
})

  it("Should return invalid value for a given galactic number", function() {
  	var galacticConversion = require("../galacticConversion.js");
  	var gConversion = new galacticConversion(galacticMapping);
  	expect(gConversion.getValuesFromGalactic(['pish','tegj1','glob1'])).toBe(-1)
})
  
});

