import styled from "styled-components";

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

export const NoSearchMovies = styled.article`
  text-align: center;
  font-size: 2rem;
`;