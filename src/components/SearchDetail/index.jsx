import React from "react";
import "./SearchDetail.css";
import { CardData } from "../CardData";

export const SearchDetail = ({ item, setItemSelected }) => {
  function cutString(str, length) {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else return str;
  }

  return (
    <div className="search-detail-container">
      <div className="search-detail-list">
        <div className="search-detail-link">
          <a href={item?.strYoutube} target="_blank" className="search-a">
            {item?.strYoutube}
          </a>
        </div>
        <div
          className="search-detail-name"
          onClick={() => setItemSelected(item)}
        >
          {item?.strMeal}
        </div>
        <div className="search-detail-detail">
          {cutString(item?.strInstructions, 200)}
        </div>
      </div>
    </div>
  );
};
