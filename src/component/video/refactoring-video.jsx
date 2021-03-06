import React, { memo } from "react";
import styles from "./video.module.css";

const Video = memo(({ video, onVideoClick, display }) => {
  const displayType = display === "list" && styles.list;
  const displayListImg = display === "list" && styles.listImg;
  const displayListTitle = display === "list" && styles.listTitle;

  return (
    <li
      key={video.id}
      className={`${styles.video} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <img
        className={`${styles.thumbnails} ${displayListImg}`}
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnails"
        width="100%"
        height="100%"
      />
      <div className={`${styles.titleCon} ${displayListTitle}`}>
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
});
export default Video;
