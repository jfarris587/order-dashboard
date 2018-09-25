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
      entryExpanded: false
    };
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
    tempState.entryExpanded = !tempState.entryExpanded;
    this.setState(tempState);
  }

  expandEntry = () =>{
    var tempState = this.state;
    tempState.entryExpanded = !tempState.entryExpanded;
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
            expandEntry={this.expandEntry}
          />
          <Board
            orders={this.state.orders}
            addOrder={this.addOrder}
            entryExpanded = {this.state.entryExpanded}
            expandEntry={this.expandEntry}
          />
        </React.Fragment>
      );
    }

  }
}

export default App;
