/**
* File for controller the events
*
*/


// Dependencies
var events = require('events');
var params = require('../config/params');
var menuResponse = require('./menuEventResponse');
var userResponse = require('./userEventResponse');
var orderResponse = require('./orderEventResponse');

// Instanciate
class _events extends events{};
var e = new _events();
var eventController = {};

eventController.emitEvent = function(str){
  str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : false;
  if(str){
    var matchFound = false;
    var counter = 0;
    for(var i=0;i<params.cliInput.length;i++){
      var token = params.cliInput[i];
      if(str.toLowerCase().indexOf(token) > -1){
        matchFound = true;
        e.emit(token,str);
      }
    }

    if(!matchFound){
      console.log("Sorry,try again");
    }
  }
};


e.on('menu',function(){
  menuResponse.getMenu();
});
e.on('orders',function(){
  orderResponse.getOrder();
});
e.on('more order info',function(str){
  orderResponse.getMoreOrderInfo(str);
});
e.on('singup',function(){
  userResponse.getLogInUser();
});
e.on('more user info',function(str){
  userResponse.getInfoUser(str);
});
module.exports = eventController;
