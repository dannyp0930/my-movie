import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  width: calc(100vw - 6rem);
  height: 4rem;
  background-color: #242323;
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

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: white;
`;

export const SearchInput = styled.input`
  height: 2rem;
  width: 15rem;
  font-size: 1rem;
  border: 1px solid white;
  outline: none;
  background: none;
  color: white;
`;