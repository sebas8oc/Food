import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={style.blur}></div>
      <div className={style.container}>
        <div className={style.wh}>
        <h1 className={style.welcome}>Welcome to RECIPES-PI</h1>
        </div>
        <Link to={"/home"}>
          <button className={style.boton}>View the Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
