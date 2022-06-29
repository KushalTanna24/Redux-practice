import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { authenticationActions } from "../store/index";
import { useDispatch } from "react-redux";

const Header = () => {
  const noEffectHandler = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };

  const isAuth = useSelector((managedData) => managedData.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/" onClick={noEffectHandler}>
                My Products
              </a>
            </li>
            <li>
              <a href="/" onClick={noEffectHandler}>
                My Sales
              </a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
