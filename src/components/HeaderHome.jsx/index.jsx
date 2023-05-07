import { NavLink, useLocation } from "react-router-dom";
import "./HeaderHome.css";
import { SecondMenuIcon } from "../../assets/SecondMenuIcon.jsx";
import { CancelIcon } from "../../assets/CancelIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import { useEffect, useState } from "react";

export const HeaderHome = () => {
  const currentLocation = useLocation();
  const [value, setValue] = useState(currentLocation.state?.value || "");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleCancel = () => {
    setValue("");
  };

  useEffect(()=>{
    setValue(currentLocation.state?.value || '')
  },[currentLocation.state?.value])
  console.log(currentLocation);
  return (
    <nav className="container">
      <ul className="header">
        {currentLocation?.pathname === "/search" ? (
          <li className="mini-search-container">
            <img
              src="src/assets/google.png"
              width={100}
              className="google-logo"
            />
            <div className="header-text-search-container">
              <button type="submit" className="header-text-search-button">
                <SearchIcon className="header-text-search-icon" />
              </button>
              <input
                type="text"
                className="header-text-search"
                value={value}
                onChange={handleChange}
              />
              {value !== "" && (
                <button
                  type="submit"
                  className="header-text-cancel-button"
                  onClick={handleCancel}
                >
                  <CancelIcon className="header-text-cancel-icon" />
                </button>
              )}
            </div>
          </li>
        ) : (
          <li>
            <NavLink to="/" className="title">
              <span className="bolded">Agile Content</span> Frontend Test
            </NavLink>
          </li>
        )}
      </ul>
      <ul className="header">
        <li>
          <SecondMenuIcon className="menu" />
        </li>
        <li>
          <img
            src="https://lh3.googleusercontent.com/ogw/AOLn63Fgp76YCHXgyYItDoL6Wma525_N04l7TKPG9ZIM=s32-c-mo"
            className="avatar"
          />
        </li>
      </ul>
    </nav>
  );
};
