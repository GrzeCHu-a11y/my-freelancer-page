import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [toogleMenu, setTooglemenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toogleNav = () => {
    setTooglemenu(!toogleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={style.nav}>
      <header className={style.header}>
        <h2 className={style.logo}>G.G Dev</h2>
      </header>
      {(toogleMenu || screenWidth > 500) && (
        <ul className={style.list}>
          <NavLink className={style.item} to="/" onClick={toogleNav}>
            Strona Główna
          </NavLink>
          <NavLink className={style.item} to="/about" onClick={toogleNav}>
            Usługi
          </NavLink>
          <NavLink className={style.item} to="/about" onClick={toogleNav}>
            Informacje
          </NavLink>
          <NavLink className={style.item} to="/about" onClick={toogleNav}>
            Kontakt
          </NavLink>
        </ul>
      )}

      {/* <button onClick={toogleNav} className={style.btn}>
        btn
      </button> */}
      <img src="src/assets/hamburger.png" alt="" className={style.btn} onClick={toogleNav} />
    </nav>
  );
};

export default Navbar;
