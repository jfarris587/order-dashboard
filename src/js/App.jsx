import React, { Component } from 'react';
import Settings from '../settings.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <div className="container">
          <div className="header">
            <div className="card card-first">

            </div>

            <div className="card card-second">

            </div>

            <div className="card card-third">

            </div>
          </div>

          <div className="board">

          </div>
        </div>
      );
    }

  }
}

export default App;
