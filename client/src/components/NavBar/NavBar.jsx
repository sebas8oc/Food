import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
      <button className={style.b}>
        <Link to={"/"} className={style.link}>LANDING</Link>
      </button>

      <button className={style.b}>
        <Link to={"/home"} className={style.link}> Home</Link>
      </button>
      
      <button className={style.b}>
        <Link to={"/form"} className={style.link}> Form</Link>
      </button>
    </div>
  );
};

export default NavBar;
