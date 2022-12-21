import styles from "../components/UI/Login.module.css";

const Login = (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <input type="password" placeholder="Confirm Password" />
        )}

        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Login;
