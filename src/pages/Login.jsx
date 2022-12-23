import {useState} from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "../components/UI/Login.module.css";

const Login = (props) => {

  const [user, setUser] = useState({
    enteredUsername: "",
    enteredPassword: "",
  });

  const submitHandler = (event) => {
    event.preventDefault(); 

    console.log(user);

    // we reset the inputs of the form after submitting
    setUser({
      enteredUsername: "",
      enteredPassword: "",
    });
  };

  const usernameChangeHandler = (event) => {
    let newUsername = event.target.value;

    setUser((prevInfo) => {
      return {
        ...prevInfo,
        enteredUsername: newUsername,
      };
    });
  };

  const passwordChangeHandler = (event) => {
    let newPassword = event.target.value;

    setUser((prevInfo) => {
      return {
        ...prevInfo,
        enteredPassword: newPassword,
      };
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username" placeholder="Username" value={user.enteredUsername}>Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={user.enteredUsername}
        />

        <label htmlFor="password" placeholder="Password" value={user.enteredUsername}>Password</label>
        <input
          id="password"
          type="password"
          onChange={passwordChangeHandler}
          value={user.enteredPassword}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
