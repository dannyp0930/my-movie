import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Genre, ReleaseDate, ReleaseDates } from 'store/types/interfaces';
import { API_KEY, BASE_URL } from 'utils/API';
import { Certification, Container, Dot, Text } from './style'

interface BasicInfoProps {
  id: number;
  genres: Genre[];
  runtime: number;
  productionCountry: string;
};

export default function BasicInfo({ id, genres, runtime, productionCountry }: BasicInfoProps) {
  const [ releaseDatesList, setReleaseDatesList ] = useState<ReleaseDates[]>([]);
  const [ certification, setCertification ] = useState<string>("");
  const [ KRreleaseDate, setKRReleaseDate ] = useState<ReleaseDate>({
    certification: "",
    iso_639_1: "",
    release_date: "",
    type: 0,
    note: "",
  });
  const [ ORreleaseDate, setORReleaseDate ] = useState<ReleaseDate>({
    certification: "",
    iso_639_1: "",
    release_date: "",
    type: 0,
    note: "",
  });

  useEffect(() => {
    async function getReleaseDatesList() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`);
      setReleaseDatesList(res.data.results);
    };
    if (id) getReleaseDatesList();
  }, [id]);

  useEffect(() => {
    if (releaseDatesList.length) {
      const res = releaseDatesList.filter((data: ReleaseDates) => data.iso_3166_1 === "KR")[0];
      if (res) {
        setKRReleaseDate(res.release_dates.filter((data: ReleaseDate) => data.type !== 1)[0]);
      };
    };
  }, [releaseDatesList]);

  useEffect(() => {
    if (releaseDatesList.length) {
      const res = releaseDatesList.filter((data: ReleaseDates) => data.iso_3166_1 === productionCountry)[0];
      if (res) {
        setORReleaseDate(res.release_dates.filter((data: ReleaseDate) => data.type !== 1)[0]);
      };
    };
  }, [releaseDatesList, productionCountry]);

  useEffect(() => {
    if (KRreleaseDate.certification) {
      setCertification(KRreleaseDate.certification)
    } else if (ORreleaseDate.certification) {
      setCertification(ORreleaseDate.certification)
    };
  }, [KRreleaseDate, ORreleaseDate]);
  
  return (
    <Container>
      {certification && <Certification>{certification}</Certification>}
      <Text>
        {KRreleaseDate.release_date ? `${KRreleaseDate.release_date.slice(0, 10)}(KR)` : `${ORreleaseDate.release_date.slice(0, 10)}(${productionCountry})`}
      </Text>
      <Dot>·</Dot>
      <Text>
        {genres.map(genre => genre.name).join(', ')}
      </Text>
      <Dot>·</Dot>
      <Text>
        {parseInt(String(runtime / 60))}h {runtime % 60}m
      </Text>
    </Container>
  );
};
