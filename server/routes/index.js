var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
  response.send('<h1>HELLO WORLDS</h1>');
});

module.exports = router;
