import React, { memo } from "react";
import styles from "../header/header.module.css";
import SearchBar from "./search-bar/refactoring-search-bar";

const Header = memo(({ onSearch }) => (
  <header>
    <nav>
      <div className={styles.logo}>
        <img src="/img/youtube.png" alt="logo" />
        <h1>YouTube</h1>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
      <div className={styles.rightMenu}>
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
));

export default Header;
