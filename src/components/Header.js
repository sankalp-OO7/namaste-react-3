import React from "react";
import { logoUrl } from "../utils/constant";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img className="img" src={logoUrl} alt="logo" />
    </div>
    <div className="navitems">
      <ul className="ul">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
