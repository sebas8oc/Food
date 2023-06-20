import { Link } from "react-router-dom";
import style from "./Recipe.module.css";

const Recipe = ({title, id, image, diets, healthScore, createdInDb}) => {
  return (
    <div className={style.container}>
      <Link to={`/recipe/${id}`} className={style.link}>
      <h2>{title}</h2>
      <img src={image} alt={title}/>
      </Link>
      <h2>DIETS</h2>
      <p>{diets}</p>
      <p>{healthScore}</p>
    </div>
  )
}

export default Recipe;