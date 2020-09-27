'use strict';
/** Meal class. Wraps data more cleanly for meals obtained from TheRecipeDB API. */

class Meal {
    /**
     * Wraps data more cleanly for meals obtained from TheRecipeDB API
     *
     * @param mealData {Object} Raw meal data from TheRecipeDB
     */
    constructor(mealData) {
        this.name = mealData.strMeal;
        this.id = mealData.idMeal;
        this.region = mealData.strArea;
        this.category = mealData.strCategory;
        this.ingredients = this.getIngredients(mealData);
        this.imageUrl = mealData.strMealThumb;
        this.tags = mealData.strTags;
        this.instructions = mealData.strInstructions;
        this.video = mealData.strYoutube;
    }
    /**
     * Parse individual ingredients from a meal
     *
     * @param mealData {Object} Raw meal data from TheRecipeDB
     * @returns {array} List of ingredients used in meal
     */


    getIngredients(mealData) {
        let ingredients = [];

        for (const property in mealData) {
            if (property.includes("strIngredient")) {
                const ingredient = mealData[property];

                if (ingredient !== null && typeof ingredient !== "undefined" && ingredient !== "") {
                    ingredients.push(ingredient);
                }
            }
        }

        return ingredients;
    }

}

module.exports = Meal;