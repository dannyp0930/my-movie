import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/common/Loading";
import {
  ResultContainer,
  NoSearchMovies,
  SearchButton,
  SearchContainer,
  SearchInput,
  Card,
  CardImage
} from "../styles/styles";
import { API_KEY, BASE_URL, IMG_URL } from "../utils/API";
import { Link } from "react-router-dom";
import DefatulPoster from "../assets/images/default_poster.jpg"

export function Search() {
  const [ query, setQuery ] = useState('');
  const [ searchMovies, setSearchMovies ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  function handleChange(e) {
    setQuery(e.target.value)
  };

  const handleClick = async () => {
    if (query) {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`)
      setSearchMovies(res.data.results.map(movie => {
        return (
          <Link to={`/movie/${movie.id}`}>
            <Card>
              <CardImage src={movie.poster_path ? IMG_URL + movie.poster_path : DefatulPoster} alt="poster_img"/>
            </Card>
          </Link>
        )
      }))
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      alert("검색어를 입력하세요.")
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          onChange={handleChange}
          placeholder="검색어를 입력하세요."
        />
        <SearchButton onClick={handleClick}>검색</SearchButton>
      </SearchContainer>
      { loading ? (
        <Loading />
      ) : (
      <div>
        {searchMovies.length ? (
          <ResultContainer>
            {searchMovies}
          </ResultContainer>
        ) : (
          <NoSearchMovies>검색 결과가 없습니다.</NoSearchMovies>
        )}
      </div>
      )}
    </div>
  )
}
