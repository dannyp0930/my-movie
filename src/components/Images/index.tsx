import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "store/types/interfaces";
import { API_KEY, BASE_URL, IMG_URL } from "utils/API";
import {
  Container,
  Dl,
  Img,
  ImgCard,
  ImgContainer,
  ImgList,
  Li,
} from "./style";

export default function Images({ id, lang }: { id: number; lang: string }) {
  const [select, setSelect] = useState<number>(0);
  const [backdrops, setBackdrops] = useState<Image[]>([]);
  const [logos, setLogos] = useState<Image[]>([]);
  const [posters, setPosters] = useState<Image[]>([]);

  useEffect(() => {
    async function getImages() {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}&include_image_language=ko,${lang},null`
      );
      setBackdrops(
        res.data.backdrops.sort(function (a: Image, b: Image) {
          return a.vote_average - b.vote_average;
        })
      );
      setLogos(
        res.data.logos.sort(function (a: Image, b: Image) {
          return a.vote_average - b.vote_average;
        })
      );
      setPosters(
        res.data.posters.sort(function (a: Image, b: Image) {
          return a.vote_average - b.vote_average;
        })
      );
    }
    getImages();
  }, [id, lang]);

  function ImageSlide(images: Image[]) {
    return (
      <ImgContainer>
        <ImgList>
          {images.map((image) => {
            return (
              <ImgCard key={image.file_path}>
                <Img src={IMG_URL + image.file_path} alt="" />
              </ImgCard>
            );
          })}
        </ImgList>
      </ImgContainer>
    );
  }

  return (
    <Container>
      <h2>이미지</h2>
      <Dl>
        <Li onClick={() => setSelect(0)} select={select === 0}>
          배경<span>{backdrops.length}</span>
        </Li>
        <Li onClick={() => setSelect(1)} select={select === 1}>
          로고<span>{logos.length}</span>
        </Li>
        <Li onClick={() => setSelect(2)} select={select === 2}>
          포스터<span>{posters.length}</span>
        </Li>
      </Dl>
      {select === 0 && ImageSlide(backdrops)}
      {select === 1 && ImageSlide(logos)}
      {select === 2 && ImageSlide(posters)}
    </Container>
  );
}
