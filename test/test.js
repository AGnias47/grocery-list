'use strict';
const fs = require("fs");
const general = require("../general.js");
const groceries = require("../groceries.js");
const meal = require("../meal.js");
const mainFunc = require("../main.js");

const {
  expect
} = require("chai");

const mocha = require("mocha");

describe("General", async function() {
  it("Test reading file into array", async function() {
    const groceries = general.readFileIntoArray("test/artifacts/meals.txt")
    expect(groceries).to.include("pork");
    expect(groceries).to.include("pizza");
    expect(groceries).to.not.include("A meal not in the list");
  });

  it("Test Concat Merge Function", async function() {
    const A = {
      "Key1": "Value1",
      "Key2": "Value2"
    };
    const B = {
      "Key2": "ValueTwo",
      "Key3": "Value3"
    };
    const C = general.concatObjectMerge(A, B);
    expect(Object.keys(C).length).to.eq(3);
    expect(C["Key1"]).to.eq("Value1");
    expect(C["Key2"]).to.eq("Value2, ValueTwo");
    expect(C["Key3"]).to.eq("Value3");
  });
});

describe("Groceries", async function() {
  it("Console print test", async function() {
    console.log(await groceries.getRandomMeal());
  });

  it("Get specific meal data", async function() {
    const mealName = "lasagna";
    let mealData = await groceries.getMealData(mealName);
    expect(mealData.name.toLowerCase()).to.include(mealName);
  });

  it("Get random meal data", async function() {
    let randomMeal = await groceries.getRandomMeal();
    expect(randomMeal.name).to.be.a("string");
  });

  it("Get meal without recipe", async function() {
    const missingMeal = "Shoo Fly Pie"
    let emptymeal = await groceries.getMealData(missingMeal);
    expect(emptymeal).to.be.empty;
  })
});

describe("Meal", async function() {
  it("Test Meal Class", async function() {
    const lasagnaBuffer = fs.readFileSync("test/artifacts/lasagna.json");
    const lasagna = JSON.parse(lasagnaBuffer);
    const lasagnaMeal = new meal(lasagna.meals[0]);
    expect(lasagnaMeal.name).to.eq("Lasagna Sandwiches")
    expect(lasagnaMeal.id).to.eq("52987")
    expect(lasagnaMeal.region).to.eq("American")
    expect(lasagnaMeal.category).to.eq("Pasta")
    expect(Object.keys(lasagnaMeal.ingredients).length).to.eq(9);
    expect(lasagnaMeal.imageUrl).to.eq("https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg")
    expect(lasagnaMeal.tags).to.eq("Sandwich")
    expect(lasagnaMeal.instructions).to.eq("1. In a small bowl, combine the first four ingredients; spread on four slices of bread. Layer with bacon, tomato and cheese; top with remaining bread.\r\n\r\n2. In a large skillet or griddle, melt 2 tablespoons butter. Toast sandwiches until lightly browned on both sides and cheese is melted, adding butter if necessary.\r\n\r\nNutrition Facts\r\n1 sandwich: 445 calories, 24g fat (12g saturated fat), 66mg cholesterol, 1094mg sodium, 35g carbohydrate (3g sugars, 2g fiber), 21g protein.")
    expect(lasagnaMeal.video).to.eq("");
  });

  it("Test Get Ingredients function", async function() {
    const lasagnaBuffer = fs.readFileSync("test/artifacts/lasagna.json");
    const lasagna = JSON.parse(lasagnaBuffer);
    const lasagnaMeal = new meal(lasagna.meals[0]);
    expect(lasagnaMeal.ingredients["Chopped Onion"]).to.eq("2 tbs");
    expect(lasagnaMeal.ingredients["Bacon"]).to.eq("8 slices");
    expect(lasagnaMeal.ingredients["Butter"]).to.eq("2 1/2 Tbs");
  });
});

describe("Index - E2E", async function() {
  it("E2E Test", async function() {
    const groceryList = await mainFunc.main("test/artifacts/meals.txt");
    const ingredients = groceryList[0];
    const missingIngredients = groceryList[1];
    console.log(ingredients);
    expect(ingredients).to.have.property("Flour");
    expect(missingIngredients).to.be.empty;
  });

  it("E2E Test - Ingredients missing", async function() {
    const groceryList = await mainFunc.main("test/artifacts/meals_with_missing_items.txt");
    const ingredients = groceryList[0];
    const missingIngredients = groceryList[1];
    console.log(ingredients);
    expect(ingredients).to.have.property("Flour");
    expect(missingIngredients).to.include("An actual book");
  });
});