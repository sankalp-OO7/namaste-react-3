import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./About.js";
import Contact from "./Contact.js";
import Cart from "./Cart.js";
import Error from "./Error.js";
import Restro from "./Restro.js";
import loader from "./components/Loader.js";
const Grocery = lazy(() => {
  return import("./Grocery.js");
});
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const App = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<loader />}>
            {" "}
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "about",
        element: <About name={"baburao"} />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restro/:resid",
        element: <Restro />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/cart" element={<Cart />} />
  //   </Routes>
  // </BrowserRouter>
);
<loader />;
