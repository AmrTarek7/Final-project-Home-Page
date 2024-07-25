// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "./component/Title/Title";
import SmallC from "./component/Smallc/SmallC";

function CollectionCard() {
  return (
    <section>
      <div className=" container">
        <Title />
        <SmallC />
        <div className=" flex flex-col items-center pb-9">
          <button className="text-1xl text-white py-2 px-7 mt-7 bg-green-600 hover:bg-green-800 rounded-md ">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollectionCard;
