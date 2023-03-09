import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
