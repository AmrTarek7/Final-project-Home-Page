/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "flowbite-react";


function HeadNav() {
  return (
    <div className="container">
      <Navbar className="flex gap-x-5" fluid rounded>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeadNav;
