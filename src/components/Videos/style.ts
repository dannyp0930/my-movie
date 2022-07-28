import styled from "styled-components";

export const Container = styled.section`
  margin: 3rem;
`;

export const Dl = styled.nav`
  margin: 0;
  display: flex;
`;

export const Li = styled.div<{ select: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  box-sizing: border-box;
  padding: 1rem;
  border: ${props => props.select ? "1px solid white" : "none"};
  border-bottom: ${props => props.select ? "none" : "1px solid white" };
  border-radius: 5px 5px 0 0;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  };
`;

export const Count = styled.span`
  font-size: 12px;
`;