import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Video } from "store/types/interfaces";
import { API_KEY, BASE_URL } from "utils/API";
import {
  Button,
  Container,
  Count,
  Dl,
  Iframe,
  Li,
  NoResult,
  NoResultText,
  VideoContainer,
} from "./style";

export default function Videos({ id }: { id: number }) {
  const [moviesCnt, setMoviesCnt] = useState<number>(0);
  const [select, setSelect] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [trailers, setTrailers] = useState<Video[]>([]);
  const [teasers, setTeasers] = useState<Video[]>([]);
  const [clips, setClips] = useState<Video[]>([]);
  const [featurettes, setFeaturettes] = useState<Video[]>([]);

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`
      );
      const videos = res.data.results.filter(
        (data: Video) => data.site === "YouTube"
      );
      setMoviesCnt(videos.length);
      setTrailers(videos.filter((v: Video) => v.type === "Trailer"));
      setTeasers(videos.filter((v: Video) => v.type === "Teaser"));
      setClips(videos.filter((v: Video) => v.type === "Clip"));
      setFeaturettes(videos.filter((v: Video) => v.type === "Featurette"));
    }
    if (id) getVideos();
  }, [id]);

  function showVideos(videos: Video[]) {
    if (videos.length) {
      return (
        <VideoContainer>
          <Button
            onClick={() => setCurrent(current - 1)}
            disabled={current === 0}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </Button>
          <Iframe
            src={`https://www.youtube.com/embed/${videos[current].key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <Button
            onClick={() => setCurrent(current + 1)}
            disabled={current === videos.length - 1}
          >
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </Button>
        </VideoContainer>
      );
    } else {
      return noVideo();
    }
  }

  function noVideo() {
    return (
      <NoResult>
        <NoResultText>영상이 없습니다.</NoResultText>
      </NoResult>
    );
  }

  return (
    <Container>
      <h2>
        영상
        <span style={{ fontSize: "12px", marginLeft: "5px" }}>{moviesCnt}</span>
      </h2>
      <Dl>
        <Li
          onClick={() => {
            setSelect(0);
            setCurrent(0);
          }}
          select={select === 0}
        >
          예고편
          <Count>{trailers.length}</Count>
        </Li>
        <Li
          onClick={() => {
            setSelect(1);
            setCurrent(0);
          }}
          select={select === 1}
        >
          티저<Count>{teasers.length}</Count>
        </Li>
        <Li
          onClick={() => {
            setSelect(2);
            setCurrent(0);
          }}
          select={select === 2}
        >
          클립<Count>{clips.length}</Count>
        </Li>
        <Li
          onClick={() => {
            setSelect(3);
            setCurrent(0);
          }}
          select={select === 3}
        >
          피처렛<Count>{featurettes.length}</Count>
        </Li>
      </Dl>
      {select === 0 && showVideos(trailers)}
      {select === 1 && showVideos(teasers)}
      {select === 2 && showVideos(clips)}
      {select === 3 && showVideos(featurettes)}
    </Container>
  );
}
