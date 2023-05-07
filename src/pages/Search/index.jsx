import { useLocation } from "react-router";
import Skeleton from "../../components/Skeleton";
import { useEffect, useState } from "react";
import { SearchDetail } from "../../components/SearchDetail";

function Search(props) {
  const location = useLocation();
  console.log(location.state);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("entro");
    if (location?.state?.value) {
      fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          location?.state?.value
      )
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Sorry, some error occurred while fetching your blogs."
            );
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          // setError(false);
          console.log("response", data);
          setData(data.meals);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
    }
  }, [location?.state?.value]);
  return (
    <div className="container-search">
      {loading && [1, 2, 3, 4].map((n) => <Skeleton key={n} />)}
      {data && data.length > 0 &&
        data.map((item) => {
          return <SearchDetail item={item} key={item.idMeal}/>;
        })}
      {data === null && (
        <div>
          <p>No results found for <b>{location?.state?.value}</b></p>
          <span>
            Try looking for: <b>eggs, turkey, chicken, rice, potato</b>
          </span>
        </div>
      )}
    </div>
  );
}

export default Search;
