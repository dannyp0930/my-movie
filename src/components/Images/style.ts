import styled from "styled-components";

export const Container = styled.section`
  height: 25rem;
`

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

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  justify-content: center;
`;

export const ImgList = styled.div`
  width: 100%;
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
`;

export const ImgCard = styled.div`
`;

export const Img = styled.img`
  height: 15rem;
  margin: 1rem;
`;