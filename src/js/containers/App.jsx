import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from '../components/Login.jsx'
import { setOrders } from '../../redux/actions/orders';
import API from '../../api/API';

export class App extends Component {
  componentWillMount() {
    var api = new API();
    api.FETCH('/api/orders')
    .then(res =>
      this.props.dispatch(setOrders(res))
    )
    .catch(err => console.log(err));
  }


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
