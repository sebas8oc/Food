require('dotenv').config();
const { API, API_D, API_T, API_F } = process.env;
const axios = require("axios");
const { Diet } = require("../db.js");

const diets = async (req, res) => {
  try {
    const response = await axios.get(API);
    const dietsSet = new Set();

    response.data.results.forEach((diet) => {
      diet.diets.forEach((d) => dietsSet.add(d));
    });

    const uniqueDiets = Array.from(dietsSet);

    for (const diet of uniqueDiets) {
      await Diet.findOrCreate({
        where: { name: diet },
      });
    }
    res.json(uniqueDiets);
  } catch (error) {
    console.log("Error fetching and saving diets:", error);
  }
};


module.exports = {diets};
