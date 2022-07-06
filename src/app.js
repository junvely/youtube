import React, { Component } from "react";
import "./app.css";
import logo from "./img/logo.png";
import SearchBar from "./component/searchBar";
import VideoList from "./component/videoList";

class App extends Component {
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
    return (
      <>
        <header>
          <nav>
            <h1 className="logo">
              <img src={logo} alt="logo" />
            </h1>
            <SearchBar></SearchBar>
            <div className="right-menu">
              <ul>
                <li>
                  <i className="fa-solid fa-video"></i>
                </li>
                <li>
                  <i className="fa-solid fa-ellipsis"></i>
                </li>
                <li>
                  <i className="fa-solid fa-bell"></i>
                </li>
                <li>
                  <i className="fa-solid fa-user"></i>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section>
          <VideoList videos={this.state.videos}></VideoList>
        </section>
      </>
    );
  }
}

export default App;
