/**
*
* File for manage user Event Response
*
*/

// Dependencies
var userService = require('../service/userService');

// Instantite
var userResponse = {};

userResponse.getLogInUser = function(){
  var response = userService.getListLogInUser();
  console.log(response);
  console.log('');
}

userResponse.getInfoUser = function(data){
  var arr = data.split("--");
  var checkId = typeof(arr[1]) == 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false;
  if(checkId){
    var user = userService.getuserCli(checkId);
     delete user.hashedPassword;
     console.log(user);
  }
  console.log('');
}
module.exports = userResponse;
