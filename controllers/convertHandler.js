function roundNum(num) {
  return Math.round(num * 100000) / 100000
}

function ConvertHandler() {
  this.getNum = function(input) {
    let unit = input.match(/[A-Za-z]+$/)[0]
    let num = input.split(unit)[0]
    if (num) {
      if (num.split("/").length - 1 > 1) {
        return 'invalid number'
      } else if (num.split("/").length - 1 === 1) {
        let fraction = parseFloat(num.split("/")[0] / num.split("/")[1])
        return fraction
      } else {
        return parseFloat(num)
      }
    } else {
			return 1
    }
  };

  this.getUnit = function(input) {
    let unit = input.match(/[A-Za-z]+$/)[0]
    let unitArr = ['kg', 'lbs', 'l', 'gal', 'km', 'mi']

    if (!unitArr.includes(unit.toLowerCase())) {
      return 'invalid unit'
    }

    if (unit === 'L' || unit === 'l') {
      return 'L'
    } else {
      return unit.toLowerCase();
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result
    switch (initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'L':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      default:
        result = "invalid unit"
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result
    switch (unit) {
      case 'gal':
        result = 'gallons'
        break
      case 'L':
        result = 'liters'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
      default:
        result = "invalid unit"
    }
    return result
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'gal':
        result = roundNum(initNum * galToL)
        break
      case 'L':
        result = roundNum(initNum / galToL)
        break
      case 'lbs':
        result = roundNum(initNum * lbsToKg)
        break
      case 'kg':
        result = roundNum(initNum / lbsToKg)
        break
      case 'mi':
        result = roundNum(initNum * miToKm)
        break
      case 'km':
        result = roundNum(initNum / miToKm)
        break
      default:
        result = "invalid unit"
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let string = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)

    return string
  };
}

module.exports = ConvertHandler;
