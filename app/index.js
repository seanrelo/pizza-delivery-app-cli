/**
*  Primary File for run the API
*
*/

// Dependencies

var server = require('./lib/server');
var cli = require('./lib/cli');


// Declare the app
var app = {};

// Init function
app.init = function(){

  // run init function of server lib
  server.init();

  // run init function of cli lib
  setTimeout(function(){
    cli.init();
  },50);

};


// execute de init funcion of index
app.init();

// export the app
module.exports = app;
