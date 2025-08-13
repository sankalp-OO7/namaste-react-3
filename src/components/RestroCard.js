import { cloudinaryUrl } from "../utils/constant";

const RestroCard = (propObj) => {
  console.log(propObj?.restros?.card?.card?.info);
  const { name, avgRating, cloudinaryImageId } =
    propObj?.restros?.card?.card?.info;
  return (
    <div className="restro-card">
      <div className="restro-card-content">
        <div className="restro-card-img-div">
          <img
            className="restro-card-img"
            src={cloudinaryUrl + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="restro-info">
          <div className="restro-name">
            <h3>{name}</h3>
          </div>
          <div className="restro-dishesh">
            {" "}
            <h4>{propObj?.restros?.card?.card?.info?.cuisines.join(",")}</h4>
          </div>
          <div className="restro-time-rating">
            <div className="testro-time">
              {propObj?.restros?.card?.card?.info?.sla?.deliveryTime}
            </div>
            <div className="restro-rating">🌟 &nbsp; {avgRating}</div>
          </div>
          <div className="restro-knowmore">
            <button className="restro-knowmore-btn">know more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
