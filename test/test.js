'use strict';

const groceries = require("../groceries.js");
const general = require("../general.js");

const {
  expect
} = require("chai");

const mocha = require("mocha");

describe("Groceries", async function() {
  it("Console print test", async function() {
    console.log(await groceries.getRandomMeal());
  });

  it("Get specific meal data", async function() {
    const mealName = "lasagna";
    let meal = await groceries.getMealData(mealName);
    expect(meal.name.toLowerCase()).to.include(mealName);
  });

  it("Get random meal data", async function() {
    let randomMeal = await groceries.getRandomMeal();
    expect(randomMeal.name).to.be.a("string");
  });
});

describe("General", async function() {
  it("Test reading file into array", async function() {
    const groceries = general.readFileIntoArray("test/artifacts/meals.txt")
    expect(groceries).to.include("pork");
    expect(groceries).to.include("pizza");
    expect(groceries).to.include("perogies");
    expect(groceries).to.not.include("A meal not in the list");
  });
});