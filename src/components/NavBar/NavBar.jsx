// eslint-disable-next-line no-unused-vars
import React from "react";
// import HeadNav from "./component/HeadNav";
import BodyNav from "./component/BodyNav";
import TailNav from "./component/TailNav";


function NavBar() {
  return (
    <nav>
      <BodyNav />
      <TailNav />
    </nav>
  );
}

export default NavBar;
