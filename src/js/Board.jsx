import React, { Component } from 'react';
import Order from './components/Order.jsx'
import Labels from './components/Labels.jsx'
import Entry from './components/Entry.jsx'
import Navigation from './components/Navigation.jsx'


class Board extends Component {
  constructor(props){
    super(props);

    const perPage = 8;

    this.state = {
      page: 0,
      totalPages: Math.ceil(this.props.orders.length / perPage) - 1,
      perPage: perPage,
      orders: this.props.orders.slice().reverse()
    };
  }

  componentWillReceiveProps(nextProps) {
    var tempState = this.state;
    tempState.orders = this.props.orders.slice().reverse();
    tempState.totalPages = Math.ceil(nextProps.orders.length / this.state.perPage) - 1;
    if(tempState.page > tempState.totalPages){
      tempState.page -= 1;
    }
    this.setState(tempState);

  }

  nextPage = () => {
    if(this.state.page < this.state.totalPages){
      var tempState = this.state;
      tempState.page += 1;
      this.setState(tempState);
    }
  }

  prevPage = () => {
    if(this.state.page > 0){
      var tempState = this.state;
      tempState.page -= 1;
      this.setState(tempState);
    }
  }

  render(){
    var beginIndex = this.state.perPage * (this.state.page);
    var endIndex = this.state.perPage * (this.state.page+1);
    var tempArray = this.state.orders.slice(beginIndex, endIndex);

    return (
      <div className="board container">
        <div className="orders">

          <Labels />

          {tempArray.map((order, index) => (
            <Order
              key={order.id}
              id={order.id}
              index={index}
              data={tempArray[index]}
              deleteOrder={this.props.deleteOrder}
              changeStatus={this.props.changeStatus}
            />
          ))}
        </div>

        <Navigation
          page={this.state.page}
          totalPages={this.state.totalPages}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
        />
      </div>
    );
  }
}

export default Board;
