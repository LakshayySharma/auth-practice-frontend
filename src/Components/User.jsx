import React from "react";

const User = ({ users }) => {
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default User;
