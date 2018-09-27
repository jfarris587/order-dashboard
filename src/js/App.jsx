import React, { Component } from 'react';
import Settings from '../settings.js';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from './Login.jsx'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      details: [0, 0, 0, 0],
      login: true,
      store: Settings,
      orders: Settings,
      show: 3,
      page: 0,
      add:{
        mode: false
      },
      delete:{
        mode: false,
        selected:[]
      }
    };

    console.log(this.state.orders);

  }

  componentWillMount(){
    var tempState = this.state;
    var status;

    tempState.store.forEach(function(order){
      status = order.status;
      tempState.details[3] += 1;

      if(status === 0){
        tempState.details[0] += 1;
      }
      else if(status === 1){
        tempState.details[1] += 1;
      }
      else{
        tempState.details[2] += 1;
      }
    });
    this.setState(tempState);
  }

  login = () =>{
    var tempState = this.state;
    tempState.login = true;
    this.setState(tempState);
  }

  logout = () =>{
    if (window.confirm("Are you sure you want to logout?")) {
      var tempState = this.state;
      tempState.login = false;
      this.setState(tempState);
    }
  }

  showOrders = (status) =>{
    var tempState = this.state;
    tempState.orders=[];

    if(status === 3){
      tempState.orders = tempState.store;
    }
    else{
      for(let i = tempState.store.length - 1; i >= 0 ; i--){
        if(tempState.store[i].status === status){
            tempState.orders.push(tempState.store[i]);
        }
      }
    }

    tempState.show = status;
    this.setState(tempState);
  }

  addingOrders = () =>{
    var tempState = this.state;
    tempState.add.mode = !tempState.add.mode;
    tempState.delete.mode = false;
    this.setState(tempState);
  }

  addOrder = () =>{
    var tempState = this.state;

    var form = document.getElementById("entry").elements;
    var name = form[0].value;
    var od = form[1].value;
    var dd = form[2].value;
    var description = form[3].value;
    var total = form[4].value;
    var id = tempState.orders.length + 1;

    if(name === "" || od === "" || dd === "" || description === ""|| total === ""){
      return;
    }

    var orderObj = {
      id: id,
      name: name,
      description: description,
      od: od,
      dd: dd,
      total: total,
      status: 0
    }

    tempState.orders.push(orderObj);
    tempState.add.mode = !tempState.add.mode;
    this.setState(tempState);
  }

  deletingOrders = () =>{
    var tempState = this.state;
    tempState.delete.mode = !tempState.delete.mode;
    tempState.add.mode = false;

    this.setState(tempState);
  }

  deleteOrder = (i) =>{
    if (window.confirm("Are you sure you want to delete this order?")) {
      var tempState = this.state;
      tempState.orders.forEach(function(order, index){

        if(order.id === i){
          tempState.orders.splice(index, 1);
        }
      });

      this.setState(tempState);
    }
  }

  changeStatus = (i, status) =>{
    var tempState = this.state;
    tempState.orders[tempState.orders.length - i - 1].status = status;
    this.setState(tempState);
  }

  render() {
    if(this.state.login === false){
      return (
        <Login
          login={this.login}
        />
      );
    }
    else{
      return (
        <React.Fragment>
          <Header
            details={this.state.details}
            showOrders={this.showOrders}
            logout={this.logout}
            show={this.state.show}
          />

          <Panel
            delete={this.state.delete}
            add={this.state.add}
            deletingOrders={this.deletingOrders}
            addingOrders={this.addingOrders}
          />

          <Board
            orders={this.state.orders}
            addOrder={this.addOrder}
            add={this.state.add}
            addingOrders={this.addingOrders}
            deleteOrder={this.deleteOrder}
            changeStatus={this.changeStatus}
            page={this.state.page}
          />
        </React.Fragment>
      );
    }
  }
}

export default App;
