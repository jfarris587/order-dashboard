import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from '../components/Login.jsx'

export class App extends Component {
  componentDidMount() {
    this.callApi()
    .then(res =>
       console.log(res)
    )
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/courses');
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

const mapDispatchToProps = (dispatch) => {
  return {
    destroyTodo: () =>
    dispatch({
      type: 'DESTROY_TODO'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
