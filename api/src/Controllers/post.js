const { Recipe, Diet } = require("../db.js");

const post = async (req, res) => {
  try {
    let { title, image, summary, healthScore, step, diets, createInDb } = req.body;

    if (!title || !image || !summary || !healthScore || !step || !diets || createInDb === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

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

    await newRecipe.addDiet(dietDB);
    res.send("Recipe is created");
  } catch (error) {
    console.log(error);

    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "Recipe already exists" });
    } else {
      res.status(500).json({ error: "Error creating recipe" });
    }
  }
};

module.exports = {
  post,
};


//....

// const postDiet = async (req, res) => {
//   let {name} = req.body

//   let newDiet = await Diet.create({
//      name
// })
  

//   res.send("new Diet")
// }


// postDiet,