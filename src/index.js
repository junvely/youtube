import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./service/youtube";

const youtube = new Youtube("AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App youtube={youtube} />
  </>
);
