import React, { Component, useState } from "react";
import Video from "../video/refactoring-video";
import VideoDetails from "../video-details/refactoring-video-details";
import styles from "../video/video.module.css";

const VideoList = (props) => {
  const [video, setVideo] = useState(0);

  const handleVideoReturn = (video) => {
    const videoData = { ...video };
    setVideo({ video: videoData });
  };

  return (
    <>
      {video ? <VideoDetails video={video}></VideoDetails> : null}
      <ul className={styles.items}>
        {props.videos.map((video) => (
          <Video
            key={video.id}
            video={video}
            onVideoReturn={handleVideoReturn}
          />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
