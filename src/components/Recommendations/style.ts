import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieList = styled.div`
  max-width: 25rem;
  overflow-x: auto;
  display: flex;

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const MovieContainer = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: white;
`;

export const MovieImg = styled.img`
  height: 10rem;
`;
