import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/common/Loading";
import {
  NoSearchMovies,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "../styles/styles";
import { API_KEY, BASE_URL } from "../utils/API";
import Carousel from "../components/Carousel";

export function Search() {
  const [ query, setQuery ] = useState('');
  const [ searchMovies, setSearchMovies ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  function handleChange(e) {
    setQuery(e.target.value)
  };

  async function handleClick() {
    if (query) {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`)
      setSearchMovies(res.data.results)
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      alert("검색어를 입력하세요.")
    }
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter'){
      handleClick();
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="검색어를 입력하세요."
        />
        <SearchButton onClick={handleClick}>검색</SearchButton>
      </SearchContainer>
      { loading ? (
        <Loading />
      ) : (
      <div>
        {searchMovies.length ? (
          <Carousel movies={searchMovies}></Carousel>
        ) : (
          <NoSearchMovies>검색 결과가 없습니다.</NoSearchMovies>
        )}
      </div>
      )}
    </div>
  )
}
