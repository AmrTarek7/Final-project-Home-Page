// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../../../assets/ico/Support1.svg";
import img2 from "../../../../assets/ico/Support2.svg";
import img3 from "../../../../assets/ico/Support3.svg";
import img4 from "../../../../assets/ico/Support4.svg";

function SupportIcon() {
  return (
    <section className=" container ">
      <div className="  bg-amber-900 rounded-[10rem] mx-auto my-24 shadow-xl">
        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 ">
          <div className="flex flex-col items-center content-center justify-center gap-5 py-14 sm:py-5 hover:scale-105 border-b-2 xl:border-b-0 ">
            <img src={img1} alt="#" />
            <p className="text-white  ">Support Independent Brands</p>
          </div>
          {/*  ---------------*/}
          <div className="flex flex-col items-center content-center justify-center gap-5 py-14 sm:py-5 hover:scale-105 sm:border-s-2 border-b-2 xl:border-b-0  ">
            <img src={img2} alt="#" />
            <p className="text-white  ">Support Independent Brands</p>
          </div>
          {/*  ---------------*/}
          <div className="flex flex-col items-center content-center justify-center  gap-5 sm:gap-1 md:gap-5 py-14 sm:py-5 hover:scale-105 xl:border-s-2 border-b-2 sm:border-b-0 ">
            <img src={img3} alt="#" />
            <p className="text-white  ">Support Independent Brands</p>
          </div>
          {/*  ---------------*/}
          <div className="flex flex-col items-center gap-5 sm:gap-1 md:gap-5 py-14 sm:py-5 hover:scale-105 sm:border-s-2  ">
            <img src={img4} alt="#" />
            <p className="text-white  ">Support Independent Brands</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportIcon;
