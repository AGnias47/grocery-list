'use strict';

const groceries = require("../groceries.js");

const {
    expect
} = require("chai");

const mocha = require("mocha");

describe("Groceries", async function() {
                it("Console print test", async function() {
                    let meal = await groceries.getMealData("lasagna");
                    console.log(meal);
                    console.log(await groceries.getRandomMeal());
                });

                it("Get specific meal data", async function() {
                            {});