var _ = require('underscore')
function MetalValues(galacticConversion){
	this.metalUnitPrice = {}
    this.gConversion = galacticConversion
}

MetalValues.prototype.getMetalUnitpricefromLines = function(priceLines){

    var that = this;
	_.each(priceLines,function(priceLine){
		that.getMetalUnitpricefromLine(priceLine);
	});
}

MetalValues.prototype.getMetalUnitpricefromLine = function(priceLine){
        partLine = priceLine.split(' is ')
        metalQuantityArray = this.getMetalandQuatityValue(partLine[0])
        metal = metalQuantityArray[0]
        quatity = metalQuantityArray[1]
        totalCredit = this.getTotalCreditsforgivenMetal(partLine[1])
        this.metalUnitPrice[metal] = parseFloat((totalCredit)/quatity)
}

MetalValues.prototype.getMetalandQuatityValue = function(metalAmount){
        splitParts = metalAmount.split(' ')
        metal = _.last(splitParts);
        quantityString = _.without(splitParts,metal) 
        quantity = this.gConversion.getValuesFromGalactic(quantityString)
        return [metal , quantity]
}

MetalValues.prototype.getTotalCreditsforgivenMetal = function(creditPart){
	return parseInt(creditPart.split(' ')[0])
}

MetalValues.prototype.getMetalUnitPrices =function(){
        return this.metalUnitPrice
}

MetalValues.prototype.getMetalUnitPrice = function(){
        if (_has(self.metalUnitPrice,metal))
            return this.metalUnitPrice[metal]
        else{
            return -1
        }
}

module.exports = MetalValues;

