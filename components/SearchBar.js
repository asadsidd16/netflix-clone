import React from "react";
import main from "@/app/main.module.scss";

const SearchBar = ({rating}) => {
  return (
    <div className={main.search}>
    <input
      type="text"
      className={main.searchTerm}
      placeholder="What are you looking for?"
    ></input>
    <button type="submit" className={main.searchButton}>
      <i class="fa fa-search"></i>
    </button>
  </div>
  );
};

export default SearchBar;
