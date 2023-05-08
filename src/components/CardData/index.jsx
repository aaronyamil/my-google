import "./CardData.css";

export const CardData = ({ item = {}, setItemSelected }) => {
  return (
    <div className="card-container">
      <button className="close-btn" onClick={() => setItemSelected(null)}>
        X
      </button>
      <img src={item?.strMealThumb} alt={item?.strMeal} className="card-img" />
      <div className="search-detail-link">
        <a href={item?.strYoutube} target="_blank" className="search-a">
          {item?.strYoutube}
        </a>
      </div>
      <div className="card-detail-name">{item?.strMeal}</div>
      <div className="card-detail-detail">{item?.strInstructions}</div>
    </div>
  );
};
