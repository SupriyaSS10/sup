var express = require('express');
var app = express();
var path = require("path");
var fs=require("fs");


app.use(express.static(path.join(__dirname, "public")));

app.get('/',function(req, res)  {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/schedule', function(req, res){
    res.sendFile(path.join(__dirname + '/public/schedule.html'));
});

app.listen(8000,()=>{
    console.log("server is listening on 8000");
});

// app.listen(9000);
// console.log("ll");