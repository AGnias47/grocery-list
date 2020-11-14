/**
 * Meal class. Wraps meal data from TheMealDB API
 *
 * @module meal
 */

'use strict';

/** Meal class. Wraps data more cleanly for meals obtained from TheMealDB API. */
class Meal {
  /**
   * Wraps data more cleanly for meals obtained from TheMealDB API
   *
   * @param mealData {Object} Raw meal data from TheMealDB
   */
  constructor(mealData) {
    this.name = mealData.strMeal;
    this.id = mealData.idMeal;
    this.region = mealData.strArea;
    this.category = mealData.strCategory;
    this.ingredients = getIngredients(mealData);
    this.imageUrl = mealData.strMealThumb;
    this.tags = mealData.strTags;
    this.instructions = mealData.strInstructions;
    this.video = mealData.strYoutube;
  }
}

/**
 * Parse individual ingredients from a meal with the amount needed
 *
 * @param mealData {Object} Raw meal data from TheMealDB
 * @returns {Object} Object where Key: ingredient, Value: amount
 */
function getIngredients(mealData) {
  let ingredients = {};
  for (const property in mealData) {
    if (property.includes("strIngredient")) {
      const ingredient = mealData[property];
      if (ingredient !== null && typeof ingredient !== "undefined" && ingredient !== "") {
        const amountKey = property.replace("strIngredient", "strMeasure");
        if (ingredient in ingredients) {
          ingredients[ingredient] += ", " + mealData[amountKey];
        } else {
          ingredients[ingredient] = mealData[amountKey];
        }
      }
    }
  }
  return ingredients;
}

module.exports = Meal;