import axios from "axios";
import { 
  CREATE_RECIPE_SUCCESS,
  CREATE_RECIPE_FAILURE,
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



export const getRecipes = () => {
  return async function(dispatch){
    const response = await axios('http://localhost:3001/recipe')
    return dispatch({ type: GET_RECIPES, payload: response.data})
  } 
}

export const getRecipeDetail = (id) => {
  return async function(dispatch) {
    const response = await axios(`http://localhost:3001/recipe/${id}`)
    return dispatch({ type: GET_RECIPE_DETAIL, payload: response.data})
  }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}

export const filterAZ = (payload) => {
  return { type: FILTER_AZ, payload: payload};
};

export const filterName = (payload) => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/recipe/search?name=${payload}`)
    return dispatch({ type: FILTER_NAME, payload: response.data})
  }
}

export const filterHealthScore = (payload) => {
  return {
    type: FILTER_HEALTH_SCORE,
    payload: payload
  };
};

export const getDiets = () => {
  return async function(dispatch) {
    const response = await axios("http://localhost:3001/diet");
    return dispatch({ type: GET_DIETS, payload: response.data})
  }
}

export const getByDiet = (payload) => {
  return { type: GET_BY_DIET, payload};
}

export const createRecipe = (recipeData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/recipe', recipeData);
      dispatch({ type: CREATE_RECIPE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_RECIPE_FAILURE, error });
    }
  };
};

export function filterCreated (payload) {
  return {
    type: FILTER_CREATED, payload
  }
}