import { NavLink } from "react-router-dom";
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
  z-index: 1;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

// Loading
export const Load = styled.div`
  height: 100vh;
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

// Home
export const Header = styled.div`
  padding: 10rem;
  position: relative;
  background-image: url(${props => props.backdrop});
  background-size: cover;
  
  &::before {
    content: "";
    background-color: skyblue;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 7rem;
  position: relative;
`

// Carousel
export const CarouselContainer = styled.div`
  width: 100%;

`;

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CarouselTitle = styled.div`
  margin: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CarouselPagination = styled.div`
  display: flex;
`;

export const CarouselPage = styled.div`
  width: 2rem;
  height: 0.5rem;
  background-color: ${props => props.now ? "gray" : "lightgray"};
  margin: auto 0.5rem;
  cursor: pointer;
`;

export const CarouselContent = styled.div`
  position: relative;
`

export const CarouselSlide = styled.div`
  overflow: hidden;
`

export const CarouselItems = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  left: 5%;
`;

export const CarouselItem = styled.div`
  flex: 0 0 25%;
`;


export const CarouselButton = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: calc(5% - 1px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const CarouselPrev = styled(CarouselButton)`
  left: 0;
  border-radius: 0 1rem 1rem 0;
`

export const CarouselNext = styled(CarouselButton)`
  right: 0;
  border-radius: 1rem 0 0 1rem;
`

export const Card = styled.div`
  margin: 0 2px;
  height: 100%;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

// Search

export const SearchContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 4fr 1fr;
  column-gap: 1rem;
  margin: 5rem auto 2rem;
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const SearchInput = styled.input`
  height: 2rem;
  font-size: 1rem;
`;

export const SearchButton = styled.button`
`;

export const NoSearchMovies = styled.div`
  text-align: center;
  font-size: 2rem;
`;

// Detail
export const MovieBackdrop = styled.div`
  position: relative;
  background-image: url(${props => props.backdrop});
  background-size: cover;
  
  &::before {
    content: "";
    background-color: ${props => props.color};
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  margin: 5rem auto;
  position: relative;
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

export const MovieTitleContent = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`

export const MoiveInfo = styled.div`
  display: flex;
  align-items: center;
`;
