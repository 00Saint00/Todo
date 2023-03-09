import React from "react";
import logo from "../assets/bluecheck.png";

const Header = () => {
  return (
    <div className="todo-header">
      <img src={logo} alt="todo-logo" />
      <h1>My Todo</h1>
    </div>
  );
};

export default Header;
