export const GetInformation = (value, setData, setLoading) => {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error("Sorry, some error occurred while fetching your blogs.");
      }
      return response.json();
    })
    .then((data) => {
      setLoading(false);
      setData(data.meals);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
