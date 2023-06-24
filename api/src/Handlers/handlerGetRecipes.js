const { getAllRecipes } = require("../Controllers/getRecipe");

const handlerGetRecipes = async (req, res) => {
  try {
    const recipes = await getAllRecipes();
    res.json(recipes);
  } catch (error) {
    console.log(error);

    if (error.message.includes('Error al obtener las recetas de la API')) {
      res.status(500).json({ error: 'Error al obtener las recetas de la API' });
    } else if (error.message.includes('Error al obtener las recetas de la base de datos')) {
      res.status(500).json({ error: 'Error al obtener las recetas de la base de datos' });
    } else {
      res.status(500).json({ error: 'Error al obtener todas las recetas' });
    }
  }
}

module.exports = {
  handlerGetRecipes
}
