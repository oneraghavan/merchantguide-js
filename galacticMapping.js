var romanMapping = require("romanMapping.js")
function GalacticMapping(){
	var currentMapping = {}
}

GalacticMapping.prototype.getMappingLines = function(mappingLines){
	_.each(mappingLines,function(mappingLine){
		this.getMappingLine(mappingLine);	
	})
}

GalacticMapping.prototype.getMappingLines = function(mappingLines){
	var mappingLineSplit = mappingLine.split(' ')
	var mapkey = mappingLineSplit[0]
    var mapValue = romanMapping[mappingLineSplit[2]]
    self.setCurrentMapping(mapKey, mapValue)
}

GalacticMapping.prototype.setCurrentMapping = function(mapKey, mapValue){
	this.currentMapping[mapkey] = mapValue;
}

GalacticMapping.prototype.getCurrentMapping = function(mapKey){
    if _.has(self.currentMapping, mapkey){
        return self.currentMapping[key]
    }else{
        return -1
    }
}

module.exports = GalacticMapping;