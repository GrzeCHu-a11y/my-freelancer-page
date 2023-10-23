import style from "./Home.module.scss";
import img from "../assets/bigphoto.png";

const Home = () => {
  return (
    <section className={style.home}>
      <header className={style.header}>
        <h1 className={style.h1}>Profesjonalne strony internetowe Grzegorz Gończowski</h1>
      </header>
      <p className={style.p}>
        Rozwiń swoją firmę w Internecie. Profesjonalne usługi zwiększające ilość klientów, które znajdziesz w jednym miejscu.
      </p>
      <img src={img} alt="" className={style.bigPhoto} />
      <div className={style.buttonsContainer}>
        <button className={style.specialButton}>Czytaj więcej</button>
        <button className={style.button}>Kontakt</button>
      </div>
    </section>
  );
};

export default Home;
