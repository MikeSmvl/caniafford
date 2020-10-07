const functions = require('firebase-functions');
const salary = require('./salary/salary');

exports.netIncome = salary.netIncome;
