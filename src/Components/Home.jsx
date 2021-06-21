import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import User from "./User";
import { connect } from "react-redux";
import Logout from "./Logout";
import Secret from "./Secret";
const Home = ({ auth }) => {
  const [data, setData] = useState([]);
  const handleClick = () => {
    getUsers();
  };

  const getUsers = async () => {
    const user = await axios.get("http://localhost:5000/api/user");
    //console.log(user);
    setData(user.data.users);
    //console.log(data);
  };
  return (
    <>
      <h1>Home</h1>
      {auth.isAuthenticated ? (
        <>
          <Logout /> <Secret />
        </>
      ) : (
        <>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <button onClick={handleClick}>Get all users</button>
          <User users={data} />
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Home);
