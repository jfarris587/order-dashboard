import React, { Component } from 'react';
import Settings from '../settings.js';
import Detail from './components/Detail.jsx'
import Order from './components/Order.jsx'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  testAdd = (a,b) => {
    return (a+b);
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <div className="header container">
            <div className="title row">
                <h1>Loreum Ipsum</h1>
                <p>loreum ipsum valuet et consequitor tullio, sed quamquam ritue.</p>
            </div>
            <div className="details row">
              <Detail id={1}/>
              <Detail id={2}/>
              <Detail id={3}/>
              <Detail id={4}/>
            </div>


          </div>

          <div className="panel container">
            <div className="controls">
              <p>loreum ipsum valuet et consequitor tullio, sed quamquam ritue.</p>
              <button className="button">Delete Order</button>
              <button className="button button--blue">Add Order</button>

            </div>
          </div>

          <div className="board container">
            <div className="orders">
              <Order />
              <Order />
              <Order />
              <Order />

            </div>
          </div>
        </React.Fragment>
      );
    }

  }
}

export default App;
