const { Recipe, Diet } = require("../db.js");

const post = async (req, res) => {
  let { title, image, summary, healthScore, step, diets, createInDb } = req.body;

  let newRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    step,
    createInDb,
  });

  let dietDB = await Diet.findAll({
    where: { name: diets },
  });
 newRecipe.addDiet(dietDB);
  res.send("Recipe is created");
};

module.exports = {
  post,
};