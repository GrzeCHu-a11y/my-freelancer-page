import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <header>
        <h3>G.G Dev</h3>
      </header>
      <NavLink className={style.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={style.navlink} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
