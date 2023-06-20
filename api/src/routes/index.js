const { Router } = require('express');
const recipeRouter = require("./RecipesRouter");
const dietRouter = require("./DietRouter.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", recipeRouter);
router.use("/", dietRouter);


module.exports = router;
