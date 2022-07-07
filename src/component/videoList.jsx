import React, { Component } from "react";
import Video from "./video";
import VideoDetails from "./videoDetails";
import styles from "../css/video.module.css";

class VideoList extends Component {
  state = {
    video: "",
  };
  handleVideoReturn = (video) => {
    const videoData = { video };
    console.log(videoData);
    this.setState({ video: videoData });
  };

  render() {
    const { videos } = this.props;
    console.log(this.state.video);
    return (
      <>
        <VideoDetails video={this.state.video}></VideoDetails>
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
