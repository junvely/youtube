import React, { Component } from "react";
import styles from "../css/video.module.css";

class Video extends Component {
  handleVideoSubmit = () => {
    this.props.onVideoReturn(this.props.video);
  };

  render() {
    const { video } = this.props;
    const videoId = video.id.videoId;

    return (
      <li
        key={videoId ? videoId : video.id}
        className={styles.item}
        onClick={this.handleVideoSubmit}
      >
        <img
          src={`https://img.youtube.com/vi/${
            videoId ? videoId : video.id
          }/maxresdefault.jpg`}
          alt="thumbnails"
        />
        <div className={styles.titleCon}>
          <h2 className={styles.title}>{video.snippet.title}</h2>
          <span className={styles.channel}>{video.snippet.channelTitle}</span>
        </div>
      </li>
    );
  }
}

export default Video;
