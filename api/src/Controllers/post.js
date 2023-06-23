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

//....

// const postDiet = async (req, res) => {
//   let {name} = req.body

//   let newDiet = await Diet.create({
//      name
// })
  

//   res.send("new Diet")
// }




module.exports = {
  post,
  // postDiet,
};