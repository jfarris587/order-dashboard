import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx'
import Panel from './Panel.jsx'
import Board from './Board.jsx'
import Login from '../components/Login.jsx'

export const App = (props) =>{
  if(props.login === false){
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
