describe("A suite", function() {
  it("Should test getMappingFromLines", function() {
	inputLines = ['glob is I', 'prok is V']
    var GalacticMapping = require('../galacticMapping.js');
	var gmapping = new GalacticMapping();
	gmapping.getMappingFromLines(inputLines);
	expect(gmapping.getCurrentMappingValueIfexist('glob')).toBe(1);
	expect(gmapping.getCurrentMappingValueIfexist('prok')).toBe(5);
})});

describe("A suite", function() {
  it("Should test getMappingFromLine", function() {
	inputLine = 'glob is I'
    var GalacticMapping = require('../galacticMapping.js');
	var gmapping = new GalacticMapping();
	gmapping.getMappingFromLine(inputLine);
	expect(gmapping.getCurrentMappingValueIfexist('glob')).toBe(1);
})});