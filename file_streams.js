var fs=require('fs');

var ReadStream=fs.createReadStream('package.json',{flags:'r',encoding:null,fd:null,mode:0666,autoClose:true});
var WriteStream=fs.createWriteStream('package_copy.json');

ReadStream.pipe(WriteStream);

