import styled from "styled-components";

interface MainProps {
  color: string;
}

interface MovieBackdropProps {
  backdrop: string;
}

export const Article = styled.article`
  display: flex;
`

export const Main = styled.main<MainProps>`
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    background-color: ${props => props.color};
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  };
`

export const MovieBackdrop = styled.div<MovieBackdropProps>`
  background-image: url(${props => props.backdrop});
  background-size: cover;
  height: 100%;
  
  @media screen and (min-width: 1800px) {
    width: 50%;
  };
`;

export const MovieContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 2rem;
  position: relative;
  column-gap: 1rem;
`;

export const MovieImg = styled.img`
  width: 18rem;
  margin: auto;
  object-fit: fill;
`;

export const H2 = styled.h2`
  margin: 0;
`

export const H3 = styled.h3`
  margin: 0;
`

export const P = styled.p`
  margin: 0;
`

export const MovieContent = styled.section`
  width: 90%;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Tagline = styled(H3)`
  font-weight: normal;
  font-style: italic;
`

export const Overview = styled(P)`
   
`