import React from "react";
import styles from "./video.module.css";

const Video = ({ video, onVideoClick }) => (
  <li
    key={video.id}
    className={styles.video}
    onClick={() => onVideoClick(video)}
  >
    <img
      className={styles.thumbnails}
      src={video.snippet.thumbnails.high.url}
      alt="thumbnails"
    />
    <div className={styles.titleCon}>
      <img className={styles.channelImg} src="/img/youtube.png" alt="channel" />
      <div className="channel">
        <h2 className={styles.title}>{video.snippet.title}</h2>
        <span className={styles.channelName}>{video.snippet.channelTitle}</span>
      </div>
    </div>
  </li>
);
export default Video;
