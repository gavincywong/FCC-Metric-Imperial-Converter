const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  // 1
  test("Reads whole number", function() {
    assert.equal(convertHandler.getNum('1L'), 1)
  })

  // 2
  test("Reads decimal number", function() {
    assert.equal(convertHandler.getNum('0.5L'), 0.5)
  })

  // 3
  test("Reads fractional number", function() {
    assert.equal(convertHandler.getNum('5/32L'), 0.15625)
  })

  // 4
  test("Reads fraction with a decimal number", function() {
    assert.equal(convertHandler.getNum('5/0.5L'), 10)
  })

  // 5
  test("Double-fraction", function() {
    assert.equal(convertHandler.getNum('5/3/2L'), 'invalid number')
  })

  // 6
  test("Default to 1", function() {
    assert.equal(convertHandler.getNum('L'), 1)
  })

  // 7
  test("Valid unit", function() {
    assert.equal(convertHandler.getUnit('1L'), 'L')
    assert.equal(convertHandler.getUnit('5MI'), 'mi')
  })

  // 8
  test("Invalid unit", function() {
    assert.equal(convertHandler.getUnit('5as'), 'invalid unit')
  })

  // 9
  test("Correct return unit", function() {
    assert.equal(convertHandler.getReturnUnit('L'), 'gal')
    assert.equal(convertHandler.getReturnUnit('gal'), 'L')
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
    assert.equal(convertHandler.getReturnUnit('mi'), 'km')
    assert.equal(convertHandler.getReturnUnit('km'), 'mi')
  })

  // 10
  test("String output", function() {
    assert.equal(convertHandler.getString(5, 'L', 1.32086, 'gal'), '5 liters converts to 1.32086 gallons')
  })

  // 11
  test("gal to L", function() {
    assert.equal(convertHandler.convert(1, 'gal'), 3.78541)
  })

  // 12
  test("L to gal", function() {
    assert.equal(convertHandler.convert(1, 'L'), 0.26417)
  })

  // 13
  test("mi to km", function() {
    assert.equal(convertHandler.convert(1, 'mi'), 1.60934)
  })

  // 14
  test("km to mi", function() {
    assert.equal(convertHandler.convert(1, 'km'), 0.62137)
  })

  // 15
  test("lbs to kg", function() {
    assert.equal(convertHandler.convert(1, 'lbs'), 0.45359)
  })

  // 16
  test("kg to lbs", function() {
    assert.equal(convertHandler.convert(1, 'kg'), 2.20462)
  })

});