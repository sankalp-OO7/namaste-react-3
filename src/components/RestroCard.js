import { cloudinaryUrl } from "../utils/constant";

const RestroCard = (propObj) => {
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
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
            <h4>{cuisines.join(",")}</h4>
          </div>
          <div className="restro-time-rating">
            <div className="testro-time">{sla?.deliveryTime} Min</div>
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
