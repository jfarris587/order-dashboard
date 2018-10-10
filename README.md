# BizBoard Application

Bizboard is a full stack ReactJS web application catered to small businesses. From bakeries to tailors and barbers, local businesses need a way of tracking orders and their clients. This web application lets a business add orders to their dashboard which has all the information they need for all their transactions.

![](https://i.imgur.com/vEkye5s.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. To go to the official project release, visit https://jfarris587.github.io/order-dashboard/

### Installing Locally

Use **npm install** to install packages, and then run with **npm run** to create the build package for deployment use **npm build**


## Motivation

The high end Microsoft and cloud technologies are always developed for larger businesses and enterprises. In addition, they cost money and are hard to use. This free open source project allows businesses to not have to get caught up in which SAAS to purchase. From the iPad at the store to a phone while on the go, employers stay on top of production.

## Development

### Built With

- React
- Redux
- SASS
- NodeJS
- Express
- Mongoose
- MongoDB

### React/Redux

For the front end, ReactJS is used to achieve component-driven code in the UI. Below is a code snippet that shows how orders are populated from props and are then rendered out onto the screen after React's Lifecycle Methods are run.

```
{this.state.orders.map((orderSection, i) => (
  <div key={i} className="orders" style={{transform: "translateX("+translated+"%)"}}>
    {orderSection.map((order, index) => (
      <Order
        key={order._id}
        id={order._id}
        index={index}
        data={order}
      />
    ))}
  </div>
))}
```

### NodeJS/Express

In order for the front end to communicate with a database, NodeJS is used as a backend language. A RESTAPI is made using NodeJS which listens to the server's ports and sends responses to the GET and/or POST requests. Express is used as a NodeJS framework to help with the backend. Below is a code snippet showcasing some of the backend logic for the API requests.

```
app.post('/api/login/', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  password = crypto.createHash('md5').update(password).digest('hex');


  User.find({username: username, password: password}, function(err,docs){
     if (err){
       console.log('error occured in the database');
     }
     res.send(docs)
     console.log('logging in');
   });
});
```

### Mongoose/MongoDB

The database that NodeJS connects to is a MongoDB NoSQL database. A non-relational database is used since data fields may be added into the future depending on a businesses use case for the dashboard. In addition, MongoBD using BSON translates well to JSON when working with web applications. Below is a code snippet of an example order entry into the database.

```
{
  "_id":
    {
      "$oid":"5bb770b4b3ec26d79048e561"
    },
  "name":"Rashad Casey",
  "description":"odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit.",
  "od":"08-04-18",
  "dd":"22-10-17",
  "total":"175.52",
  "status":
    {
      "$numberInt":"2"
    }
  }
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
