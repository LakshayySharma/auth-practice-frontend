import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/auth";
const Register = (props) => {
  const [data, setData] = useState({
    name: "",
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
    console.log(data);
    props.register(data);
  };
  if (props.auth.isAuthenticated) {
    return <Redirect to="/secret" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name <input type="text" name="name" onChange={handleChange} />
        Email <input type="text" name="email" onChange={handleChange} />
        Password
        <input type="password" name="password" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { register })(Register);
