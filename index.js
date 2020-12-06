const main = require("./main.js")
main.main("meals.txt").then(r => {
  console.log("Ingredient List");
  console.log("---------------")
  console.log(r[0]);
  if (r[1].length > 0) {
    console.log("Meals with no recipe found");
    console.log("--------------------------")
    console.log(r[1]);
  } else {
    console.log("Recipes were found for all meals. Happy Shopping!")
  }
});