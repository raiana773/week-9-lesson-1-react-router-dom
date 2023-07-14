import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/user">User </NavLink>
    </div>
  );
};

export default Navbar;
