# Grocery List

This project takes a list of meals and transforms it into an aggregated grocery list. This project is in the initial
development phase.

## API

[TheMealDB](https://www.themealdb.com/api.php) will be used.

## Top-Level Functionality

* Input: List of meals separated by lines in a file named `meals.txt`
* Output: List of ingredients needed for all meals listed in `meals.txt`

### Script execution

```bash
npm install
node index.js
```

## Implementation Improvements

* Return ingredient quantities
* Return ingredients as grouped by type, ex. fruits grouped with fruits
* Create a frontend
* Handle cases where a meal is not found
* Convert ingredients to ingredient-quantity mapping

### Functionality

* Provide some basic info, get random meals, recipes, and a grocery list

