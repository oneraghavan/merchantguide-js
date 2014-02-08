var _ = require('underscore.js');
function AnswerQueries(gConversion,mValues){
    this.galacticConversion = gConversion
    this.metalValues = mValues
    this.invalidQuerymessage = 'I have no idea what you are talking about'

}

AnswerQueries.prototype.getAnserForQuerylines = function(queryLines){
    for queryLine in queryLines:
    _.each(queryLines,function(queryLine){
        this.getAnserForQueryline(queryLine)        
    })    
}

AnswerQueries.prototype.getAnserForQueryline=function(queryLine){
    if (queryLine.find('Credits') > 0){
        self.getCreditsforgivenMetal(queryLine)
    }else if(queryLine.find('much') > 0){
        self.getValueforString(queryLine)
    }else{
        print self.invalidQuerymessage
    }
}

AnswerQueries.prototype.getCreditsforgivenMetal = function(){
    splitlines = queryLine.split(' is ')
    if (splitlines[0] == 'how many Credits'){
        quantiyMetal = splitlines[1].split(' ')
        quantityValueString = quantiyMetal[:-2]
        metal = quantiyMetal[-2]
        quantityValue = self.galacticConversion.getValuesfromgalactic(quantityValueString)
        metalUnitPrice = self.metalValues.getMetalUnitPrice(metal)
        if (quantityValue == -1 or metalUnitPrice == -1){
            print self.invalidQuerymessage
        }
        else{
            print ' '.join(splitlines[1].split(' ')[:-1]) + ' is ' + str(getDecimalremovedCredit(quantityValue*metalUnitPrice)) + ' credits '
        }
    }
    else{
        print self.invalidQuerymessage     
    }
}

AnswerQueries.prototype.getValueforString=function(){
    splitlines = queryLine.split(' is ')
    if (splitlines[0] == 'how much'){
        quantityValueString = splitlines[1].split(' ')[:-1]
        quantityValue = self.galacticConversion.getValuesfromgalactic(quantityValueString)
        if (quantityValue == -1){
            print self.invalidQuerymessage
        }else{
            print ' '.join(quantityValueString) + ' is ' + str(getDecimalremovedCredit(quantityValue))
        }
    }else{
        print self.invalidQuerymessage
    }
}

getDecimalremovedCredit = function(){
    if (value == parseInt(value){
        return parseInt(value)
    }else{
        return value
    }
}