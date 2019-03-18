/*
* File for manage the console utily
*
*
*/

// Dependencies
var readline = require('readline');
var util = require('util');
var debug = util.debuglog('cli');


// Instanciate
var utilConsole = {};


utilConsole.initConsole = function(procesInput){

 // Start the interface
  utilConsole._interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
  });

  // Create the intial prompt
  utilConsole._interface.prompt();

  // handler each line of input separrately
  utilConsole._interface.on('line',function(str){
      procesInput(str);

      // re-initialize the prompt afterwards
      utilConsole._interface.prompt();
  });

  // If the user stops the CLI, kill the associated process
  utilConsole._interface.on('close',function(){
    process.exit(0);
  });
};

module.exports = utilConsole;
