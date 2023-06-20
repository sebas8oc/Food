import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeDetail(id));

    return () => dispatch(cleanDetail(id));
  }, [id, dispatch]);

  const renderDiets = () => {
    if (Array.isArray(recipeDetail[0]?.diets)) {
      return recipeDetail[0].diets.map((diet) => diet.name).join(", ");
    }
    return recipeDetail[0]?.diets;
  };

  return (
    <div className={style.fondo}>
      <NavBar />
      {recipeDetail.length > 0 ? (
        <div className={style.container}>
          <div>
            <h2 className={style.name}>{recipeDetail[0].title}</h2>
            <img className={style.imagen} src={recipeDetail[0].image} alt={recipeDetail[0].title} />
            <p className={style.diets}>{renderDiets()}</p>
            <h2>Health Score: {recipeDetail[0].healthScore}</h2>
          </div>

          <div className={style.parrafos}>
            <h2>Summary</h2>
            <p>{recipeDetail[0].summary}</p>
            <h2>Steps</h2>
            <p>{recipeDetail[0].steps}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
