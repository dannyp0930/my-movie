import React, { useState } from "react";
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
  CardTitle,
} from "../../styles/styles";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/API";
import DefatulBanner from "../../assets/images/default_banner.jpg"


export default function Carousel({ movies, title }) {
  const totalSlides = Math.ceil(movies.length / 4) - 1;
  const [ currentSlide, setCurrentSlide ] = useState(0);

  function nextSlide() {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  function pages() {
    const array = [];
    for (let i = 0; i < totalSlides + 1; i++) {
      array.push(
        <CarouselPage 
          key={i}
          now={i === currentSlide}
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
          <CarouselItems currentSlide={currentSlide}>
            {movies.map((movie) => {
              return (
                <CarouselItem
                  key={movie.id}
                >
                  <Link to={`/movie/${movie.id}`}>
                    <Card>
                      <CardTitle>{movie.title}</CardTitle>
                      <CardImage src={movie.backdrop_path ? IMG_URL + movie.backdrop_path : DefatulBanner} alt="poster_img"/>
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
