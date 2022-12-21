import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Iced Gold Jewelry Store 💎</div>
      <nav className={classes.nav}>
        <ul>
        <li>
            <NavLink to="/welcome" activeClassName={classes.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/jewelry" activeClassName={classes.active}>
              Jewelry
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={classes.active}>
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
