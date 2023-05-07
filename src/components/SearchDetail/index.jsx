import React from "react";
import "./SearchDetail.css";

export const SearchDetail = ({ item }) => {
  function cutString(str, length) {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else return str;
  }

  return (
    <div className="search-detail-container">
      <div className="search-detail-link">
        <a href={item?.strYoutube} target="_blank" className="search-a">
          {item?.strYoutube}
        </a>
      </div>
      <div className="search-detail-name">{item?.strMeal}</div>
      <div className="search-detail-detail">
        {cutString(item?.strInstructions, 200)}
      </div>
    </div>
  );
};
