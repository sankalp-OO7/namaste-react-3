import React from "react";
import RestroCard from "./RestroCard";
import restrolist from "../utils/data";
import { useEffect, useState } from "react";
import ShimmerLoader from "./loader";

const Body = () => {
  const [mainList, setMainList] = useState([]);
  const [mainListCopy, setMainListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");

  const geter = async function geter() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.1837371&lng=77.2983373&carousel=true&third_party_vendor=1"
      );
      const data = await res.json();
      const list =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setMainList(list);
      setMainListCopy(list);

      console.log("list", list);

      // const data = data.
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    geter();
  }, []);
  return mainListCopy.length === 0 ? (
    <ShimmerLoader />
  ) : (
    <div className="body">
      <div className="serch-bar"></div>
      <div className="filters">
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <button
          onClick={() => {
            const searchResult = mainListCopy.filter((element) => {
              return element.info.name
                .toUpperCase()
                .includes(searchText.toUpperCase());
            });
            setMainList(searchResult);
          }}
        >
          Search
        </button>
        <button
          className="filterbutton"
          onClick={() => {
            const rating4 = mainListCopy.filter((element) => {
              return element.info.avgRating > 4;
            });
            setMainList(rating4);
          }}
        >
          4+ rating
        </button>

        <button
          className="reset"
          onClick={() => {
            setMainList(mainListCopy);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restro-container">
        {mainList.map((element) => (
          <RestroCard restros={element} key={element?.info?.id} />
        ))}
      </div>
      {console.log(mainList)}
    </div>
  );
};

export default Body;
