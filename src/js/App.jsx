import React, { Component } from 'react';
import Settings from '../settings.js';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      details: [11, 5, 63, 102],
      orders: Settings,
      add:{
        mode: false
      },
      delete:{
        mode: false,
        selected:[]
      }
    };
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
      status: "open"
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
    var tempState = this.state;
    tempState.orders.forEach(function(order, j){

      if(order.id === i){
        tempState.orders.splice(j, 1);
      }
    });

    this.setState(tempState);
  }

  changeStatus = (i, status) =>{
    var tempState = this.state;
    tempState.orders.forEach(function(order, j){

      if(order.id === i){
        tempState.orders[j].status = status;
      }
    });

    this.setState(tempState);
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <Header
            details={this.state.details}
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
          />
        </React.Fragment>
      );
    }

  }
}

export default App;
