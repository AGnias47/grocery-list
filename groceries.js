const axios = require("axios");
const config = require("./config.json");

module.exports = {
    getMeals: async function (meals) {
        for (let meal of meals) {
            try {
                const response = await axios.get(config.api_base_url + "search.php?s=" + meal);
                return response.data;
            } catch (error) {
                throw Error(error);
            }
        }
    },

    getRandomMeal: async function () {
        const response = await axios.get(config.api_base_url + "random.php");
        return response.data;
    },
}
