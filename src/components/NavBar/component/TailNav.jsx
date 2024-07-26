// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "flowbite-react";
import "./TailNav.modules.css";


function TailNav() {
  return (
    <Navbar className="flex gap-x-5 bg-[#913b10] py-4 ">
      <div className=" flex ">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="container">
        <div>
          <div className="borderYtoX flex flex-col gap-y-4 md:gap-y-0 justify-center p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent sm:space-x-2 md:space-x-4 xl:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent">
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              BAGS
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              BASKETS
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              HOME DECOR
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              KITCHEN & DINING
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              BEST SELLER
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-[#ffffffd8] hover:text-white"
            >
              ACCESSORIES
            </a>
            <a
              href="#"
              className="text-base md:text-sm lg:text-base font-medium text-white"
            >
              ABOUT US
            </a>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TailNav;
