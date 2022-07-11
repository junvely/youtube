import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./component/header/refactoring-header";
// import SearchBar from "./component/searchBar";
import VideoList from "./component/video-list/refactoring-video-list";

const App = () => {
  const [videos, setVideos] = useState([
    {
      kind: "youtube#searchResult",
      etag: "W1jIxsjtu7y6Tcbtd2G_X623Mf0",
      id: {
        kind: "youtube#video",
        videoId: "-3umsjsF580",
      },
      snippet: {
        publishedAt: "2020-10-03T04:22:01Z",
        channelId: "UCapDCqnZAPm7UvsZqmkf2CQ",
        title: "블랙핑크 전곡모음 (1시간25분) 가사포함",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/-3umsjsF580/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/-3umsjsF580/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/-3umsjsF580/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "블링블핑 Bling BlackPink",
        liveBroadcastContent: "none",
        publishTime: "2020-10-03T04:22:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "TSrxtEyMxmukyWUvrsXm80BF5Mw",
      id: {
        kind: "youtube#video",
        videoId: "dyRsYk0LyA8",
      },
      snippet: {
        publishedAt: "2020-10-02T04:00:13Z",
        channelId: "UCOmHUn--16B90oW2L6FRR3A",
        title: "BLACKPINK - &#39;Lovesick Girls&#39; M/V",
        description:
          "BLACKPINK - Lovesick Girls 영원한 밤 창문 없는 방에 우릴 가둔 love What can we say 매번 아파도 외치는 love 다치고 망가져도 나 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/dyRsYk0LyA8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/dyRsYk0LyA8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/dyRsYk0LyA8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "BLACKPINK",
        liveBroadcastContent: "none",
        publishTime: "2020-10-02T04:00:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "nLIHb0vvUKoXRPb1fjMa2F7Jx9s",
      id: {
        kind: "youtube#video",
        videoId: "G7ONrDab6cU",
      },
      snippet: {
        publishedAt: "2020-10-10T08:01:45Z",
        channelId: "UCe52oeb7Xv_KaJsEzcKXJJg",
        title:
          "(ENGsub)[쇼! 음악중심 4K] 블랙핑크 -Pretty Savage (BLACKPINK -Pretty Savage) MBC 201010 방송",
        description:
          "More “Show Music Core” clips are available iMBC http://www.imbc.com/broad/tv/ent/musiccore/vod/index.html WAVVE ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/G7ONrDab6cU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/G7ONrDab6cU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/G7ONrDab6cU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MBCkpop",
        liveBroadcastContent: "none",
        publishTime: "2020-10-10T08:01:45Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qb49PXMUDZ8Aa5o-Z_ka1x03204",
      id: {
        kind: "youtube#video",
        videoId: "ez51zZrq744",
      },
      snippet: {
        publishedAt: "2020-07-08T08:00:11Z",
        channelId: "UCe52oeb7Xv_KaJsEzcKXJJg",
        title:
          "(ENGsub) 블랙핑크 스페셜 ★&#39;마지막처럼 &#39;부터 &#39;How You Like That&#39;까지★ (BLACKPINK SPECIAL 23분 무대 모음)",
        description:
          "MBC에서의 무대가 없는 곡은 영상에 포함되지 않을 수 있습니다. #블랙핑크 #BLACKPINK #HISDOLY #마지막처럼 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ez51zZrq744/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ez51zZrq744/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ez51zZrq744/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MBCkpop",
        liveBroadcastContent: "none",
        publishTime: "2020-07-08T08:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "o6dm1fXCx1PpoTqzCSnU6m1mti8",
      id: {
        kind: "youtube#video",
        videoId: "Amq-qlqbjYA",
      },
      snippet: {
        publishedAt: "2017-06-22T09:00:01Z",
        channelId: "UCOmHUn--16B90oW2L6FRR3A",
        title:
          "BLACKPINK - &#39;마지막처럼 (AS IF IT&#39;S YOUR LAST)&#39; M/V",
        description:
          "BLACKPINK - 마지막처럼 (AS IF IT'S YOUR LAST) 너 뭔데 자꾸 생각나 자존심 상해 애가 타 얼굴이 뜨겁고 가슴은 계속 뛰어 내 몸이 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Amq-qlqbjYA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Amq-qlqbjYA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Amq-qlqbjYA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "BLACKPINK",
        liveBroadcastContent: "none",
        publishTime: "2017-06-22T09:00:01Z",
      },
    },
  ]);

  useEffect(() => {
    console.log("mount!");
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // fetch(
    //   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=3&key=AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log("error", error));
  }, []);

  const handleGetSearchData = (input) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${input}&type=video&key=AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((item) => setVideos(item))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Header getSearchData={handleGetSearchData}></Header>
      <section>
        <VideoList videos={videos}></VideoList>
      </section>
    </>
  );
};

export default App;
