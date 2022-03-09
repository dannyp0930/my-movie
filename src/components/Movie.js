import Proptypes from "prop-types"
import { Link } from "react-router-dom"
import { IMG_URL } from "../utils/API"

function Movie({id, posterPath, title, overview, genreIds}) {
  const poster_path = IMG_URL + posterPath
  return (
    <div>
      <img src={poster_path} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{overview}</p>
      <ul>
        {genreIds.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  posterPath: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired,
  genreIds: Proptypes.arrayOf(Proptypes.number).isRequired,
}

export default Movie