import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  position: absolute;

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  };
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  };
`

export const CardContainer = styled.div`
`;