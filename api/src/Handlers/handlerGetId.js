const { getId } = require("../Controllers/getId");

const handlerGetId = async (req, res) => {
  try {
    await getId(req, res);
  } catch (error) {
    console.log(error);

    if (error.message === "Missing parameter: id") {
      res.status(400).json({ error: "Missing parameter: id" });
    } else if (error.message === "Error al obtener la receta por ID") {
      res.status(500).json({ error: "Error al obtener la receta por ID" });
    } else {
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  }
};

module.exports = {
  handlerGetId,
};
