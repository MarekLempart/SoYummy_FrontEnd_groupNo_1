// src\components\Header\Navigation.jsx
import { NavLink } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const Navigation = () => {
  return (
    <nav className="HeaderNav">
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/categories/:categoryName">
        Categories
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/add">
        Add Recipes
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/my">
        My Recipes
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/favorite">
        Favorites
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/shopping-list">
        Shopping List
      </NavLink>
      <NavLink className="HeaderStyledLink" to="/search">
        <svg className="HeaderIconSearch">
          <use xlinkHref={`${symbolDefs}#icon-search`} />
        </svg>
        <span className="HeaderSearchText">Search</span>
      </NavLink>
    </nav>
  );
};
