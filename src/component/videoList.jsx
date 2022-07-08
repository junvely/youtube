import React, { Component } from "react";
import Video from "./video";
import VideoDetails from "./videoDetails";
import styles from "../css/video.module.css";

class VideoList extends Component {
  state = {
    video: "",
  };

  handleVideoReturn = (video) => {
    const videoData = { ...video };
    this.setState({ video: videoData });
  };

  render() {
    const { videos } = this.props;
    const { video } = this.state;
    return (
      <>
        {video ? <VideoDetails video={this.state.video}></VideoDetails> : null}
        <ul className={styles.items}>
          {videos.map((item) => (
            <Video
              key={item.id}
              video={item}
              onVideoReturn={this.handleVideoReturn}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default VideoList;
