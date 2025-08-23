import React, { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    geter();
  }, []);

  const geter = () => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
    window.addEventListener("offline", () => {
      setStatus(false);
    });
  };

  return status;
}

// import React, { useEffect, useState } from "react";

// export default function useOnlineStatus() {
//   const [status, setStatus] = useState(null);

//   useEffect(() => {
//     geter();
//   }, []);
//   const geter = () => {
//     window.addEventListener("load", () => {
//       setStatus(navigator.onLine);
//     });
//   };

//   return status;
// }
