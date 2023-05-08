import "./Home.css";
import { SearchIcon } from "../../assets/SearchIcon";
import { CancelIcon } from "../../assets/CancelIcon";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { SearchValueContext } from "../../context";

const Home = () => {
  const context = useContext(SearchValueContext)
  const navigate = useNavigate();

  const handleCancel = () => {
    context.setValueSearch("");
  };

  const handleChange = (e) => {
    context.setValueSearch(e.target.value);
  };

  const handleBuscar = () => {
    navigate("/search", { state: { value: context.valueSearch } });
  };

  return (
    <div className="container-home">
      <div className="content-home">
        <img src="src/assets/google.png" width={300} className="google-logo" />
        <div className="text-search-container">
          <div type="submit" className="text-search-button">
            <SearchIcon className="text-search-icon" />
          </div>
          <input
            type="text"
            className="text-search"
            value={context.valueSearch}
            onChange={handleChange}
          />
          {context.valueSearch !== "" && (
            <button
              type="submit"
              className="text-cancel-button"
              onClick={handleCancel}
            >
              <CancelIcon className="text-cancel-icon" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="buscar-button"
          onClick={handleBuscar}
          disabled={context.valueSearch === ""}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Home;
