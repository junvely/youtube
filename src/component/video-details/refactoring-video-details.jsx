import React from "react";
import styles from "./videoDetails.module.css";

const VideoDetails = ({ video, video: { snippet } }) => (
  <>
    <div className={styles.iframeCon}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1 `}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className={styles.titleCon}>
      <span className={styles.tags}>
        {snippet.tags && snippet.tags.map((item) => `#${item}`)}
      </span>
      <h2 className={styles.title}>{snippet.title}</h2>
      <p className={styles.description}>{snippet.description}</p>
      <div className={styles.channel}>
        <img src="../img/youtube.png" alt="channel" />
        <span>{snippet.channelTitle}</span>
      </div>
    </div>
  </>
);
export default VideoDetails;
