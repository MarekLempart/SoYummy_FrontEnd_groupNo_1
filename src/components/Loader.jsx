// src/components/Loader.jsx

import React from "react";
import css from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
