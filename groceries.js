/**
 * Module for working with TheMealDB
 *
 * @module groceries
 */

'use strict';

const axios = require("axios");
const FuzzyMatching = require("fuzzy-matching")

const config = require("./config.json");

const Meal = require("./meal.js");

module.exports = {
  /**
   * Gets meal data for a specific meal
   *
   * @param meal {string}   String of meal
   * @returns {Meal}        Data pertaining to meal as a Meal object
   *
   * @example
   * getMealData("pork tacos");
   */
  getMealData: async function(meal) {
    const response = await axios.get(config.api_base_url + "search.php?s=" + meal);
    if (response.data.meals === null) {
      return {};
    }
    return new Meal(response.data.meals[0]);
  },

  /**
   * Gets data for a random meal
   *
   * @returns {Meal}        Data pertaining to meal as a Meal object
   *
   * @example
   * getRandomMeal();
   */
  getRandomMeal: async function() {
    const response = await axios.get(config.api_base_url + "random.php");
    return new Meal(response.data.meals[0]);
  }
};