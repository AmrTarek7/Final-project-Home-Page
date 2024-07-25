// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../../assets/Logo/Logo.png";
import { Dropdown } from "flowbite-react";


function BodyNav() {
  return (
    <section className="bg-[#913b10]">
      <div className="container flex justify-evenly items-center border-white border-b-[1px] pb-3 py-1">
        <div>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <button type="button">
                <svg
                  className="w-4 h-4 text-[#F7ECDB] dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
              {/* <!--mini.css من ملف  [type="search"]:focus,  يجب مسح  flowbite الخاص بـ  css  ملحوظة عن استخدام --> */}
              <input
                type="search"
                id="default-search"
                className="block w-[13rem] h-[100%] text-sm text-white border border-none rounded-lg  bg-transparent dark:bg-transparent placeholder-[#F7ECDB] placeholder-opacity-70 dark:placeholder-[#F7ECDB] dark:text-white focus:outline-none focus:border-none "
                style={{ outline: "none" }}
                placeholder="What are you looking for?"
                required
              />
            </div>
          </form>
        </div>

        {/* <!-- Website LOGO --> */}
        <div>
          <a href="#!">
            <img className="" src={Logo} alt="" />
          </a>
        </div>

        {/* =================== */}

        <div>
          {/* <!-- drop down languge --> */}
          <div>
            <Dropdown label="Egypt (Ar)" inline className="text-white bg-white">
              <Dropdown.Item>Egypt (Ar)</Dropdown.Item>
              <Dropdown.Item>England (En)</Dropdown.Item>
              <Dropdown.Item>France (Fr)</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodyNav;
