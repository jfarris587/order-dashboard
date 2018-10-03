import React from "react";
import { connect } from 'react-redux';
import { loginApp } from '../../redux/actions/app';
import Detail from '../components/Detail.jsx'

export const Header = (props) =>{
  const details = [0,0,0,0];

  props.orders.forEach((order) => {
    details[order.status + 1] += 1;
    details[0] += 1;
  });

  return (
    <div className="header container">
      <div className="title row">
        <div className="left">
          <h1>Dashboard</h1>
          <p>Dashboard for tracking orders from clients...</p>
        </div>

        <div className="right">
          <button className="button button--blue" onClick={() => props.dispatch(loginApp())}>Log Out</button>
        </div>

      </div>
      <div className="details row">
        {details.map((detail, i) => (
          <Detail
            key={i}
            id={i}
            data={details[i]}
          />
        ))}

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(
  mapStateToProps
)(Header);
