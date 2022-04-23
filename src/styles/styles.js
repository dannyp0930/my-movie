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
  margin-right: 1rem;
`;

// Loading
export const Load = styled.div`
  display: flex;
  min-height: 100vh;
  font-size: 5rem;
`;

// Home
export const Header = styled.div`
  padding: 10rem;
  background-image: url(${props => props.backdrop});
  background-size: cover;
  text-align: center;
  color: white;
  font-size: 7rem;
`

export const Title = styled.div`
  margin: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

// Movie
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
`;

export const CardImage = styled.img`
  width: 15rem;
  margin: 1rem;
`;


export const CardContent = styled.div`
  display: grid;
  row-gap: 1rem;
  margin: 1.2rem;
`;

export const CardLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const CardText = styled.div`
  font-size: 1rem;
`;

// search
export const SearchContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 4fr 1fr;
  column-gap: 1rem;
  margin: 5rem auto 2rem;
`

export const SearchInput = styled.input`
  height: 2rem;
  font-size: 1rem;
`

export const SearchButton = styled.button`
`

export const NoSearchMovies = styled.div`
  text-align: center;
  font-size: 2rem;
`

// detail
export const MovieContainer = styled(Container)`
  margin: 5rem auto;
  background-color: ${props => props.color};
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
`;

export const MovieImg = styled.img`
  width: 90%;
  margin: 2rem auto;
  object-fit: fill;
`;

export const MovieContent = styled.div`
  width: 90%;
  color: white;
  margin: 0 auto;
`;

export const MoiveInfo = styled.div`
  display: flex;
  align-items: center;
`
