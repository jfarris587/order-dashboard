const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/order');

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
     console.log('getting orders');
     res.send(docs);
   });
});

app.post('/api/add-order/', function(req, res){
  const name = req.body.name;
  const description = req.body.description;
  const od = req.body.od;
  const dd = req.body.dd;
  const total = req.body.total;
  const status = 0;

  Order.create({name: name, description: description, od: od, dd: dd, total: total, status: status},function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     res.send(docs.id);
     console.log('order added to database');
   });

});

app.post('/api/delete-order/', function(req, res){
  const id = req.body.id;

  Order.deleteOne({_id: id}, function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     console.log('order delted from database');
     res.send(docs);
   });
});

app.post('/api/change-status/', function(req, res){
  const id = req.body.id;
  const newStatus = req.body.status;

  console.log(id, newStatus);

  //db.orders.findOneAndUpdate({id: '5bbb7cdcc948ec2ce4c58005'})

  Order.findOneAndUpdate({_id: id}, {$set: {status: newStatus}}, function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     res.send(docs)
     console.log('order status changed');
   });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

Order.update({})
