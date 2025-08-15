import React from "react";
import { logoUrl } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [login, setlogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={logoUrl} alt="logo" />
      </div>
      <div className="navitems">
        <ul className="ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart </li>
          <button
            onClick={() => {
              login === "Login" ? setlogin("Logout") : setlogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
