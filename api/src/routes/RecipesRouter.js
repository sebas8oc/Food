const {Router} = require ("express");
const recipeRouter = Router();


const {handlerGetRecipes} = require("../Handlers/handlerGetRecipes.js")
const {handlerGetName} = require("../Handlers/handlerGetName.js")
const {handlerGetId} = require("../Handlers/handlerGetId.js")

const {handlerPostRecipe} = require("../Handlers/handlerPost.js")

recipeRouter.get("/", handlerGetRecipes);
recipeRouter.get("/search", handlerGetName);
recipeRouter.get("/:id", handlerGetId);
recipeRouter.post("/", handlerPostRecipe);


module.exports = recipeRouter;

// recipeRouter.post("/dietPost", postDiet);