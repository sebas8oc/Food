import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getRecipes } from "../../redux/actions";
import Recipe from "../Recipe/Recipe";
import Pagination from "../Pagination/Pagination";
import style from "./Recipes.module.css";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9; // Cantidad de recetas por página

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);


  // Lógica para obtener las recetas de la página actual
  const indexOfLastRecipe = currentPage * perPage;
  const indexOfFirstRecipe = indexOfLastRecipe - perPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div>
      <Pagination
        perPage={perPage}
        totalItems={recipes.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    <div className={style.container}>
      
      
      {currentRecipes.map((recipe) => {
  const diets = Array.isArray(recipe.diets)
    ? recipe.diets.map((diet) => diet.name).join(", ")
    : recipe.diets;    
  return (
    <Recipe 
      key={recipe.id || recipe.name}
      title={recipe.title}
      image={recipe.image}
      summary={recipe.summary}
      healthScore={recipe.healthScore}
      steps={recipe.steps}
      diets={diets}
      createdInDb={recipe.createdInDb}
      id={recipe.id}
    />
  );
})}

    </div>
    </div>
  );
};

export default Recipes;
