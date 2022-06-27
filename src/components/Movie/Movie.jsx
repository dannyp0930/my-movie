import React, { useEffect, useState } from "react";
import { Card, CardImage } from "../../styles/styles";
import { IMG_URL } from "../../utils/API";
import DefatulPoster from "../../assets/images/default_poster.jpg"
import { Link } from "react-router-dom";

function Movie({id, posterPath}) {
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
      <Card>
        <CardImage src={imgSrc} alt="poster_img"/>
      </Card>
    </Link>
  );
};

export default Movie;