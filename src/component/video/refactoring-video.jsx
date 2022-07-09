import React, { useState } from "react";
import styles from "./video.module.css";

const Video = ({ video }) => {
  // const video = props.video;
  const videoId = video.id.videoId ? video.id.videoId : video.id;

  const handleVideoSubmit = () => {
    // props.onVideoReturn(video);
  };

  return (
    <li key={videoId} className={styles.video} onClick={handleVideoSubmit}>
      <img
        className={styles.thumbnails}
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt="thumbnails"
      />
      <div className={styles.titleCon}>
        <img
          className={styles.channelImg}
          src="/img/youtube.png"
          alt="channel"
        />
        <div className="channel">
          <h2 className={styles.title}>{video.snippet.title}</h2>
          <span className={styles.channelName}>
            {video.snippet.channelTitle}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Video;
