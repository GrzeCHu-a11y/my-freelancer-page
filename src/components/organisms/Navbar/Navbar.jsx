import { NavLink } from "react-router-dom";
import { useState } from "react";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [toogleMenu, setTooglemenu] = useState(false);

  const toogleNav = () => {
    setTooglemenu(!toogleMenu);
  };

  return (
    <nav className={style.nav}>
      <header className={style.header}>
        <h3>G.G Dev</h3>
      </header>
      <div className={style.hamCon}></div>
      <img className={style.hamburger} onClick={toogleNav} src="src/assets/hamburger.png" alt="" />
      <div className={`${toogleMenu ? style.itemsContainerOpen : style.itemsContainerClose}`}>
        <NavLink className={style.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={style.navlink} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
