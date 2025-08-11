import React from "react";
import ReactDOM from "react-dom/client";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        className="img"
        src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
        alt="logo"
      />
    </div>
    <div className="navitems">
      <ul className="ul">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestroCard = (propObj) => {
  console.log(propObj.rating);
  return (
    <div className="restro-card">
      <div className="restro-card-content">
        <div className="restro-card-img-div">
          <img
            className="restro-card-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpK1noS9RwpA351YDfG9dRCvSON-j5nZHU0A&s"
            alt=""
          />
        </div>
        <div className="restro-info">
          <div className="restro-name">
            <h3>Anitas Kitchen</h3>
          </div>
          <div className="restro-dishesh">
            {" "}
            <h4>Poolav ,Khichdi ,Idli ,Dosa</h4>
          </div>
          <div className="restro-time-rating">
            <div className="testro-time">39 Mins</div>
            <div className="restro-rating">
              {propObj.rating === undefined ? "4.5" : propObj.rating}
            </div>
          </div>
          <div className="restro-knowmore">
            <button className="restro-knowmore-btn">know more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Body = () => (
  <div className="body">
    <div className="serch-bar"></div>
    <div className="restro-container">
      <RestroCard />
      <RestroCard restroname="sankalp" rating="3.4" />
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const j = 2;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
