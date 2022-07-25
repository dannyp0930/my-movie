import styled from "styled-components";

interface MovieBackdropProps {
  backdrop: string;
  color: string;
}

export const MovieBackdrop = styled.div<MovieBackdropProps>`
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
  };
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