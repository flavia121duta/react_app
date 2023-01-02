import style from "./Newsletter.module.css";
import { useState } from "react";
import Button from "./Button";

const Newsletter = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  // we trust the user initially
  const [isValid, setIsValid] = useState(true); 
  const [isSumbited, setIsSubmited] = useState(false);
  const [isTyping, setIsTypeing] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsTypeing(false);
    if (
      enteredValue.trim().length === 0 ||
      !/\S+@\S+\.\S+/.test(enteredValue)
    ) {
      setIsValid(false);
      return;
    }
    console.log(enteredValue);
    setEnteredValue("");

    let input = document.querySelector('#email');
    input.value = '';

    setIsSubmited(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValid && style.invalid}`}>
        <label>Subscribe to Newsletter</label>
        <input 
        type="text" 
        id="email" 
        onChange={goalInputChangeHandler} 
        onKeyDown={() => setIsTypeing(true)} />
        <Button type="submit">Add email</Button>
        {isSumbited && isValid && !isTyping && <p>Success!</p>}
      </div>
    </form>
  );
};

export default Newsletter;
