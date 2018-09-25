import React, { Component } from 'react';

class Order extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.id,
      expanded: false,
      toggler: true,
      name: this.props.data.name,
      description: this.props.data.description,
      od: this.props.data.od,
      dd: this.props.data.od,
      total: this.props.data.dd,
      status: this.props.data.status,
    };
  }

  expandOrder = () => {
    var tempState = this.state;
    tempState.expanded = !tempState.expanded;
    this.setState(tempState);
  }

  render() {
    console.log("RENDERED");
    var expanded = "";
    if(this.state.expanded){
      expanded = " expanded";
    }

    return (
      <React.Fragment>
        <div className="order"  onClick={() => this.expandOrder(this.state.id)}>
          <div className="order__detail toggle"><i className="fas fa-bars"></i></div>

          <div className="order__detail name"><p>{this.state.name}</p></div>

          <div className="order__detail description"><p>{this.state.description}</p></div>

          <div className="order__detail od"><p>{this.state.od}</p></div>

          <div className="order__detail dd"><p>{this.state.dd}</p></div>

          <div className="order__detail total"><p>{this.state.total}</p></div>

          <div className={"order__detail symbol "+this.state.status}><p>{this.state.status}</p></div>
        </div>

        {this.state.name &&
          <div className={"information" + expanded}>
            <div className="information__info">
              <p><span>Client: </span>{this.state.name}</p>
              <p><span>Description: </span> {this.state.description}</p>
              <p><span>Order Date: </span> {this.state.od}</p>
              <p><span>Deliver Date: </span> {this.state.dd}</p>
              <p><span>Total: </span>${this.state.total}</p>
              <p className={"symbol "+this.state.status}><span>Status: </span> {this.state.status}</p>
            </div>
          </div>
        }

      </React.Fragment>
    );
  }
}

export default Order;
