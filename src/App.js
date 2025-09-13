import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./About.js";
import Contact from "./Contact.js";
import Cart from "./components/Cart.js";
import Error from "./Error.js";
import Restro from "./Restro.js";
import Loader from "./components/Loader.js";
import userContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
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

// console.log("Appstore", appStore);
const App = () => {
  const [userName, setUserName] = useState("Sankalp");

  useEffect(() => {
    //made api call
    const data = {
      name: "baburao ",
    };
    // console.log("Usercontext", userContext);
    setUserName(data.name);
  }, []);
  return (
    <div className="App">
      <Provider store={appStore}>
        {" "}
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </div>
  );
};

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
          <Suspense fallback={<Loader />}>
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
