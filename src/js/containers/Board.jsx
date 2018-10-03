import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order.jsx'
import Labels from '../components/Labels.jsx'
import Navigation from '../components/Navigation.jsx'


export class Board extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 0,
      totalPages: 0,
      orders: this.filterOrders(this.props.orders, 0)
    };
  }

  componentWillMount(){
    var tempState = this.state;
    tempState.totalPages = tempState.orders.length - 1;
    this.setState(tempState);
  }

  componentWillReceiveProps(nextProps) {
    var tempState = this.state;
    tempState.orders = this.filterOrders(nextProps.orders, nextProps.display.show);
    tempState.totalPages = tempState.orders.length - 1;

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
      return this.splitOrders(tempOrders.slice(), 8);
    }
    else{
      return this.splitOrders(orders.slice().reverse(), 8);
    }
  }

  splitOrders = (orders, size) => {
    var array = [];
    for(var i = 0; i < orders.length; i += size) {
      array.push(orders.slice(i, i+size));
    }
    return array;
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

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    display: state.display
  }
}

export default connect(
  mapStateToProps
)(Board);
