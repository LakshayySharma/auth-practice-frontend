import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
const Logout = (props) => {
  return <button onClick={props.logout}>Logout</button>;
};

export default connect(null, { logout })(Logout);
