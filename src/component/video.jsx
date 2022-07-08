import React, { Component } from "react";
import styles from "../css/video.module.css";
import channelImg from "../img/youtube.png";

class Video extends Component {
  handleVideoSubmit = () => {
    this.props.onVideoReturn(this.props.video);
  };

  render() {
    const { video } = this.props;
    const videoId = video.id.videoId ? video.id.videoId : video.id;
    return (
      <li
        key={videoId}
        className={styles.item}
        onClick={this.handleVideoSubmit}
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="thumbnails"
        />
        <div className={styles.titleCon}>
          <img src={channelImg} alt="channel" />
          <div className="channel">
            <h2 className={styles.title}>{video.snippet.title}</h2>
            <span className={styles.channelName}>
              {video.snippet.channelTitle}
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
