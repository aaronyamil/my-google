import "./Home.css";
import { SearchIcon } from "../../assets/SearchIcon";
import { CancelIcon } from "../../assets/CancelIcon";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBuscar = () => {
    console.log("buscar", value);
    navigate("/search", { state: { value: value } });
  };

  return (
    <div className="container-home">
      <div className="content-home">
        <img src="src/assets/google.png" width={300} className="google-logo" />
        <div className="text-search-container">
          <button type="submit" className="text-search-button">
            <SearchIcon className="text-search-icon" />
          </button>
          <input
            type="text"
            className="text-search"
            value={value}
            onChange={handleChange}
          />
          {value !== "" && (
            <button
              type="submit"
              className="text-cancel-button"
              onClick={handleCancel}
            >
              <CancelIcon className="text-cancel-icon" />
            </button>
          )}
        </div>
        {value !== "" && (
          <button
            type="submit"
            className="buscar-button"
            onClick={handleBuscar}
          >
            Buscar
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
