var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var query = JSON.stringify(req.query);
    res.send(query);
});

app.listen(Number(process.argv[2]));