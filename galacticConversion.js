var _ = require("underscore");
function GalacticConversion(mapping){
  this.galacticMapping = mapping;
}

GalacticConversion.prototype.getValuesFromGalactic = function(galacticValue){
    var prevValue = 0
    var total = 0
    var inValidQuery = 1
    var that = this;
   	_.each(galacticValue,function(char){
   		if (_.has(that.galacticMapping,char)){
            if (that.galacticMapping[char] > prevValue){
		              total = total -  prevValue
            }else{
                  total += prevValue
                  
   			    }
            prevValue = that.galacticMapping[char]
   		}else{
            inValidQuery = -1
   			    return false;
   		}
   	});
      total += prevValue
      if(inValidQuery == -1){
        total = -1;
      }
      return total
}

module.exports = GalacticConversion;