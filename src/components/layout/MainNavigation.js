import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

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
        <ul>
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
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}

          {/* <li>
            <NavLink to="/favorites" activeClassName={classes.active}>
              Favorites
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
