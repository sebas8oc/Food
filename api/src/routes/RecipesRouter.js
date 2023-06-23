const {Router} = require ("express");
const recipeRouter = Router();

const {getAllRecipes} = require ("../Controllers/getRecipe.js");
const {getId} = require ("../Controllers/getId.js");
const {getName} = require ("../Controllers/getName.js");
const {post, postDiet} = require ("../Controllers/post.js");

recipeRouter.get("/", getAllRecipes);
recipeRouter.get("/search", getName);
recipeRouter.get("/:id", getId);
recipeRouter.post("/", post);
// recipeRouter.post("/dietPost", postDiet);

module.exports = recipeRouter;