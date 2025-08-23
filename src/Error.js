import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const useroutererror = useRouteError();
  return (
    <div>
      {console.log(useroutererror)}
      <h1>{useroutererror.data}</h1>
      <h2>{useroutererror.status}</h2>
      <h3>{useroutererror.statusText}</h3>
    </div>
  );
}
