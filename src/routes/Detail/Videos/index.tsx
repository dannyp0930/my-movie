import React from 'react'
import { useLocation } from 'react-router-dom';
import { Video } from 'store/types/interfaces';

interface State {
  state: {
    videos: Video[];
  };
};

function Videos() {
  const { state } = useLocation() as State;
  const video = state.videos[0]
  return (
    <div>
      {state.videos.length ?
      <iframe
        width="560" height="315"
        style={{marginTop: "1rem", border: "none"}}
        src={`https://www.youtube.com/embed/${video.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      /> :
      <></>}
    </div>
  );
};

export default Videos;
