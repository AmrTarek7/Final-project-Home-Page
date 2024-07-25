// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "flowbite-react";

function TailNav() {
  return (
    <Navbar className="flex gap-x-5 bg-[#913b10] py-3 " fluid rounded>
      <div className="container flex  md:order-2">
        <Navbar.Toggle className="" />
      </div>
      <Navbar.Collapse>
        <div className="container">
          <ul className="flex justify-around flex-col p-4 md:p-0 mt-4 font-medium border border-none rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent">
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                BAGS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                BASKETS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                HOME DECOR
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                KITCHEN & DINING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                BEST SELLER
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-medium text-[#ffffffd8] hover:text-white"
              >
                ACCESSORIES
              </a>
            </li>
            <li>
              <a href="#" className="text-base font-medium text-white">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TailNav;
