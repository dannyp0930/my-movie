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
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-items: center;
  margin: auto;
  padding: 2rem;
  position: relative;
  column-gap: 1rem;
`;

export const MovieImg = styled.img`
  width: 100%;
  margin: auto;
  object-fit: fill;
`;

export const MovieContent = styled.section`
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