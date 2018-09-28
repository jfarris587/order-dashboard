import React, { Component } from 'react';
import Order from '../components/Order.jsx'
import Labels from '../components/Labels.jsx'
import Navigation from '../components/Navigation.jsx'


class Board extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 0,
      totalPages: 0,
      perPage: 8,
      show: 0,
      orders: []
    };
  }

  componentWillMount(){
    var tempState = this.state;
    var orders = this.splitOrders(this.props.orders.slice().reverse(), this.state.perPage);

    tempState = {
      page: 0,
      totalPages: orders.length - 1,
      perPage: this.state.perPage,
      show: this.props.show,
      orders: orders
    };

    this.setState(tempState);
  }

  componentWillReceiveProps(nextProps) {
    var tempState = this.state;
    var tempOrders = this.filterOrders(nextProps.orders, nextProps.show);
    tempState.orders = this.splitOrders(tempOrders.slice().reverse(), this.state.perPage);
    tempState.totalPages = tempState.orders.length - 1;
    tempState.show = nextProps.show;

    if(tempState.page > tempState.totalPages){
      tempState.page -= 1;
    }

    this.setState(tempState);
  }

  filterOrders = (orders, show) =>{
    var tempOrders = [];

    if(show !== 0){
      for(let i = orders.length - 1; i >= 0 ; i--){
        if(orders[i].status === show-1){
            tempOrders.push(orders[i]);
        }
      }
      return tempOrders;
    }
    else{
      return orders;
    }
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

  splitOrders = (orders, size) => {
    var array = [];
    for(var i = 0; i < orders.length; i += size) {
      array.push(orders.slice(i, i+size));
    }
    return array;
  }

  render(){
    var translated = this.state.page * (-100);

    return (

      <div className="board container">
        <Labels />

        <div className="orders-container">
          {this.state.orders.map((orderSection, i) => (
            <div key= {i} className="orders" style={{transform: "translateX("+translated+"%)"}}>
              {orderSection.map((order, index) => (
                <Order
                  key={order.id}
                  id={order.id}
                  index={index}
                  data={order}
                  deleteOrder={this.props.deleteOrder}
                  changeStatus={this.props.changeStatus}
                />
              ))}
            </div>
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
