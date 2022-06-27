import React, { useEffect, useState } from "react";
import { CardImage } from "../../styles/styles";
import { IMG_URL } from "../../utils/API";
import DefatulPoster from "../../assets/images/default_poster.jpg"
import { Link } from "react-router-dom";

function Movie({id, posterPath, title, overview}) {
  const [ imgSrc, setImgSrc ] = useState("");
  
  useEffect(() => {
    if ( posterPath !== "null") {
      setImgSrc(IMG_URL + posterPath)
    } else {
      setImgSrc(DefatulPoster)
    }
  }, [posterPath]);

  return (
    <Link to={`/movie/${id}`}>
      <CardImage src={imgSrc} alt="poster_img"/>
    </Link>
  );
};

export default Movie;