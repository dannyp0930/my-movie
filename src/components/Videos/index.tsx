import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Video } from 'store/types/interfaces';
import { API_KEY, BASE_URL } from 'utils/API';
import { Container, Count, Dl, Li } from './style';

export default function Videos({ id }: { id: number }) {
  const [ moviesCnt, setMoviesCnt ] = useState<number>(0);
  const [ select, setSelect ] = useState<number>(0);
  const [ trailers, setTrailers] = useState<Video[]>([]);
  const [ teasers, setTeasers] = useState<Video[]>([]);
  const [ clips, setClips] = useState<Video[]>([]);
  const [ featurettes, setFeaturettes] = useState<Video[]>([]);

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`);
      const videos = res.data.results.filter((data: Video) => data.site === "YouTube");
      setMoviesCnt(videos.length)
      setTrailers(videos.filter((v: Video) => v.type === "Trailer"));
      setTeasers(videos.filter((v: Video) => v.type === "Teaser"));
      setClips(videos.filter((v: Video) => v.type === "Clip"));
      setFeaturettes(videos.filter((v: Video) => v.type === "Featurette"));
    };
    if (id) getVideos();
  }, [id]);

  function showVideo() {
    if (select === 0 && trailers.length) {
      return (
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${trailers[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      );
    } else if (select === 1 && teasers.length) {
      return (
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${teasers[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      );
    } else if (select === 2 && clips.length) {
      return (
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${clips[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      );
    } else if (select === 3 && featurettes.length) {
      return (
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${featurettes[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      );
    } else {
      return noVideo();
    };
  };

  function noVideo() {
    return (
      <div
        style={{
          marginTop:"16px",
          width:"560px",
          height:"320px"
      }}>
        영상이 없습니다.
      </div>
    );
  };

  return (
    <Container>
      <h2>영상<span style={{fontSize: "12px", marginLeft:"5px"}}>{moviesCnt}</span></h2>
      <Dl>
        <Li 
          onClick={() => setSelect(0)}
          select={select === 0}
        >
            예고편
            <Count>{trailers.length}</Count>
        </Li>
        <Li
          onClick={() => setSelect(1)}
          select={select === 1}
        >
          티저<Count>{teasers.length}</Count>
        </Li>
        <Li
          onClick={() => setSelect(2)}
          select={select === 2}
        >
          클립<Count>{clips.length}</Count>
        </Li>
        <Li
          onClick={() => setSelect(3)}
          select={select === 3}
        >
          피처렛<Count>{featurettes.length}</Count>
        </Li>
      </Dl>
      {showVideo()}
    </Container>
  );
};
