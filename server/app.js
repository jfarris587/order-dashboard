var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/api/courses', function(req, res){
  res.send([1,2,6]);
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
