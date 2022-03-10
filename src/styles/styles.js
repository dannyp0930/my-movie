import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// Navigation
export const Navbar = styled.div`
  background-color: black;
  height: 4rem;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 3rem;
  position: sticky;
  top: 0;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`

// Loading
export const Load = styled.div`
  display: flex;
  min-height: 100vh;
  font-size: 5rem;
`

export const Container = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`

// Card
export const Card = styled.div`
  display: grid;
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: lightgray;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem gray;
  width: 33rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

export const CardImage = styled.img`
  width: 15rem;
  object-fit: fill;
  margin: 1rem;
`


export const CardContent = styled.div`
  display: grid;
  row-gap: 1rem;
  margin: 1.2rem;
`

export const CardLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
`

export const CardText = styled.div`
  font-size: 1rem;
`
