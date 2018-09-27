import React, { Component } from 'react';
import Status from './Status.jsx';

class Order extends Component {
  constructor(props){
    super(props);

    this.state = {
      index: this.props.index,
      id: this.props.id,
      expanded: false,
      toggler: true,
      name: this.props.data.name,
      description: this.props.data.description,
      od: this.props.data.od,
      dd: this.props.data.od,
      total: this.props.data.total,
      status: this.props.data.status,
    };
  }

  expandOrder = () => {
    var tempState = this.state;
    tempState.expanded = !tempState.expanded;
    this.setState(tempState);
  }

  componentWillReceiveProps(nextProps) {
    var tempState = this.state;
    if(tempState.index !== nextProps.index){
      tempState.index = nextProps.index;
      this.setState(tempState);
    }
    if(tempState.status !== nextProps.status){
      tempState.status = nextProps.data.status;
      this.setState(tempState);
    }
  }

  render() {
    var expanded = "";
    if(this.state.expanded){
      expanded = " expanded";
    }

    const statusArray = ["open", "pending", "closed"];
    var StatusList = [];

    for(let i = 0; i < 3; i++){
      StatusList.push(<Status key={i} status={i} index={this.state.index} selected={this.state.status} changeStatus={this.props.changeStatus}/>);
    }

    return (
      <div className="order-wrapper">
        <div className="order"  onClick={() => this.expandOrder(this.state.index)}>
          <div className="order__detail toggle"><i className="fas fa-bars"></i></div>

          <div className="order__detail name"><p>{this.state.name}</p></div>

          <div className="order__detail description"><p>{this.state.description}</p></div>

          <div className="order__detail od"><p>{this.state.od}</p></div>

          <div className="order__detail dd"><p>{this.state.dd}</p></div>

          <div className="order__detail total"><p>$ {this.state.total}</p></div>

          <div className={"order__detail symbol "+statusArray[this.state.status]}><p>{statusArray[this.state.status]}</p></div>
        </div>

        {this.state.name &&
          <div className={"information" + expanded}>
            <div className="information__info">
              <p>Client: <span>{this.state.name}</span></p>
              <p>Description: <span> {this.state.description}</span></p>
              <p>Order Date: <span> {this.state.od}</span></p>
              <p>Deliver Date: <span> {this.state.dd}</span></p>
              <p>Total: <span>${this.state.total}</span></p>
              <p>
                Status:
                {StatusList}
              </p>
              <p className="delete" onClick={() => this.props.deleteOrder(this.state.id)}>delete</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Order;
