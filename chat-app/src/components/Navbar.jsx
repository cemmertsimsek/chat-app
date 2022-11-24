import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/9393518/pexels-photo-9393518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="userimg"
        />
        <span>Alice</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
