/**
*
* File for manage the order Event Response
*
*/

// Dependencies
var orderService = require('../service/orderService');
var util = require('util');

// Instantite
var orderResponse = {};

orderResponse.getOrder = function(){
   var response = orderService.getListOrders();
   console.log(util.inspect(response, false, null, true /* enable colors */));
   console.log('');
};

orderResponse.getMoreOrderInfo = function(data){
  var arr = data.split("--");
  var id = typeof(arr[1]) == 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false;
  if(id){
    var user =   orderService.getMoreOrderInfo(id);
     console.log(user);
  }
  console.log('');
};

module.exports = orderResponse;
