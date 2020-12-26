require("dotenv").config();
const fetch = require("node-fetch");

async function getForecast(lon, lat) {
        // Build url string
        const baseURL = ` http://api.weatherbit.io/v2.0/current?`;
        const key = process.env.API_KEY;
        const url = `${baseURL}lon=${lon}&lat=${lat}&key=${key}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
}

module.exports = getForecast;