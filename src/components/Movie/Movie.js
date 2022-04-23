import { useEffect, useState } from "react";
import { Card, CardContent, CardImage, CardLink, CardText } from "../../styles/styles";
import { IMG_URL } from "../../utils/API";
import DefatulPoster from "../../assets/images/default_poster.jpg"

function Movie({id, posterPath, title, overview}) {
  const [ imgSrc, setImgSrc ] = useState("")
  useEffect(() => {
    if ( posterPath !== "null") {
      setImgSrc(IMG_URL + posterPath)
    } else {
      setImgSrc(DefatulPoster)
    }
  }, [posterPath])
  return (
    <Card>
      <CardImage src={imgSrc} alt="poster_img"/>
      <CardContent>
        <CardLink to={`/movie/${id}`}>{title}</CardLink>
        <CardText>{overview.length > 130 ? `${overview.slice(0, 130)}...` : overview}</CardText>
      </CardContent>
    </Card>
  );
};

export default Movie;