import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import LoginUser from "../components/LoginUser";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.loginPage}>
            <form onSubmit={submit}>
                <h1>Login</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div className={styles.buttons}>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            {submitted && <LoginUser loginUserData={{ email, password }} />}
            <Link to="../SoYummy_FrontEnd_groupNo_1/home">
              <button className={styles.devSkip}>Dev - Pomiń i przejdź dalej</button>
            </Link>
        </div>
    );
};

export default Login;
