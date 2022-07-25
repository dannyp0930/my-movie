import React, { useState } from "react";
import axios from "axios";
import Loading from "../../components/common/Loading";
import {
  NoSearchMovies,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./style";
import { API_KEY, BASE_URL } from "../../utils/API";
import Carousel from "../../components/Carousel";

function Search() {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ query, setQuery ] = useState<string>('');
  const [ searchMovies, setSearchMovies ] = useState([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  };

  async function handleClick() {
    if (query) {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`);
      setSearchMovies(res.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      alert("검색어를 입력하세요.")
    };
  };

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter'){
      handleClick();
    };
  };

  return (
    <article>
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
      <main>
        {searchMovies.length ? (
          <Carousel
            movies={searchMovies}
            title={`"${query}" 검색 결과`}
          />
        ) : (
          <NoSearchMovies>검색 결과가 없습니다.</NoSearchMovies>
        )}
      </main>
      )}
    </article>
  );
};

export default Search;