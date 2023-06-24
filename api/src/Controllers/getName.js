const { idName } = require("./getRecipe.js");

const getName = async (req, res) => {
  try {
    const name = req.query.name;
    let all = await idName();

    if (name) {
      let recipeTitle = all.filter((recipe) =>
        recipe.title.toLowerCase().includes(name.toLowerCase())
      );

      recipeTitle.length
        ? res.status(200).json(recipeTitle)
        : res.status(400).send("Recipe Not Found");
    } else {
      res.status(400).send("Missing query parameter: name");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener el nombre de la receta' });
  }
};

module.exports = {
  getName,
};
