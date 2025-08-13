import React from "react";
import RestroCard from "./RestroCard";
import restrolist from "../utils/data";

const Body = () => (
  <div className="body">
    <div className="serch-bar"></div>
    <div className="restro-container">
      {/* <RestroCard restros={restrolist[0]} />
      <RestroCard restros={restrolist[2]} />
      <RestroCard restros={restrolist[1]} />
      <RestroCard restros={restrolist[4]} />
      <RestroCard restros={restrolist[5]} />
      <RestroCard restros={restrolist[6]} /> */}
      {restrolist.map((element) => (
        <RestroCard restros={element} key={element.card.card.info.id} />
      ))}
    </div>
    {/* <RestroCard restros={restrolist[0]} /> */}
  </div>
);

export default Body;
