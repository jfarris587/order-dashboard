const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Order = require('./models/order');

const app = express();
const port = process.env.PORT || 9000;


var uri = 'mongodb+srv://jfarris587:sniffles99@cluster0-kfjav.mongodb.net/bizboard';
mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.get('/api/orders', function(req, res){
  Order.find({},function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     res.send(docs);
   });
});

app.post('/api/add-order/', function(req, res){
    console.log(req.body.name);

  /*
  const name = req.body.name;
  const description = req.body.description;
  const od = req.body.od;
  const dd = req.body.dd;
  const total = req.body.total;
  const status = req.body.status;
  Order.insertOne({},function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     console.log(name, description, od, dd, total, status);
   });
   */
});

app.post('/api/delete-order/', function(req, res){
  const id = req.body.id;

  Order.findByIdAndRemove(id, function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     console.log(id);
   });
});

app.post('/api/change-status/', function(req, res){
  const id = req.body.id;
  const newStatus = req.body.status;

  Order.findByIdAndUpdate(id, {$set: {status: newStatus}}, function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     console.log(newStatus);
   });
});

app.post('/api/test', function(req, res){
  const id = req.body.a;

  console.log(id);

});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

Order.update({})
