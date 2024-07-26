// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "./component/Title/Title";
import SmallC from "./component/Smallc/SmallC";
import { Button } from "flowbite-react";

function CollectionCard() {
  return (
    <section>
      <div className=" container">
        <Title />
        <SmallC />
        <div className=" flex flex-col items-center py-9">
          <Button className="bg-green-500 enabled:hover:bg-green-800 focus:outline-green-500 px-8">
           View All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CollectionCard;
