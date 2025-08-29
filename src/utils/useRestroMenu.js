import { useEffect, useState } from "react";

const useRestroMenu = (resid) => {
  const [resinfo, setResInfo] = useState([]);
  useEffect(() => {
    geter();
  }, []);

  const geter = async () => {
    const res = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1837371&lng=77.2983373&restaurantId=${resid}`
    );
    let data = await res.json();
    console.log("data orignal", data);
    // data =
    //   data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
    //     ?.card?.card?.itemCards ?? [];

    console.log("data", data);
    setResInfo(data);
  };
  return resinfo;
};

export default useRestroMenu;
