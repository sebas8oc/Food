const { getName } = require("../Controllers/getName.js");

const handlerGetName = async (req, res) => {
  try {
    await getName(req, res);
  } catch (error) {
    console.log(error);

    if (error.message.includes("Missing query parameter: name")) {
      res.status(400).json({ error: "Missing query parameter: name" });
    } else {
      res.status(500).json({ error: "Error al obtener el nombre de la receta" });
    }
  }
};

module.exports = {
  handlerGetName,
};
