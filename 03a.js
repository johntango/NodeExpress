var express = require('express');

var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('my lucky number is ' + num);
});

app.listen(3000);
console.log("Running on port 3000");
