import { NavLink } from "react-router-dom";
import "./HeaderHome.css";
import { SecondMenuIcon } from "../../assets/SecondMenuIcon.jsx";

export const HeaderHome = () => {
  return (
    <nav className="container">
      <ul className="header">
        <li>
          <NavLink to="/" className="title">
            <span className="bolded">Agile Content</span> Frontend Test
          </NavLink>
        </li>
      </ul>
      <ul className="header">
        <li>
          <SecondMenuIcon className="menu"/>
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
