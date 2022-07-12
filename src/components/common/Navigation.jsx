import React from "react";
import { Navbar, NavbarLink } from "./style";

function Navigation() {
  return (
    <Navbar>
      <NavbarLink to='/'>Home</NavbarLink>
      <NavbarLink to='search'>Search</NavbarLink>
    </Navbar>
  );
};

export default Navigation;
