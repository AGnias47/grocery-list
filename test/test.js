const groceries = require("../groceries.js");

const {expect} = require("chai");

const mocha = require("mocha");

describe("Groceries", async function() {
    it("Console print test", async function() {
        let meals = await groceries.getMeals(["lasagna"]);
        console.log(meals[0]);
        console.log(await groceries.getRandomMeal());
    });
});

