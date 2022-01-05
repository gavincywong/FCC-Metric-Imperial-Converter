'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.route("/api/convert")
    .get(function(req, res) {
      let userString = req.query.input
      let initNum = convertHandler.getNum(userString)
      let initUnit = convertHandler.getUnit(userString)
      let returnUnit = convertHandler.getReturnUnit(initUnit)
      let returnNum = convertHandler.convert(initNum, initUnit)
      let printString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      
      if (returnNum === 'invalid unit' && (initNum === null || initNum === 'invalid number')) {
        res.send("invalid number and unit")
      } else if (returnNum === 'invalid unit' || returnUnit === 'invalid unit') {
        res.send("invalid unit")
      } else if (initNum === null || initNum === 'invalid number') {
        res.send("invalid number")
      }
      else {
        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: printString
        })
      }


    })
};
