const groceries = require("./groceries.js");

'use strict';

async function main() {
  let meals = ["lasagna", "tacos", "steak"];
  let ingredients = [];
  for (let meal of meals) {
    let mealData = await groceries.getMealData(meal);
    ingredients = ingredients.concat(mealData.ingredients);
  }
  ingredients = groceries.filterIngredients(ingredients);
  console.log(ingredients);
}

main();
