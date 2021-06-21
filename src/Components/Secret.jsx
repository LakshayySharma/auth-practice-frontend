import React from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
const Secret = () => {
  return (
    <div>
      <h1>This is a secret</h1>
      <Logout />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Secret;
