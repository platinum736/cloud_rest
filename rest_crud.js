var express=require('express');
var sys=require('sys');
var app=express();
//var bodyParser=require('body-parser');
var arr=["Rishabh"];
// GET method route
 app.get('/', function (req, res) {
   var ans="Request processed Array Value:"+arr;
   res.send(ans);
//   sys.puts(sys.inspect(req.url))   
   console.log("got request from ip:"+req.ip);
   })

// POST method route
   app.put('/:id1/:id2', function (req, res) {
     var index=arr.indexOf(req.params.id1);
     arr.splice(index,1,req.params.id2);
     res.send('PUT request to the homepage:Droped '+req.params.id1+" and added "+req.params.id2);
     })
app.post('/:id',function(req,res){
   var id=req.params.id;
   arr.push(id);
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

