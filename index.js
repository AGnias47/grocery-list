const groceries = require("./groceries.js");

async function main() {
    console.log(await groceries.getMeals(["lasagna"]));
    console.log(await groceries.getRandomMeal());
}

main();
