import { Navbar, NavbarLink } from "../styles/styles";

function Navigation() {
  return (
    <Navbar>
      <NavbarLink to='/'>Home</NavbarLink>
      <NavbarLink to='search'>Search</NavbarLink>
    </Navbar>
  );
};

export default Navigation;
