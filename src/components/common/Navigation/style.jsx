import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.div`
  width: calc(100vw - 6rem);
  height: 4rem;
  background-color: black;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;
