import React, { memo, useRef } from "react";
import styles from "./searchBar.module.css";

const SearchBar = memo(({ onSearch }) => {
  const inputRef = useRef();
  const onSubmitInputValue = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    onSearch(input);
  };

  return (
    <form className={styles.searchForm} onSubmit={onSubmitInputValue}>
      <input ref={inputRef} type="text" className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
});

export default SearchBar;
