'use strict';

const groceries = require("../groceries.js");

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

