/**
*
* File for manage event response for menu
*
*/


//Dependencies
var menuService = require('../service/menuService');
//Instanciate
var menuResponse = {};

menuResponse.getMenu = function(){
  var menu = menuService.getMenuCli();
  console.log(menu);
  console.log('');
};
module.exports = menuResponse;
