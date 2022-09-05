import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/common/Loading";
import {
  NoSearchMovies,
} from "./style";
import { API_KEY, BASE_URL } from "../../utils/API";
import Carousel from "../../components/Carousel";
import { useLocation } from "react-router-dom";
import { Movie } from "store/types/interfaces";

function Search() {
  const { state } = useLocation();
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ searchMovies, setSearchMovies ] = useState<Movie[]>([]);

  useEffect(() => {
    async function getSearch() {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${state}&language=ko-KR`);
      setSearchMovies(res.data.results);
    }
    getSearch();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [state])

  return (
    <article>
      { loading ? (
        <Loading />
      ) : (
      <main>
        {searchMovies.length ? (
          <Carousel
            movies={searchMovies}
            title={`"${state}" 검색 결과`}
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