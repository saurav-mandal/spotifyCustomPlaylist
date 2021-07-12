import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [serachValue, setValue] = useState("");

  function search() {
    props.onSearch(serachValue);
  }
  function handleTermChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
