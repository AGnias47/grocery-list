# Grocery List

This project takes a list of meals and transforms it into an aggregated grocery list. This project is in the initial
development phase.

## API

[TheMealDB](https://www.themealdb.com/api.php) will be used.

## Top-Level Functionality

* Input: List of meals separated by lines in a file named `meals.txt`
* Output: List of ingredients with quantities needed for all meals listed in `meals.txt`

### Script execution

```bash
npm install
npm start
```

## [Code Coverage](https://www.andygnias.com/grocery-list/nyc-lcov-coverage/lcov-report/index.html)

Tests run using the [Mocha](https://mochajs.org/) framework. Coverage is calculated using [Istanbul](https://istanbul.js.org/)'s
[nyc](https://www.npmjs.com/package/nyc) tool. Coverage can be found [here](https://www.andygnias.com/grocery-list/nyc-lcov-coverage/lcov-report/index.html).

## Implementation Improvements

* Return ingredients as grouped by type, ex. fruits grouped with fruits
* Create a frontend
* Convert ingredients to ingredient-quantity mapping
