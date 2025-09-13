import React, { useContext } from "react";
import { logoUrl } from "../utils/constant";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setlogin] = useState("Login");
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items.length);
  console.log(useSelector((store) => store.cart.items));
  return (
    <div className=" flex justify-between flex-wrap px-33 py-5 bg-orange-300 shadow-lg border-b-2 border-b-emerald-400">
      <div className=" flex justify-center align-middle items-center">
        <img
          className="w-35  shadow-xl border-r-emerald-400"
          src={logoUrl}
          alt="logo"
        />
      </div>
      <div className="flex justify-center align-middle items-center flex-wrap  ">
        <ul className="flex justify-center align-middle items-center flex-wrap gap-10 font-semibold tracking-wide text-blue-500 text-2xl  italic">
          <li>
            <NavLink className="antialiased " to="grocery">
              Grocery
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart {cartItems}</NavLink>{" "}
          </li>
          <button
            className="p-4 bg-pink-200 text-teal-900 cursor-pointer hover:bg-purple-300"
            onClick={() => {
              login === "Login" ? setlogin("Logout") : setlogin("Login");
            }}
          >
            {login}
          </button>
          <li className="font-stretch-125%">{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
