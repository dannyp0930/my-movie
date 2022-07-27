import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ExternalIds } from 'store/types/interfaces';
import { API_KEY, BASE_URL } from 'utils/API';
import { A, Li, Ol } from './style';

export default function Homepages({ id }: { id: number }) {
  const [ externalIds, setExternalIds] = useState<ExternalIds>({
    imdb_id: "",
    facebook_id: "",
    instagram_id: "",
    twitter_id: "",
    id: 0,
  });

  useEffect(() => {
    async function getExternalIds() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/external_ids?api_key=${API_KEY}&`);
      setExternalIds(res.data)
    };
    if (id) getExternalIds();
  }, [id]);

  return (
    <Ol>
      <Li>
        <A href={`https://www.facebook.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareFacebook} size="3x"/>
        </A>
      </Li>
      <Li>
        <A href={`https://twitter.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareTwitter} size="3x"/>
        </A>
      </Li>
      <Li>
        <A href={`https://www.instagram.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
        </A>
      </Li>
    </Ol>
  )
}
