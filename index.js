const readline = require("readline");
const fs = require("fs");

const groceries = require("./groceries.js");
const general = require("./general.js");

'use strict';

async function main() {
  let meals = general.readFileIntoArray("meals.txt")
  let ingredients = [];
  for (let meal of meals) {
    let mealData = await groceries.getMealData(meal);
    ingredients = ingredients.concat(mealData.ingredients);
  }
  ingredients = groceries.filterIngredients(ingredients);
  console.log(ingredients);
}

function readFileIntoArray(fileName) {
  return fs.readFileSync(fileName).toString().split("\n");
}

main();