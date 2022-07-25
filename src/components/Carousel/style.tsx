import styled from "styled-components";

export const CarouselContainer = styled.article`
  width: 100%;
`;

export const CarouselHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const CarouselTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CarouselPagination = styled.div`
  display: flex;
`;

export const CarouselPage = styled.div<{ now: boolean }>`
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

export const CarouselItems = styled.div<{ currentSlide: number }>`
  position: relative;
  margin: 1rem 0;
  width: 90%;
  display: flex;
  left: 5%;
  transition: all 0.5s ease-in-out;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

export const CarouselButton = styled.button`
  position: absolute;
  border: none;
  z-index: 2;
  top: 1rem;
  bottom: 1rem;
  width: calc(5% - 0.487rem);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  };
`;

export const CarouselPrev = styled(CarouselButton)`
  left: 0;
  border-radius: 1rem;
`;

export const CarouselNext = styled(CarouselButton)`
  right: 0;
  border-radius: 1rem 0 0 1rem;
`;
