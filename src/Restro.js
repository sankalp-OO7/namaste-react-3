import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./components/Loader";
import useRestroMenu from "./utils/useRestroMenu";

export default function Restro() {
  const { resid } = useParams();
  const restroData = useRestroMenu(resid);
  console.log(restroData);

  return restroData.length === 0 ? (
    <Loader />
  ) : (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        backgroundClip: "teal",
        justifyContent: "space-between",
      }}
    >
      {restroData.map((dish) => (
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "burlywood",
            borderRadius: "8px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          key={dish.card.info.id}
        >
          {console.log(dish)}
          <div style={{ display: "flex", gap: "10px" }}>
            <h3>{dish?.card?.info?.name}</h3>
            <h4 style={{ color: "teal" }}>
              Rs. {dish?.card?.info?.defaultPrice || dish?.card?.info?.price}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                dish?.card?.info?.imageId
              }
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}
