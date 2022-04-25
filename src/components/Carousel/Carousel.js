import { useEffect, useState, useRef } from "react";
import {
  CarouselContainer,
  CarouselItemContainer,
  CarouselItem,
  CarouselButton,
  CarouselTitle,
  CarouselHeader,
  CarouselPagination,
  CarouselPage,
} from "../../styles/styles";
import Movie from "../Movie/Movie";

export default function Carousel({ movies, title }) {
  const TOTAL_SLIDES = Math.ceil(movies.length / 2) - 1;
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const slideRef = useRef(null);

  function nextSlide() {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  function pages() {
    const array = [];
    for (let i = 0; i < TOTAL_SLIDES + 1; i++) {
      array.push(
        <CarouselPage 
          key={i}
          now={i === currentSlide}
          onClick={() => {setCurrentSlide(i)}}
        />)
    }
    return array;
  };

  return (
    <CarouselContainer>
      <CarouselHeader>
        <CarouselTitle>{title}</CarouselTitle>
        <CarouselPagination>
          <CarouselButton onClick={prevSlide}>&lt;</CarouselButton>
          {pages()}
          <CarouselButton onClick={nextSlide}>&gt;</CarouselButton>
        </CarouselPagination>
      </CarouselHeader>
      <CarouselItemContainer ref={slideRef}>
        {movies.map((movie) => {
          let posterPath = "null"
          if (movie.poster_path) {
            posterPath = movie.poster_path
          }
          return (
            <CarouselItem
              key={movie.id}
            >
              <Movie 
                id={movie.id}
                posterPath={posterPath}
                title={movie.title}
                overview={movie.overview}
              ></Movie>
            </CarouselItem>
          )
        })}
      </CarouselItemContainer>
    </CarouselContainer>
  )
}