import React, { Component } from "react";
import styles from "../component/searchBar.module.css";

class SearchBar extends Component {
  render() {
    return (
      <form className={styles.searchForm}>
        <input type="text" className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
