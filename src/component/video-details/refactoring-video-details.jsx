import React, { Component } from "react";
import styles from "./videoDetails.module.css";

class VideoDetails extends Component {
  render() {
    const { video } = this.props;
    const videoId = video.id.videoId ? video.id.videoId : video.id;
    const tags =
      video.snippet.tags &&
      video.snippet.tags.map((item) => {
        return `#${item}`;
      });
    return (
      <div className={styles.videoDetailCon}>
        <div className={styles.iframeCon}>
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.titleCon}>
          <span className={styles.tags}>{tags}</span>
          <h2 className={styles.title}>{video.snippet.title}</h2>
          <p className={styles.description}>{video.snippet.description}</p>
          <div className={styles.channel}>
            <img src="../logo.png" alt="channel" />
            <span>{video.snippet.channelTitle}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
