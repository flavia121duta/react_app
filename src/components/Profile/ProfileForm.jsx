import { useHistory } from 'react-router-dom';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from "../UI/Button";
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    const url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAajn-MZjGmP1_6jFXPZoYox1pdWOaRvmI";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      // always succeds!

      history.replace("/");
    });

    const input = document.querySelector('#new-password');
    input.value = "";

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>Change Password</label>
        <input 
        type='password' 
        id='new-password' 
        minLength="7" 
        placeholder='New Password'
        ref={newPasswordInputRef} />
      </div>
      <Button type="submit" className={classes.action}>Change Password</Button>
    </form>
  );
}

export default ProfileForm;
