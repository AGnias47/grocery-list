const groceries = require("./groceries.js");

async function main() {
  let meals = await groceries.getMeals(["lasagna"]);
  console.log(meals[0]);
  console.log(await groceries.getRandomMeal());
}

main();
