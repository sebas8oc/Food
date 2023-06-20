const {idName}= require ("./getRecipe");

const getId= async (req, res)=> {
        const id = req.params.id;
        const all = await idName();

        if (id){
            let recipeId = await all.filter(recipe => recipe.id == id);

            recipeId.length?
            res.status(200).json(recipeId) : 
            res.status(400).send("Recipe Not found");
        }
}

module.exports ={
    getId,
}