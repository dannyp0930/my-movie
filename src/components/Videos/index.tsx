import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/API';
import { Video } from 'store/types/interfaces';

export default function Videos({ id }: { id: number }) {
  const [ videos, setVideos ] = useState<Video[]>([]);
  const [ trailers, setTrailers] = useState<Video[]>([]);
  const [ clips, setClips] = useState<Video[]>([]);
  const [ teasers, setTeasers] = useState<Video[]>([]);
  const [ featurettes, setFeaturettes] = useState<Video[]>([]);

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`);
      setVideos(res.data.results.filter((data: Video) => data.site === "YouTube"));
    };
    getVideos();
  }, [id]);

  useEffect(() => {
    if (videos.length) {
      setTrailers(videos.filter((data: Video) => data.type === "Trailer"));
      setClips(videos.filter((data: Video) => data.type === "Clip"));
      setTeasers(videos.filter((data: Video) => data.type === "Teaser"));
      setFeaturettes(videos.filter((data: Video) => data.type === "Featurette"));
    }
  }, [videos]);

  return (
    <>
      <h2>동영상<span style={{marginLeft: "6px", fontSize: "12px"}}>{videos.length}</span></h2>
      {trailers.length ?
      <>
        <h3>예고편<span style={{marginLeft: "6px", fontSize: "12px"}}>{trailers.length}</span></h3>
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${trailers[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </> : <></>}
      {teasers.length !==0 ?
      <>
        <h3>티저<span style={{marginLeft: "6px", fontSize: "12px"}}>{teasers.length}</span></h3>
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${teasers[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </> : <></>}
      {clips.length ?
      <>
        <h3>클립<span style={{marginLeft: "6px", fontSize: "12px"}}>{clips.length}</span></h3>
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${clips[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </> : <></>}
      {featurettes.length ?
      <>
        <h3>피처렛<span style={{marginLeft: "6px", fontSize: "12px"}}>{featurettes.length}</span></h3>
        <iframe
          width="560" height="315"
          style={{marginTop: "1rem", border: "none"}}
          src={`https://www.youtube.com/embed/${featurettes[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </> : <></>}
    </>
  )
}
