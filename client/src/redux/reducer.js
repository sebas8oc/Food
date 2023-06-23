import {
  CLEAN_DETAIL,
  FILTER_AZ,
  FILTER_NAME,
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  FILTER_HEALTH_SCORE,
  GET_DIETS,
  GET_BY_DIET,
  FILTER_CREATED,
} from "./action-types";

const ASCENDING = "asc";
const DESCENDING = "desc";

const initialState = {
  diets: [],
  recipes: [],
  recipeDetail: {},
  recipesFiltered: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CREATED:
      const createdFilter = state.recipes.filter((el) => el.createdInDb === (action.payload === 'created'));
      return {
        ...state,
        recipes: createdFilter,
        recipesFiltered: createdFilter,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case GET_BY_DIET:
      const selectedDiet = action.payload;
      const filteredRecipes = state.recipes.filter((recipe) => {
        const recipeDiets = recipe.diets.split(", ").map((diet) => diet.trim());
        return recipeDiets.includes(selectedDiet);
      });
      return {
        ...state,
        recipes: filteredRecipes,
        recipesFiltered: filteredRecipes,
      };

    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesFiltered: action.payload,
      };

    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        recipeDetail: {},
      };

    case FILTER_AZ:
      const order = action.payload;
      const sortedRecipes = sortRecipes(state.recipes, order === ASCENDING ? ASCENDING : DESCENDING, "title");
      return {
        ...state,
        recipes: sortedRecipes,
        recipesFiltered: sortedRecipes,
      };

    case FILTER_NAME:
      return {
        ...state,
        recipes: action.payload,
        recipesFiltered: action.payload,
      };

    case FILTER_HEALTH_SCORE:
      const healthOrder = action.payload;
      const sortedHealthRecipes = sortRecipes(state.recipes, healthOrder === ASCENDING ? ASCENDING : DESCENDING, "healthScore");
      return {
        ...state,
        recipes: sortedHealthRecipes,
        recipesFiltered: sortedHealthRecipes,
      };

    default:
      return state;
  }
};

const sortRecipes = (recipes, order, field) => {
  const sortedRecipes = [...recipes];
  sortedRecipes.sort((a, b) => {
    const valueA = a[field].toString();
    const valueB = b[field].toString();
    if (order === ASCENDING) {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
  return sortedRecipes;
};

export default reducer;
