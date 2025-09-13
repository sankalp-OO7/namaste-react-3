import React, { useState } from "react";
import Dishesh from "./Dishesh";

export default function Dishesh0(props) {
  const { name, data } = props;
  //   const [openCategory, setOpenCategory] = useState(null);
  //   const handlAccordion = (id) => {
  //     setOpenCategory(openCategory === id ? null : id);
  //   };
  const [count, setCount] = useState(0);
  const [showIndex, setShowIndex] = useState(0);
  const handlClick = (index) => {
    if (showIndex === index) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center text-gray-800 my-8">
        {name || "Restro Name"}
      </h1>
      <div className="max-w-4xl mx-auto">
        {data.map((category, index) => {
          //   const open = openCategory === category.card.card.categoryId;
          return (
            <div
              key={category.card.card.categoryId}
              className="mb-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-gray-200"
            >
              <div
                // onClick={() => {
                //   handlAccordion(category.card.card.categoryId);
                // }}
                onClick={() => handlClick(index)}
                className=" flex justify-between cursor-pointer text-3xl sm:text-4xl font-light text-gray-900 mb-6 border-b border-gray-300 pb-4"
              >
                <p>
                  {" "}
                  {category.card.card.title}{" "}
                  <span className="font-bold">
                    {" "}
                    {category.card.card.itemCards?.length}
                  </span>{" "}
                </p>
                <p> ⬇</p>
              </div>
              {index === showIndex && (
                <div className={`space-y-6 ${open ? "block" : "hidden"}`}>
                  {category.card.card.itemCards?.map((item, index) => {
                    const info = item.card.info;
                    return (
                      <Dishesh
                        item={item}
                        key={item.card.info.id}
                        func={() => setCount(count + 1)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
