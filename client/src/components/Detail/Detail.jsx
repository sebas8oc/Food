import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector(state => state.recipeDetail)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getRecipeDetail(id))

    return () => dispatch(cleanDetail(id))
  }, [id, dispatch])

  const renderDiets = () => {
    if (Array.isArray(recipeDetail[0]?.diets)) {
      return recipeDetail[0].diets.map(diet => diet.name).join(", ");
    }
    return recipeDetail[0]?.diets;
  };

  return (
    <div>
      <NavBar/>
      {recipeDetail.length > 0 ? (
        <>
          <h2>{recipeDetail[0].title}</h2>
          <p>{recipeDetail[0].summary}</p>
          <p>{recipeDetail[0].healthScore}</p>
          <img src={recipeDetail[0].image} alt={recipeDetail[0].title}/>
          <p>{renderDiets()}</p>
          <p>{recipeDetail[0].steps}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;