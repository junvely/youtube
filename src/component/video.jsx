import React, { Component, memo, useEffect, useState } from "react";

// React Hook으로 Rest API 데이터 받아오기
const Video = memo(() => {
  const [video, setVideo] = useState(0);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxHeight=10&key=AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideo(data);
      });
  }, []); // 무한루프 주의 > lifecycle 무한루프 공부

  return (
    <>
      <ul>
        {video.map((item) => (
          <li>
            <iframe
              id="ytplayer"
              type="text/html"
              width="720"
              height="405"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameborder="0"
              allowfullscreen
            />
            <span className="title">{video.items.snippet.title}</span>
            <p className="text">{video.items.snippet.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Video;
