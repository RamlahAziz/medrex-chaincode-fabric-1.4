'use strict';
//const testContract = require('./logic');
//module.exports.contracts = [ testContract ];

//
const medrexContract = require('./lib/medrexContract.js');
// const MyQueryContract = require('./lib/query.js');

module.exports.medrexContract = medrexContract;
// module.exports.MyQueryContract = MyQueryContract;

module.exports.contracts = [ medrexContract];
