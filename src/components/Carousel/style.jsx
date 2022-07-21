import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const CarouselTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CarouselPagination = styled.div`
  display: flex;
`;

export const CarouselPage = styled.div`
  width: 1rem;
  height: 0.2rem;
  background-color: ${props => props.now ? "gray" : "lightgray"};
  margin: auto 0.1rem;
`;

export const CarouselContent = styled.div`
  position: relative;
`;

export const CarouselSlide = styled.div`
  overflow: hidden;
`;

export const CarouselItems = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 90%;
  display: flex;
  left: 5%;
  transition: all 0.5s ease-in-out;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

export const CarouselItem = styled.div`
  flex: 0 0 25%;
`;


export const CarouselButton = styled.div`
  position: absolute;
  z-index: 2;
  top: 1rem;
  bottom: 1rem;
  width: calc(5% - 0.5rem);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const CarouselPrev = styled(CarouselButton)`
  left: 0;
  border-radius: 0 1rem 1rem 0;
`;

export const CarouselNext = styled(CarouselButton)`
  right: 0;
  border-radius: 1rem 0 0 1rem;
`;

export const Card = styled.div`
  margin: 0 0.5rem;
  height: 100%;
  position: relative;
  border-radius: 1rem;

  :hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02);
    box-shadow: 0 0 0 5px white;
  };
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const CardTitle = styled.div`
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
