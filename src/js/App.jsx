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
      orders: Settings
    };
  }

  testAdd = (a,b) => {
    return (a+b);
  }

  expandOrder = (order) => {
    var element = document.getElementsByClassName('information')[order];
    element.classList.toggle('expanded');
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
          <Panel />
          <Board
            orders={this.state.orders}
            expandOrder={this.expandOrder}
          />
        </React.Fragment>
      );
    }

  }
}

export default App;
