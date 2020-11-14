const groceries = require("./groceries.js");
const general = require("./general.js");

'use strict';

module.exports = {
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