import React from "react";
import "./header.scss";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <p className="logo-app">MERN-Blog</p>
      <ul className="menu-item">
        <li onClick={() => history.push("/login")}>Logout</li>
      </ul>
    </div>
  );
};

export default Header;
