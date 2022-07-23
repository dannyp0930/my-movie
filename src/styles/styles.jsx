import styled from "styled-components";

// Home
export const Article = styled.div`
  
`

export const Header = styled.div`
`;

export const Title = styled.div`
  text-align: center;
  font-size: 7rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

// Search

export const SearchContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 4fr 1fr;
  column-gap: 1rem;
  margin: 5rem auto 2rem;
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
`;

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
`;

export const MoiveInfo = styled.div`
  display: flex;
  flex-direction: column;
`;


// Hgroup
export const H1 = styled.h1`
  
`

export const H2 = styled.h2`
  
`

export const H3 = styled.h3`
  
`