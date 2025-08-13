import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { cloudinaryUrl, logoUrl } from "./utils/constant";

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

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const j = 2;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
