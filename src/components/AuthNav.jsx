// src/components/AuthNav/AuthNav.jsx

import { Link, Outlet, Route, Routes} from "react-router-dom";
import css from "../styles/AuthNav.module.css";
import Register from "../pages/Register";
import Login from "../pages/Login";



const AuthNav = () => {
  return (
    <>
      <nav className={css.authNav}>
        <Link to="register" className={css.navLink}>
          Register
        </Link>
        <Link to="signin" className={css.navLink}>
          Sign In
        </Link>
      </nav>
    </>
  );
};

export default AuthNav;