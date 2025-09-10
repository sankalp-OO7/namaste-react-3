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
                <p> {category.card.card.title}</p>
                <span></span>
              </div>
              <div className="space-y-6">
                {category.card.card.itemCards?.map((item) => {
                  const info = item.card.info;
                  return <Dishesh item={item} key={item.card.info.id} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
