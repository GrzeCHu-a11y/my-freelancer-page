import style from "./Home.module.scss";
import img from "../assets/bigphoto.png";

const Home = () => {
  return (
    <div>
      <section className={style.home}>
        <div className={style.wrapper}>
          <div className={style.textContainer}>
            <header className={style.header}>
              <h1 className={style.h1}>
                Profesjonalne strony internetowe <br /> Grzegorz Gończowski
              </h1>
            </header>
            <p className={style.p}>
              Rozwiń swoją firmę w Internecie. Profesjonalne usługi zwiększające ilość klientów, które znajdziesz w jednym miejscu.
            </p>
          </div>
          <div className={style.imgContainer}>
            <img src={img} alt="" className={style.bigPhoto} />
          </div>
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.button}>sprawdz usługi</button>
          <button className={style.specialButton}>czytaj więcej</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
