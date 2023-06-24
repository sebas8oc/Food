const { diets } = require("../Controllers/getDiet");

const handlerDiets = async (req, res) => {
  try {
    await diets(req, res);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Error al obtener y guardar las dietas" });
  }
};

module.exports = {
  handlerDiets,
};
