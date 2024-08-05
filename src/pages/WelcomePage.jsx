// src/pages/WelcomePage.jsx

import AuthNav from "../components/AuthNav.jsx";
import css from "../styles/WelcomePage.module.css";
import { Outlet } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className={css.welcomeContainer}>
      <AuthNav />
      <h1 className={css.welcomeTitle}>Welcome to the app!</h1>
      <p className={css.welcomeSubtitle}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time..
      </p>
    <Outlet />
    </div>
  );
};

export default WelcomePage;
