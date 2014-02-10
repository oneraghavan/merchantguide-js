var _ = require('underscore');
function AnswerQueries(gConversion,mValues){
    this.galacticConversion = gConversion
    this.metalValues = mValues
    this.invalidQuerymessage = 'I have no idea what you are talking about'

}

AnswerQueries.prototype.getAnserForQuerylines = function(queryLines){
    var that = this; 
    _.each(queryLines,function(queryLine){
        that.getAnswerForQueryline(queryLine)        
    })    
}

AnswerQueries.prototype.getAnswerForQueryline=function(queryLine){
    if (queryLine.indexOf('Credits') > 0){
        this.getCreditsforgivenMetal(queryLine)
    }else if(queryLine.indexOf('much') > 0){
        this.getValueforString(queryLine)
    }else{
        return this.invalidQuerymessage
    }
}

AnswerQueries.prototype.getCreditsforgivenMetal = function(queryLine){
    splitlines = queryLine.split(' is ')
    if (splitlines[0] == 'how many Credits'){
        quantiyMetal = splitlines[1].split(' ')
        quantityValueString = _.last(quantiyMetal,2);
        metal = quantiyMetal[-2]
        quantityValue = this.galacticConversion.getValuesFromGalactic(quantityValueString)
        metalUnitPrice = this.metalValues.getMetalUnitPrice(metal)
        if (quantityValue == -1 || metalUnitPrice == -1){
            return this.invalidQuerymessage
        }
        else{
            return ' '.join(_.last(splitlines[1].split(' '),1)) + ' is ' + str(getDecimalremovedCredit(quantityValue*metalUnitPrice)) + ' credits '
        }
    }
    else{
        return this.invalidQuerymessage     
    }
}

AnswerQueries.prototype.getValueforString=function(queryLine){
    splitlines = queryLine.split(' is ')
    if (splitlines[0] == 'how much'){
        quantityValueString = _.last(splitlines[1].split(' '),1);
        quantityValue = this.galacticConversion.getValuesFromGalactic(quantityValueString)
        if (quantityValue == -1){
            return this.invalidQuerymessage
        }else{
            return ' '.join(quantityValueString) + ' is ' + str(getDecimalremovedCredit(quantityValue))
        }
    }else{
        return this.invalidQuerymessage
    }
}

getDecimalremovedCredit = function(){
    if (value == parseInt(value)){
        return parseInt(value)
    }else{
        return value
    }
}

module.exports = AnswerQueries;