import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router";
const Login = ({ auth, login, ...props }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };
  if (auth.isAuthenticated) {
    return <Redirect to="/secret" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      Email <input type="text" name="email" onChange={handleChange} />
      Password <input type="password" name="password" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
