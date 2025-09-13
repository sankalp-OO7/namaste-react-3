import { cloudinaryUrl } from "../utils/constant";

const RestroCard = (propObj) => {
  // console.log("propobj", propObj);
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    propObj?.restros?.info;
  return (
    <div className="">
      <div className="flex flex-col justify-center align-middle items-center w-[300px] flex-wrap  bg-slate-100 rounded-b-lg shadow-lg  hover:shadow-emerald-950 hover:scale-105 transition-all duration-300">
        <div className="restro-card-img-div">
          <img
            className="w-72 h-44 rounded-t-lg object-cover"
            src={cloudinaryUrl + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 w-full    p-4 flex-wrap ">
          <h3 className=" font-bold">{name}</h3> <h4>{cuisines.join(" , ")}</h4>
          <div className="flex justify-between align-middle items-center mt-2 mb-2">
            <div className="testro-time">{sla?.deliveryTime} Min</div>
            <div className="restro-rating">🌟 &nbsp; {avgRating}</div>
          </div>
          <div className="restro-knowmore">
            <button className="p-3 cursor-pointer bg-pink-400 w-full rounded-2xl">
              know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;

export const PramotedRestroCard = (A) => {
  return (x) => {
    return (
      <>
        <div>
          <div className="absolute bg-green-400 p-1 rounded-lg m-2 shadow-lg shadow-yellow-950">
            <h3 className="font-bold text-sm">VEG</h3>
          </div>
          <A {...x} />
        </div>
      </>
    );
  };
};
