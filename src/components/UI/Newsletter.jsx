import style from "./Newsletter.module.css";
import { useState } from "react";
import Button from "./Button";

const Newsletter = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); // we trust the user initially

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredValue.trim().length === 0 ||
      !/\S+@\S+\.\S+/.test(enteredValue)
    ) {
      setIsValid(false);
      return;
    }
    console.log(enteredValue);
    // props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValid && style.invalid}`}>
        <label>Subscribe to Newsletter</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <Button type="submit">Add email</Button>
      </div>
    </form>
  );
};

export default Newsletter;
