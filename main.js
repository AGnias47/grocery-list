/**
 * Main runner function for grocery list project
 *
 * @module main
 */

const groceries = require("./groceries.js");
const general = require("./general.js");

'use strict';

module.exports = {
  /**
   * Takes a file with a list of meals as an input and returns ingredients with quantities as an Object
   *
   * @param mealsFileName {string} Filepath to list of meals. Meals are expected to be separated by a new line (\n).
   * @returns {Promise<{Object}>} Object where Key: Ingredient, Value: Quantity
   */
  main: async function(mealsFileName) {
    let meals = general.readFileIntoArray(mealsFileName);
    let ingredients = {};
    for (let meal of meals) {
      let mealData = await groceries.getMealData(meal);
      ingredients = general.concatObjectMerge(ingredients, mealData.ingredients);
    }
    return ingredients;
  }
}