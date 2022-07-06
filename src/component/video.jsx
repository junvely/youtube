import React, { Component } from "react";
import styles from "./video.module.css";

class Video extends Component {
  handleVideoSubmit = () => {
    this.props.onVideoReturn(this.props.video);
  };
  render() {
    const { video } = this.props;
    return (
      <li
        key={video.id}
        className={styles.item}
        onClick={this.handleVideoSubmit}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt="thumbnails"
        />
        <span className={styles.title}>{video.snippet.title}</span>
        <span className={styles.channel}>{video.snippet.channelTitle}</span>
      </li>
    );
  }
}

export default Video;
