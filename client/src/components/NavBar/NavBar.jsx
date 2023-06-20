import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to={"/"} className={style.link}>
        <button className={style.b}>LANDING</button>
      </Link>

      <Link to={"/home"} className={style.link}>
        <button className={style.b}>HOME</button>
      </Link>

      <Link to={"/form"} className={style.link}>
        <button className={style.b}>FORM</button>
      </Link>
    </div>
  );
};

export default NavBar;
