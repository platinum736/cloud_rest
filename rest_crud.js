var express=require('express');
var sys=require('sys');
var os=require("os");
var bodyparser=require("body-parser");
var app=express();
//var bodyParser=require('body-parser');
var arr=["Rishabh"];


app.use(bodyparser);
// GET method route
 app.get('/', function (req, res) {
   var ans="Request processed Array Value:"+arr;
   res.send(ans+" ip: "+os.networkInterfaces()["eth0"][0].address);
//   sys.puts(sys.inspect(req.url))   
   console.log("got request from ip:"+req.ip);
   console.log(os.networkInterfaces()["eth0"][0].address);
  });

// POST method route
   app.put('/:id1/:id2', function (req, res) {
     var index=arr.indexOf(req.params.id1);
     arr.splice(index,1,req.params.id2);
     res.send('PUT request to the homepage:Droped '+req.params.id1+" and added "+req.params.id2);
     })
app.post('/',function(req,res){
   var id=req.body;
   console.log(id);
 //  arr.push(req.body);
   res.send(id+' Successfully inserted'); 
});

app.delete('/:id3',function(req,res){
   var index=arr.indexOf(req.params.id3);
   arr.splice(index,1);
   res.send("Deleted the element "+req.params.id3+"from array");
});

app.listen(1337,function(){
    console.log("Started server on port 1337");
});

