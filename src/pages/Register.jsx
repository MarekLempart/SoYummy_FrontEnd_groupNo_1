// src/pages/Register.jsx

// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import Signup from "../components/SignupUser";
import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName]= useState()
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.registerPage}>
      <form onSubmit={submit}>
      <h1>Register</h1>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <div className={styles.buttons}>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button type="submit">Register</button>
        </div>
      </form>
      {submitted && <Signup singupData={{name, email, password }} />}
      <Link to="../SoYummy_FrontEnd_groupNo_1/home">
              <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
      </Link>
    </div>
  );
};

export default Register;
