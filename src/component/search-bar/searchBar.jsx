import React, { Component } from "react";
import styles from "../css/searchBar.module.css";

class SearchBar extends Component {
  inputRef = React.createRef();

  onSubmitInputValue = (e) => {
    e.preventDefault();
    const input = this.inputRef.current.value;
    this.props.getSearchData(input);
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.onSubmitInputValue}>
        <input ref={this.inputRef} type="text" className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
