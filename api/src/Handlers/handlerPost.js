const { post } = require("../Controllers/post");

const handlerPostRecipe = async (req, res) => {
  try {
    await post(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating recipe" });
  }
};

module.exports = {
  handlerPostRecipe,
};
