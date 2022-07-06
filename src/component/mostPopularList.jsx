import React, { Component } from "react";
import styles from "../component/mostPopularList.module.css";

class MostPopularList extends Component {
  state = {
    videos: [
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     chanelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
      // {
      //   id: "WB4LhvhLzlw",
      //   snippet: {
      //     title: "20 WOMEN VS 1 SIDEMEN: JIDION EDITION",
      //     channelTitle: "Sidemen",
      //   },
      // },
    ],
  };

  getData = () => {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20"
    )
      .then((Response) => Response.json())
      .then((json) => {
        this.setState({ videos: json.items });
      });
  };

  componentDidMount = () => {
    console.log("mount!");
    this.getData();
  };

  render() {
    const { videos } = this.state;
    return (
      <ul className={styles.items}>
        {videos.map((item) => (
          <li key={item.id} className={styles.item}>
            <img
              src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
              alt="thumbnails"
            />
            <a href="#" className={styles.title}>
              {item.snippet.title}
            </a>
            <span className={styles.channel}>{item.snippet.channelTitle}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default MostPopularList;
