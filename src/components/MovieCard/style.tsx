import styled from "styled-components";

export const Card = styled.div`
  flex: 0 0 25%;
`;

export const CardItem = styled.section`
  margin: 0 0.5rem;
  height: 100%;
  position: relative;
  border-radius: 1rem;

  :hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02);
  };
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const CardTitle = styled.p`
  position: absolute;
  width: 100%;
  color: white;
  font-size: 12px;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  text-align: center;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
`;
