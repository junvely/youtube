import React, { Component } from "react";
import Video from "./video";
import VideoDetails from "./videoDetails";
import styles from "./video.module.css";

class VideoList extends Component {
  handleVideoReturn = (video) => {
    // 클릭한 비디오 정보 가져오기
    console.log(video.id);
  };
  render() {
    const { videos } = this.props;
    return (
      <>
        <VideoDetails></VideoDetails>
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
