import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./components/Loader";
import useRestroMenu from "./utils/useRestroMenu";
import Dishesh from "./components/Dishesh.js";

export default function Restro() {
  const { resid } = useParams();
  const restroData = useRestroMenu(resid);
  console.log("restrodata", restroData);
  const name = restroData?.data?.cards[0]?.card?.card?.text;
  const realdata =
    restroData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
  const data = realdata.filter((e) => {
    const type = e.card.card["@type"];
    return (
      type.includes(
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ||
      type.includes(
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      )
    );
  });

  console.log("data", data);
  console.log(name, realdata);
  return restroData.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center text-gray-800 my-8">
        {name || "Restro Name"}
      </h1>
      <div className="max-w-4xl mx-auto">
        {data.map((category) => {
          return (
            <div
              key={category.card.card.categoryId}
              className="mb-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-gray-200"
            >
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 border-b border-gray-300 pb-4">
                {category.card.card.title}
              </div>
              <div className="space-y-6">
                {category.card.card.itemCards?.map((item) => {
                  const info = item.card.info;
                  return <Dishesh item={item} />;
                  // return (
                  //   <div
                  //     key={info.id}
                  //     className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 border-b-2 border-gray-200 pb-4 last:border-0"
                  //   >
                  //     <div className="flex flex-col flex-grow text-center sm:text-left">
                  //       <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  //         {info.name}
                  //       </h2>
                  //       <h3 className="text-lg font-bold text-gray-700 my-1">
                  //         ₹
                  //         {info.price / 100 ||
                  //           info.defaultPrice / 100 ||
                  //           "Price Not Available"}
                  //       </h3>
                  //       <p className="text-sm text-gray-500 mt-2">
                  //         {info.description}
                  //       </p>
                  //     </div>
                  //     <div className="relative flex-shrink-0 w-48 h-48 sm:w-36 sm:h-36 rounded-lg overflow-hidden">
                  //       <img
                  //         src={
                  //           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  //           item.card?.info.imageId
                  //         }
                  //         alt={info.name}
                  //         className="w-full h-full object-cover"
                  //       />
                  //       <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white font-semibold   px-1 rounded-md shadow-lg hover:bg-green-700 transition-colors duration-300">
                  //         Add +
                  //       </button>
                  //     </div>
                  //   </div>
                  // );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
