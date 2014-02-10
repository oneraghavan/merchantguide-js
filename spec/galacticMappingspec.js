describe("A suite", function() {
  it("Should test getMappingFromLines", function() {
        inputLines = ['glob is I', 'prok is V']
        var GalacticMapping = require('../galacticMapping.js');
        var gmapping = new GalacticMapping();
        gmapping.getMappingFromLines(inputLines);
        console.info(gmapping.getCurrentMappingValueIfexist('glob'));
        console.info(gmapping.getCurrentMappingValueIfexist('prok'));
  });
});