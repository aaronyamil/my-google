import { NavLink, useLocation } from "react-router-dom";
import "./HeaderHome.css";
import { SecondMenuIcon } from "../../assets/SecondMenuIcon.jsx";
import { CancelIcon } from "../../assets/CancelIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import { useContext } from "react";
import { SearchValueContext } from "../../context";

export const HeaderHome = () => {
  const currentLocation = useLocation();
  const context = useContext(SearchValueContext);

  const handleChange = (e) => {
    context.setValueSearch(e.target.value);
  };
  const handleCancel = () => {
    context.setValueSearch("");
  };

  return (
    <nav className="container">
      <ul className="header">
        {currentLocation?.pathname === "/search" ? (
          <li className="mini-search-container">
            <NavLink to="/" className="title">
              <img
                src="assets/google.png"
                width={100}
                className="google-logo"
              />
            </NavLink>

            <div className="header-text-search-container">
              <button type="submit" className="header-text-search-button">
                <SearchIcon className="header-text-search-icon" />
              </button>
              <input
                type="text"
                className="header-text-search"
                value={context.valueSearch}
                onChange={handleChange}
              />
              {context.valueSearch !== "" && (
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
        <li className="menu">
          <SecondMenuIcon  />
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
