/*
* File for manage CLI task
*
*/

// Dependencies
var utilConsole = require('../util/utilConsole');
var controllerCli = require('../controllerCli/eventController');

// Instanciate
var cli = {};

cli.init = function(){
  console.log('\x1b[34m%s\x1b[0m','The CLI is running');

  utilConsole.initConsole(controllerCli.emitEvent);
};

module.exports = cli;
