import React from "react";
import RestroCard from "./RestroCard";
import restrolist from "../utils/data";
import { useEffect, useState } from "react";

const Body = () => {
  const arr = useState(restrolist);
  // const [restrolist1, setrestrolist1] = arr;
  const restrolist1 = arr[0];
  const setrestrolist1 = arr[1];
  return (
    <div className="body">
      <div className="serch-bar"></div>
      <div className="filters">
        <button
          className="filterbutton"
          onClick={() => {
            const temprestrolist = restrolist.filter((e) => {
              // console.log(e.card.card.info.avgRating);
              return e.card.card.info.avgRating >= 4.2;
            });
            setrestrolist1(temprestrolist);
            window.console.log(restrolist1);
          }}
        >
          4+ rating
        </button>
      </div>
      <div className="restro-container">
        {restrolist1.map((element) => (
          <RestroCard restros={element} key={element.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
