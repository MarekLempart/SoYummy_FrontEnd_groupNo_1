// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import LoginUser from "../components/LoginUser";
// import cookies from "../features/cookies";
// import styles from "./Login.module.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const onClick = (e) => {
//     e.preventDefault();
//     cookies.setCookie("devToken");
//     navigate("../SoYummy_FrontEnd_groupNo_1/home");
//   };

//   return (
//     <div className={styles.loginPage}>
//       <form onSubmit={submit}>
//         <h1>Login</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <div className={styles.buttons}>
//           <Link to="/">
//             <button type="button">Cancel</button>
//           </Link>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//       {submitted && <LoginUser loginUserData={{ email, password }} />}
//       <Link to="../SoYummy_FrontEnd_groupNo_1/home">
//         <button className={styles.devSkip} onClick={onClick}>
//           Dev - Skip ahead
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginUser from "../components/LoginUser";
import cookies from "../features/cookies";
import symbolDefs from "../images/symbol-defs.svg";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const onClick = (e) => {
    e.preventDefault();
    cookies.setCookie("devToken");
    navigate("../SoYummy_FrontEnd_groupNo_1/home");
  };
  return (
    <div className={styles.loginPage}>
      <form className={styles.authForm} onSubmit={submit}>
        <h2 className={styles.authFormTitle}>Login</h2>
        <div className={styles.inputGroup}>
          <svg className={styles.icon}>
            <use href={`${symbolDefs}#icon-mail`} />
          </svg>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <svg className={styles.icon}>
            <use href={`${symbolDefs}#icon-password`} />
          </svg>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </div>
      </form>
      {submitted && <LoginUser loginUserData={{ email, password }} />}
      <Link to="../SoYummy_FrontEnd_groupNo_1/home">
        <button className={styles.devSkip} onClick={onClick}>
          Dev - Skip ahead
        </button>
      </Link>
    </div>
  );
};
export default Login;
