const { idName } = require("./getRecipe.js");

const getName = async (req, res) => {
  const name = req.query.name;
  let all = await idName();

  if (name) {
    let recipeTitle = all.filter((recipe) =>
      recipe.title.toLowerCase().includes(name.toLowerCase())
    );

    recipeTitle.length
      ? res.status(200).json(recipeTitle)
      : res.status(400).send("Recipe Not Found");
  }
};

module.exports = {
  getName,
};
