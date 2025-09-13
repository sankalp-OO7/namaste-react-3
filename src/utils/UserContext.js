import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Sankalp",
  setLoggedInUser: () => {},
});

export default userContext;
