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
        quantityValueString = _.first(quantiyMetal,2);
        metal = _.last(quantiyMetal,2)[0]
        quantityValue = this.galacticConversion.getValuesFromGalactic(quantityValueString)
        metalUnitPrice = this.metalValues.getMetalUnitPrice(metal)
        if (quantityValue == -1 || metalUnitPrice == -1){
            console.log(this.invalidQuerymessage); 
        }
        else{
            console.log(_.without(splitlines[1].split(' '),_.last(splitlines[1].split(' '),1)).join(' ') + ' is ' + getDecimalremovedCredit(quantityValue*metalUnitPrice) + ' credits ');
        }
    }
    else{
        console.log(this.invalidQuerymessage)     
    }
}

AnswerQueries.prototype.getValueforString=function(queryLine){
    splitlines = queryLine.split(' is ')
    if (splitlines[0] == 'how much'){

        valueString = _.without(splitlines,_.last(splitlines[1].split(' '),1)[0])[1];
        quantityValueString = _.without(valueString.split(' '),'?');
        quantityValue = this.galacticConversion.getValuesFromGalactic(quantityValueString)
        if (quantityValue == -1){
            console.log( this.invalidQuerymessage)
        }else{
            console.log( quantityValueString.join(' ') + ' is ' + getDecimalremovedCredit(quantityValue))
        }
    }else{
        console.log( this.invalidQuerymessage)
    }
}

getDecimalremovedCredit = function(value){
    if (value == parseInt(value)){
        return parseInt(value)
    }else{
        return value
    }
}

module.exports = AnswerQueries;