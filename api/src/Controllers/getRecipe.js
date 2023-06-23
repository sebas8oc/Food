// require('dotenv').config();
// const axios = require("axios");
// const { API, API_D, API_T , API_F } = process.env;
// const { Recipe, Diet } = require("../db.js");

// const getRecipe = async () => {
//   try {
//     const response = await axios.get(API_D);
//     const results = response.data.results.map(recipe => ({
//       id: recipe.id,
//       title: recipe.title,
//       image: recipe.image,
//       summary: recipe.summary.replace(/<[^>]+>/g, ""),
//       healthScore: recipe.healthScore,
//       steps: recipe.analyzedInstructions[0]?.steps?.map(step => step.step) || [],
//       diets: recipe.diets.join(', '),
//       createdInDb: recipe.createdInDb
//     }));
//     return results;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// }

// const getDb = async (req, res) => {
//   try {
//     const recipeDb = await Recipe.findAll({
//       include: {
//         model: Diet,
//         attributes: ["name"],
//         through: {
//           attributes: [],
//         },
//       }
//     });
//     return recipeDb;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error al obtener las recetas de la base de datos');
//   }
// }

// const getAllRecipes = async (req, res) => {
//   try {
//     const api = await getRecipe(req, res);
//     const db = await getDb(req, res);
//     const allRecipes = api.concat(db);
//     res.json(allRecipes);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Error al obtener todas las recetas' });
//   }
// }

// const idName = async () => {
//   try {
//     const api = await getRecipe();
//     const db = await getDb();
//     const all = api.concat(db);
//     return all;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error al obtener las recetas');
//   }
// }

// module.exports = {
//   getAllRecipes,
//   idName,
// }


require('dotenv').config();
const axios = require("axios");
const { API, API_D, API_T, API_F } = process.env;
const { Recipe, Diet } = require("../db.js");

const getRecipe = async () => {
  try {
    const response = await axios.get(API_D);
    const results = response.data.results.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary.replace(/<[^>]+>/g, ""),
      healthScore: recipe.healthScore,
      steps: recipe.analyzedInstructions[0]?.steps?.map(step => step.step) || [],
      diets: recipe.diets.join(', '),
      createdInDb: recipe.createdInDb
    }));
    return results;
  } catch (error) {
    console.error('Error al obtener las recetas de la API:', error.message);
    throw new Error('Error al obtener las recetas de la API');
  }
};

const getDb = async () => {
  try {
    const recipeDb = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return recipeDb;
  } catch (error) {
    console.error('Error al obtener las recetas de la base de datos:', error.message);
    throw new Error('Error al obtener las recetas de la base de datos');
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const api = await getRecipe();
    const db = await getDb();
    const allRecipes = api.concat(db);
    res.json(allRecipes);
  } catch (error) {
    console.error('Error al obtener todas las recetas:', error.message);
    res.status(500).json({ error: 'Error al obtener todas las recetas' });
  }
};

const idName = async () => {
  try {
    const api = await getRecipe();
    const db = await getDb();
    const all = api.concat(db);
    return all;
  } catch (error) {
    console.error('Error al obtener las recetas:', error.message);
    throw new Error('Error al obtener las recetas');
  }
};

module.exports = {
  getAllRecipes,
  idName,
};