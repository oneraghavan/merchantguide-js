var romanMapping = require("./romanMapping.js");
var _ = require('underscore')

function GalacticMapping(){
	this.currentMapping = {}
}

GalacticMapping.prototype.getMappingFromLines = function(mappingLines){
	var that = this;
	_.each(mappingLines,function(mappingLine){
		that.getMappingFromLine(mappingLine);
	})
}

GalacticMapping.prototype.getMappingFromLine = function(mappingLines){
	var mappingLineSplit = mappingLines.split(' ')
	var mapKey = mappingLineSplit[0]
    var mapValue = romanMapping[mappingLineSplit[2]]
    this.setCurrentMapping(mapKey, mapValue)
}

GalacticMapping.prototype.setCurrentMapping = function(mapKey, mapValue){
	this.currentMapping[mapKey] = mapValue;
}

GalacticMapping.prototype.getCurrentMappingValueIfexist = function(mapKey){
    if (_.has(this.currentMapping, mapKey)){
        return this.currentMapping[mapKey]
    }else{
        return -1
    }
}

module.exports = GalacticMapping;
