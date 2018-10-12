const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/order');
const User = require('./models/user');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var uri = 'mongodb+srv://jfarris587:sniffles99@cluster0-kfjav.mongodb.net/bizboard';
mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.post('/api/signup/', function(req, res){
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  password = crypto.createHash('md5').update(password).digest('hex');

  User.find({username: username}, function(err,docs){
     if (err){
       res.status(500).send();
       console.log('STATUS: 500');
     }
     if(docs.length > 0){
       res.status(401).send();
       console.log('STATUS: 401');
     }
     else{
       User.create({username: username, email:email, password: password}, function(err,docs){
          if (err){
            res.status(500).send();
            console.log('STATUS: 500');
          }
          res.status(200).send();
          console.log('STATUS: 200');
        });
     }
   });
});

app.post('/api/login/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  password = crypto.createHash('md5').update(password).digest('hex');

  User.find({username: username, password: password},
    function(err,docs){
     if (err){
       res.status(500).send();
       console.log('STATUS: 500');
     }
     if(docs.length > 0){
       res.status(200).send(docs);
       console.log('STATUS: 200');
     }
     else{
       res.status(401).send();
       console.log('STATUS: 401');
     }
   });
});

app.post('/api/orders', function(req, res){
  var username = req.body.username;

  User.findOne({username: username},{orders: 1, _id:0},
    function(err,docs){
     if (err){
       console.log('ORDERS: 500');
       res.status(500).send();
     }
     else {
       console.log('ORDERS: 200');
       res.status(200).send(docs);
     }
   });
});

app.post('/api/add-order/', function(req, res){
  const username = req.body.username;
  const name = req.body.name;
  const description = req.body.description;
  const od = req.body.od;
  const dd = req.body.dd;
  const total = req.body.total;
  const status = 0;


  User.update({username: username},
    {
      $push:{
        orders: {
          _id: mongoose.Types.ObjectId(),
          name: name,
          description: description,
          od: od,
          dd: dd,
          total: total,
          status: status
        }
      }
    },
    function(err,docs){
      if (err){
        console.log('ADD ORDER: 500');
        res.status(500).send();
      }
      else{
        console.log('ADD ORDER: 200');
        res.status(200).send(docs);
      }
    }
  );

});

app.post('/api/delete-order/', function(req, res){
  const username = req.body.username;
  const id = req.body.id;
  User.update({username: username},
    {
      $pull:{
        orders: {
          _id: mongoose.Types.ObjectId(id)
        }
      }
    },
    function(err,docs){
      if (err){
        console.log('ADD ORDER: 500');
        res.status(500).send();
      }
      else{
        console.log('ADD ORDER: 200');
        res.status(200).send(docs);
      }
    }
  );
});

app.post('/api/change-status/', function(req, res){
  const username = req.body.username;
  const orderID = req.body.id;
  const newStatus = req.body.status;

  User.update(
    {
      username: username,
      'orders._id': mongoose.Types.ObjectId(orderID)
    },
    {
      $set:{
        'orders.$.status': newStatus
      }
    },
    function(err,docs){
      if (err){
        console.log('CHANGE STATUS: 500');
        res.status(500).send();
      }
      else{
        console.log('CHANGE STATUS: 200');
        res.status(200).send(docs);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

Order.update({})
