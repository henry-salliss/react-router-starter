import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/welcome">
            welcome page
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/products">
            Products page
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
