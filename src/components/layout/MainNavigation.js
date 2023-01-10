import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import CartButton from "../Cart/CartButton";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Iced Gold Jewelry Store 💎</div>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <div className={classes.pages}>
            {isLoggedIn && (
              <li>
                <NavLink to="/home" activeClassName={classes.active}>
                  Home
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/jewelry" activeClassName={classes.active}>
                  Jewelry
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </div>

          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          <div className={classes.buttons}>
            {isLoggedIn && (
              <li className={classes.btn}>
                <CartButton />
              </li>
            )}

            {isLoggedIn && (
              <li className={classes.btn}>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
