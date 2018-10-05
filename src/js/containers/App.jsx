import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from '../components/Login.jsx'
import { setOrders } from '../../redux/actions/orders';

export class App extends Component {
  componentWillMount() {
    this.callApi()
    .then(res =>
      this.props.dispatch(setOrders(res))
    )
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/orders');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    if(this.props.login === false){
      return (
        <Login />
      );
    }
    else{
      return (
        <React.Fragment>
          <Header />
          <Panel />
          <Board />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps
)(App);
