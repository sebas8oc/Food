const {Router} = require ("express");
const dietRouter = Router();
const {diets} = require ("../Controllers/getDiet.js");


dietRouter.get("/", diets);

module.exports = dietRouter;