describe("A suite", function() {
  it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    Queries = ['how much is pish tegj glob glob ?', 'how many Credits is glob prok Silver ?', 'how many Credits is glob prok Gold ?', 'how many Credits is glob prok Iron ?', 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?']
    console.info(aQueries.getAnserForQuerylines(Queries))
})

});
