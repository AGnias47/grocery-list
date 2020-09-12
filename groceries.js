/**
 * Module for working with TheRecipeDB
 *
 * @module groceries
 */
const axios = require("axios");

const config = require("./config.json");

module.exports = {
  /**
   * Gets meals data from a list of meals
   *
   * @param meals {array}   List of strings
   * @returns {array}       List of meal objects
   *
   * @example
   * getMeals(["lasagna", "pork tacos", "tiramisu"]);
   */
  getMeals: async function (meals) {
    let mealData = [];

    for (let meal of meals) {
      try {
        const response = await axios.get(config.api_base_url + "search.php?s=" + meal);
        mealData.push(response.data);
      } catch (error) {
        throw Error(error);
      }
    }

    return mealData;
  },

  /**
   * Gets data for a random meal
   *
   * @returns {Object} Meal data
   *
   * @example
   * getRandomMeal();
   */
  getRandomMeal: async function () {
    const response = await axios.get(config.api_base_url + "random.php");
    return response.data;
  }
};
