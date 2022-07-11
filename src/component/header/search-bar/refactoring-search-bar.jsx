import React, { useRef } from "react";
import styles from "../search-bar/searchBar.module.css";

const SearchBar = (props) => {
  const inputRef = useRef();

  const handleSubmitInput = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    props.getSearchData(input);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmitInput}>
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder="Video Search"
      />
      <button type="submit" className={styles.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
