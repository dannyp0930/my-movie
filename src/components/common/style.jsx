import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Load = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border: 8px solid #E9EBEE;
  border-top: 8px solid #00B8FF;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  };
`;

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
