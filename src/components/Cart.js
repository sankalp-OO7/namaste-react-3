import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dishesh from "./Dishesh";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className=" flex content-evenly justify-evenly m-2 p-2 bg-amber-100 border border-amber-400 text-center">
        <h1>Cart</h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-pink-300 p-1.5 rounded-lg cursor-pointer hover:bg-pink-800,
        "
        >
          Clear Cart
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        {cartItems.map((item) => (
          <Dishesh key={item.card.info.id} item={item} />
        ))}
      </div>
    </>
  );
}
