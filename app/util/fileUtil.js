/**
* File for file util functions
*
**/
// Dependencies
var fs = require('fs');
var path = require('path');
var objectUtil = require('./objectUtil');
// Declare
var utilFile = {};

// base directory of the data folder
utilFile.baseDir = path.join(__dirname, '../data/');

// Write data to a File
utilFile.create = function(dir,file,data){
  var stringData  = JSON.stringify(data);
  try{
      var fileDescriptor = fs.openSync(utilFile.baseDir+dir+'/'+file+'.json','wx');
      fs.writeFileSync(fileDescriptor,stringData);
  }catch(e){
    throw Error(e);
  }finally{
    if(fileDescriptor){
      fs.closeSync(fileDescriptor);
    }
  }
};


utilFile.read = function(dir,file){
  try{
      var data = fs.readFileSync(utilFile.baseDir+dir+'/'+file+'.json','utf-8');
      return objectUtil.perseJsonToObject(data);
  }catch(e){
    console.log(e);
    return {};
  }
};


utilFile.update = function(dir,file,data){
  var stringData  = JSON.stringify(data);var stringData  = JSON.stringify(data);
  try{
    var fileDescriptor = fs.openSync(utilFile.baseDir+dir+'/'+file+'.json','r+');
    fs.ftruncateSync(fileDescriptor);
    fs.writeFileSync(fileDescriptor,stringData);
  }catch(e){
    throw Error(e);
  }finally{
    fs.closeSync(fileDescriptor);
  }
};

utilFile.delete = function(dir,file){
  try{
    fs.unlinkSync(utilFile.baseDir+dir+'/'+file+'.json');
  }catch(e){
    throw Error(e);
  }
};

utilFile.list = function(dir){
  try{
    var list = [];
    var archivo = fs.readdirSync(utilFile.baseDir+dir+'/');
    for(var i=0;i<archivo.length;i++){
      list.push(archivo[i].replace('.json',''));
    }
    return list;
  }catch(e){
    throw Error(e);
  }
};

utilFile.stat = function(dir,file){
  try{
    var statFile = fs.statSync(utilFile.baseDir+dir+'/'+file+'.json');
    return statFile;
  }catch(e){
    throw Error(e);
  }
}

// export module
module.exports = utilFile;
