import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function Dishesh({ item }) {
  // console.log("item", item);
  const info = item.card.info;

  const dispatch = useDispatch();
  const func = () => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div
        key={info.id}
        className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 border-b-2 border-gray-200 pb-4 last:border-0"
      >
        <div className="flex flex-col flex-grow text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {info.name}
          </h2>
          <h3 className="text-lg font-bold text-gray-700 my-1">
            ₹
            {info.price / 100 ||
              info.defaultPrice / 100 ||
              "Price Not Available"}
          </h3>
          <p className="text-sm text-gray-500 mt-2">{info.description}</p>
        </div>
        <div className="relative flex-shrink-0 w-48 h-48 sm:w-36 sm:h-36 rounded-lg overflow-hidden">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              item.card?.info.imageId
            }
            alt={info.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => func()}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white font-semibold   px-1 rounded-md shadow-lg hover:bg-green-700 transition-colors duration-300"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
