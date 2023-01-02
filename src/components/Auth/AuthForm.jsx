import { useHistory } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

import Button from "../UI/Button";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAajn-MZjGmP1_6jFXPZoYox1pdWOaRvmI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAajn-MZjGmP1_6jFXPZoYox1pdWOaRvmI";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Autehtification failed!";

          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      const expirationTime = new Date( new Date().getTime() + (+data.expiresIn * 1000) );
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace("/");
    }).catch(err => {
      alert(err.message);
    });

    const inputs = document.querySelectorAll('#email, #password');

    inputs.forEach(input => {
      input.value = '';
    });

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input 
          type="email" 
          id="email" 
          required 
          ref={emailInputRef}
          placeholder="Email"
           />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            placeholder="Password"
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <Button type="submit">{isLogin ? "Login" : "Create Account"}</Button>
          )}
          {isLoading && <p>Loading...</p>}
          <Button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
