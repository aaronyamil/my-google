import "./Home.css";
import { SearchIcon } from "../../assets/SearchIcon";
import { CancelIcon } from "../../assets/CancelIcon";
import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState('');

  const handleCancel = () => {
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="container-home">
      <div className="content-home">
        <img src="src/assets/google.png" width={300} />
        <div class="text-search-container">
          <button type="submit" className="text-search-button">
            <SearchIcon className="text-search-icon" />
          </button>
          <input type="text" className="text-search" value={value} onChange={handleChange}/>
          {value !== '' && (
            <button type="submit" className="text-cancel-button" onClick={handleCancel}>
              <CancelIcon className="text-cancel-icon"/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
