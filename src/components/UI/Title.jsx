import classes from "./Title.module.css";

const Title = () => {
  const hour = new Date().getHours();
  let message = "";

  if (hour >= 0 && hour < 12) {
    message = "Good Morning";
  } else if (hour >= 12 && hour <= 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return <h1 className={classes.title}>{message}</h1>;
};

export default Title;
