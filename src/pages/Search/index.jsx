import Skeleton from "../../components/Skeleton";
import { useContext, useEffect, useState } from "react";
import { SearchDetail } from "../../components/SearchDetail";
import { CardData } from "../../components/CardData";
import "./Search.css";
import { GetInformation } from "../../utils/GetInformation";
import { SearchValueContext } from "../../context";

function Search() {
  const context = useContext(SearchValueContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    if (context.valueSearch) {
      setLoading(true);
      GetInformation(context.valueSearch, setData, setLoading);
    } else setData([]);
  }, [context.valueSearch]);
  return (
    <div className="container-search">
      {loading &&
        (data && data.length) === 0 &&
        [1, 2, 3, 4].map((n) => <Skeleton key={n} />)}
      {data && data.length > 0 && (
        <div className="container-response">
          <div>
            {data.map((item) => {
              return (
                <SearchDetail
                  item={item}
                  key={item.idMeal}
                  setItemSelected={setItemSelected}
                />
              );
            })}
          </div>

          {itemSelected !== null && (
            <div className="search-more-details">
              <CardData item={itemSelected} setItemSelected={setItemSelected} />
            </div>
          )}
        </div>
      )}
      {(data === null || data.length === 0 && !loading) && (
        <div className="container-no-results">
          {context.valueSearch !== "" && (
            <p>
              No results found for <b>'{context.valueSearch}'</b>
            </p>
          )}
          <span>
            Try looking for: <b>eggs, turkey, chicken, rice, potato</b>
          </span>
        </div>
      )}
    </div>
  );
}

export default Search;
