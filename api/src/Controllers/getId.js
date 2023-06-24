const { idName } = require("./getRecipe");

const getId = async (req, res) => {
  try {
    const id = req.params.id;
    const all = await idName();

    if (!id) {
      throw new Error("Missing parameter: id");
    }

    const recipeId = all.filter((recipe) => recipe.id == id);

    if (recipeId.length) {
      res.status(200).json(recipeId);
    } else {
      res.status(404).send("Recipe not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la receta por ID");
  }
};

module.exports = {
  getId,
};
