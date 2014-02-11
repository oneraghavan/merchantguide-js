describe("A suite", function() {
  it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    Queries = ['how much is pish tegj glob glob ?', 'how many Credits is glob prok Silver ?', 'how many Credits is glob prok Gold ?', 'how many Credits is glob prok Iron ?', 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?']
    aQueries.getAnserForQuerylines(Queries)
})

it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how much is pish tegj glob glob ?'
    aQueries.getAnswerForQueryline(queryLine)
    queryLine = 'how many Credits is glob prok Silver ?'
    aQueries.getAnswerForQueryline(queryLine)
})

it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
    aQueries.getAnswerForQueryline(queryLine)

})


it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how many Credits is glob prok Silver ?'
    aQueries.getCreditsforgivenMetal(queryLine)

})

it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how many Credits is glob prok Silver1 ?'
    aQueries.getCreditsforgivenMetal(queryLine)

})

it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how much is pish tegj glob glob ?'
    aQueries.getValueforString(queryLine)

})

it("Should return valid value for a given galactic number", function() {
    var mValues,gConversion,galacticMapping,aQueries;
    galacticMapping = {'pish': 10, 'glob': 1, 'prok': 5, 'tegj': 50}
    var galacticConversion = require('../galacticConversion.js');
    gConversion = new galacticConversion(galacticMapping);
    var metalValues = require('../metalValues.js');
    mValues = new metalValues(gConversion);
    metalMarketvalues = ['glob glob Silver is 34 Credits', 'glob prok Gold is 57800 Credits', 'pish pish Iron is 3910 Credits']
    mValues.getMetalUnitpricefromLines(metalMarketvalues)
    var AnswerQueries = require('../answerQueries.js');
    aQueries = new AnswerQueries(gConversion, mValues)
    queryLine = 'how much is pish tegj glob glob1 ?'
    aQueries.getValueforString(queryLine)

})

});
