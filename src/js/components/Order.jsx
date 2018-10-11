import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOrder } from '../../redux/actions/orders';
import Status from './Status.jsx';

export class Order extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false
    };
  }

  expandOrder = () => {
    var tempState = this.state;
    tempState.expanded = !tempState.expanded;
    this.setState(tempState);
  }

  render() {
    var expanded = "";
    if(this.state.expanded){
      expanded = " expanded";
    }

    const statusArray = ["open", "pending", "closed"];
    var StatusList = [];

    for(let i = 0; i < 3; i++){
      StatusList.push(<Status key={i} status={i} id={this.props.id} selected={this.props.data.status} changeStatus={this.props.changeStatus}/>);
    }

    return (
      <div className="order-wrapper">
        <div className="order"  onClick={() => this.expandOrder(this.props.data.index)}>
          <div className="order__detail toggler"><i className="fas fa-bars"></i></div>

          <div className="order__detail name"><p>{this.props.data.name}</p></div>

          <div className="order__detail description"><p>{this.props.data.description}</p></div>

          <div className="order__detail od"><p>{this.props.data.od}</p></div>

          <div className="order__detail dd"><p>{this.props.data.dd}</p></div>

          <div className="order__detail total"><p>$ {this.props.data.total}</p></div>

          <div className={"order__detail symbol "+statusArray[this.props.data.status]}><p>{statusArray[this.props.data.status]}</p></div>
        </div>

        {this.props.data.name &&
          <div className={"information" + expanded}>
            <div className="information__info">
              <p>Client: <span>{this.props.data.name}</span></p>
              <p>Description: <span> {this.props.data.description}</span></p>
              <p>Order Date: <span> {this.props.data.od}</span></p>
              <p>Deliver Date: <span> {this.props.data.dd}</span></p>
              <p>Total: <span>${this.props.data.total}</span></p>
              <p>
                Status:
                {StatusList}
              </p>
              <p className="delete" onClick={() => this.props.dispatch(deleteOrder(this.props.id, this.props.login.username))}>delete</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    login: state.login
  }
}

export default connect(
  mapStateToProps
)(Order);
