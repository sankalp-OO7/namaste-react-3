import React from "react";

export default function Shimmer() {
  return (
    <div className="w-[90%]  flex flex-col gap-4 align-middle justify-center items-center mt-4">
      {Array(6)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-[90%] flex items-center  justify-center align-middle bg-gray-200 rounded-lg p-4 animate-pulse"
          >
            <div className="flex flex-col gap-2 w-1/2">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-24 w-24 bg-gray-300 rounded-md"></div>
          </div>
        ))}
    </div>
  );
}
