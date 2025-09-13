import React, { useContext } from "react";
import RestroCard, { PramotedRestroCard } from "./RestroCard";
import { useEffect, useState } from "react";
import ShimmerLoader from "./Loader";
import { NavLink } from "react-router-dom";
import { swiggy, serverswiggy } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Body = () => {
  const [mainList, setMainList] = useState([]);
  const [mainListCopy, setMainListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();
  const VegRestro = PramotedRestroCard(RestroCard);
  const geter = async function geter() {
    try {
      const res = await fetch(serverswiggy || swiggy);
      const data = await res.json();

      const list =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

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
  const { setUserName, loggedInUser } = useContext(userContext);
  const search = () => {
    const searchResult = mainListCopy.filter((element) => {
      return element.info.name.toUpperCase().includes(searchText.toUpperCase());
    });
    setMainList(searchResult);
  };
  const rating4 = () => {
    const rating4 = mainListCopy.filter((element) => {
      return element.info.avgRating > 4;
    });
    setMainList(rating4);
  };
  if (status === false) return <h1>Looks like you are offline</h1>;
  console.log(mainList);
  return (
    <div className="body">
      <div className="flex justify-center align-middle items-center gap-3 p-5">
        <input
          type="text"
          value={loggedInUser}
          className="border-amber-50 bg-amber-100 border-b-2 border-b-blue-950 p-2 rounded-lg "
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="border-amber-50 bg-amber-100 border-b-2 border-b-blue-950 p-2 rounded-lg "
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-4 bg-green-300 rounded-2xl cursor-pointer hover:bg-green-500 hover:text-white"
          onClick={search}
        >
          Search
        </button>
        <button
          className="p-[16px] bg-yellow-300 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white hover:font-bold"
          onClick={rating4}
        >
          4+ rating
        </button>

        <button
          className="p-[16px] bg-red-300 rounded-2xl cursor-pointer hover:bg-red-500 hover:text-white"
          onClick={() => setMainList(mainListCopy)}
        >
          Reset
        </button>
        <button>
          {status ? (
            <h3 className="p-[16px] bg-green-800">Online</h3>
          ) : (
            <h3 className="p-4 bg-red-800">Offline</h3>
          )}
        </button>
      </div>
      {mainListCopy.length === 0 ? (
        <ShimmerLoader />
      ) : (
        <div className="flex flex-wrap flex-row gap-4 justify-center align-middle ">
          {mainList.map((element) => (
            <NavLink key={element?.info?.id} to={"restro/" + element?.info?.id}>
              {element?.info?.veg ? (
                <VegRestro restros={element} />
              ) : (
                <RestroCard restros={element} />
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
