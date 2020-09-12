const axios = require("axios");
const config = require("./config.json");


async function getMeals(meals) {
    meals.forEach(async function (meal) {
        let data = await axios.get(config.api_base_url + "search.php?s=" + meal)
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            throw Error(error);
        });
    });
};


async function getRandomMeal() {
    let data = await axios.get(config.api_base_url + "random.php")
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        throw Error(error);
    });
};


getMeals(["lasagna"]);
getRandomMeal();
