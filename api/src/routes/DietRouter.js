const {Router} = require ("express");
const dietRouter = Router();
const {handlerDiets} = require("../Handlers/handlerGetDiet")


dietRouter.get("/", handlerDiets);

module.exports = dietRouter;