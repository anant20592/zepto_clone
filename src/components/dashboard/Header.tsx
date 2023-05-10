import React from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to={"/"}>
        <img src={logo} width={"120px"} />
      </NavLink>
      <div className="header-login">
        <p>Login</p>
        <nav>My Cart</nav>
      </div>
    </div>
  );
};

export default Header;
