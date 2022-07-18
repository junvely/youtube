import React, { memo } from "react";
import styles from "../header/header.module.css";
import nightStyles from "../night-mode.module.css";
import SearchBar from "./search-bar/refactoring-search-bar";

const Header = memo(({ onSearch, onNightMode, nightMode }) => {
  const nightBg = nightMode && nightStyles.nightBg;
  const nightColor = nightMode && nightStyles.nightColor;
  const onNightToggle = (e) => {
    if (e.target.checked) {
      onNightMode(true);
    } else {
      onNightMode(false);
    }
  };

  return (
    <header className={nightBg}>
      <nav>
        <div className={styles.logo}>
          <img src="/img/youtube.png" alt="logo" />
          <h1 className={nightColor}>YouTube</h1>
        </div>
        <SearchBar onSearch={onSearch}></SearchBar>
        <div className={nightStyles.toggleCon}>
          {nightMode ? "🌙" : "☀️"}
          <label htmlFor="toggle" className={nightStyles.toggle}>
            <input
              type="checkBox"
              id="toggle"
              className={nightStyles.toggleInput}
              onClick={onNightToggle}
            />
            <span className={nightStyles.slider}></span>
          </label>
        </div>
        <div className={styles.rightMenu}>
          <ul className={nightColor}>
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
  );
});

export default Header;
