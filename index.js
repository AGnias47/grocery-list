const groceries = require("./groceries.js");

'use strict';

async function main() {
    let meal = await groceries.getMealData("lasagna");
    console.log(meal);
    console.log(await groceries.getRandomMeal());
}

main();