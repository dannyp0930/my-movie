import React, { useState } from "react";
import {
  CarouselContainer,
  CarouselItems,
  CarouselTitle,
  CarouselPagination,
  CarouselPage,
  CarouselPrev,
  CarouselNext,
  CarouselContent,
  CarouselSlide,
  CarouselHeader,
} from "./style";
import MovieCard from "components/MovieCard";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Movie } from "store/types/interfaces";

interface CarouselProps {
  movies: Movie[];
  title: string;
};

export default function Carousel({ movies, title }: CarouselProps) {
  const totalSlides = Math.ceil(movies.length / 4) - 1;
  const [ currentSlide, setCurrentSlide ] = useState<number>(0);

  function nextSlide() {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    };
  };

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
    } else {
      setCurrentSlide(currentSlide - 1);
    };
  };

  function pages() {
    const array = [];
    for (let i = 0; i < totalSlides + 1; i++) {
      array.push(
        <CarouselPage 
          key={i}
          now={i === currentSlide}
        />)
    };
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
        <CarouselPrev onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </CarouselPrev>
        <CarouselNext onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight}/>
        </CarouselNext>
        <CarouselSlide>
          <CarouselItems currentSlide={currentSlide}>
            {movies.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie}/>
              )
            })}
          </CarouselItems>
        </CarouselSlide>
      </CarouselContent>
    </CarouselContainer>
  );
};
