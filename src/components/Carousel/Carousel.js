import { useEffect, useState, useRef } from "react"
import { CarouselContainer, CarouselImgContainer, CarouselItem, CarouselButton } from "../../styles/styles";
import Movie from "../Movie/Movie";

export default function Carousel({ movies }) {
  const TOTAL_SLIDES = 9;
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
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

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevSlide}>prev</CarouselButton>
      <CarouselImgContainer ref={slideRef}>
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
      </CarouselImgContainer>
      <CarouselButton onClick={nextSlide}>next</CarouselButton>
    </CarouselContainer>
  )
}
