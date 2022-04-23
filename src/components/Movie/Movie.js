import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardContent, CardImage, CardLink, CardText } from "../../styles/styles";
import { IMG_URL } from "../../utils/API";

function Movie({id, posterPath, title, overview}) {
  const [ imgSrc, setImgSrc ] = useState(`${process.env.PUBLIC_URL}/images/default_poster.jpg`)
  useEffect(() => {
    if ( posterPath !== "null") {
      setImgSrc(IMG_URL + posterPath)
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

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  posterPath: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired,
};

export default Movie;