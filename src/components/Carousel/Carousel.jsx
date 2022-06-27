import React, { useEffect, useState, useRef } from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselItems,
  CarouselTitle,
  CarouselPagination,
  CarouselPage,
  CarouselPrev,
  CarouselNext,
  CarouselContent,
  CarouselSlide,
  CarouselHeader,
} from "../../styles/styles";
import Movie from "../Movie/Movie";

export default function Carousel({ movies, title }) {
  const TOTAL_SLIDES = Math.ceil(movies.length / 4) - 1;
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
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
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
          {pages()}
        </CarouselPagination>
      </CarouselHeader>
      <CarouselContent>
        <CarouselPrev onClick={prevSlide}></CarouselPrev>
        <CarouselNext onClick={nextSlide}></CarouselNext>
        <CarouselSlide>
          <CarouselItems ref={slideRef}>
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
                  />
                </CarouselItem>
              )
            })}
          </CarouselItems>
        </CarouselSlide>
      </CarouselContent>
    </CarouselContainer>
  )
}
