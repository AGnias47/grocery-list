/**
 * Main runner function for grocery list project
 *
 * @module main
 */

const groceries = require("./groceries.js");
const general = require("./general.js");
const meal = require("./meal.js")

'use strict';

module.exports = {
  /**
   * Takes a file with a list of meals as an input and returns ingredients with quantities as an Object
   *
   * @param mealsFileName {string} Filepath to list of meals. Meals are expected to be separated by a new line (\n).
   * @returns {Promise<{Object}>} Object where Key: Ingredient, Value: Quantity
   */
  main: async function(mealsFileName) {
    let meals_from_list = general.readFileIntoArray(mealsFileName);
    let ingredients = {};
    let missed_meals = [];
    for (let meal_from_list of meals_from_list) {
      let mealData = await groceries.getMealData(meal_from_list);
      if (mealData instanceof meal) {
        ingredients = general.concatObjectMerge(ingredients, mealData.ingredients);
      }
      else {
        missed_meals.push(meal_from_list);
      }
    }
    return [ingredients, missed_meals];
  }
}