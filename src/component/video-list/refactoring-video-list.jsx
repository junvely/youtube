import React from "react";
import Video from "../video/refactoring-video";
import styles from "../video/video.module.css";

const VideoList = ({ videos, onVideoClick }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <Video key={video.id} video={video} onVideoClick={onVideoClick} />
    ))}
  </ul>
);

export default VideoList;
