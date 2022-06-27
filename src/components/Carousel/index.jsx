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
  Card,
  CardImage,
} from "../../styles/styles";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/API";
import DefatulPoster from "../../assets/images/default_poster.jpg"


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
        <CarouselPrev onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </CarouselPrev>
        <CarouselNext onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight}/>
        </CarouselNext>
        <CarouselSlide>
          <CarouselItems ref={slideRef}>
            {movies.map((movie) => {
              console.log(movie)
              return (
                <CarouselItem
                  key={movie.id}
                >
                  <Link to={`/movie/${movie.id}`}>
                    <Card>
                      <CardImage src={movie.poster_path ? IMG_URL + movie.poster_path : DefatulPoster} alt="poster_img"/>
                    </Card>
                  </Link>
                </CarouselItem>
              )
            })}
          </CarouselItems>
        </CarouselSlide>
      </CarouselContent>
    </CarouselContainer>
  )
}
