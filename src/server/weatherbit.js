require("dotenv").config();
const fetch = require("node-fetch");

async function getCurrentForecast(obj) {
        // Build url string
        const baseURL = ` http://api.weatherbit.io/v2.0/current?units=I&`;
        const key = process.env.API_KEY;
        const url = `${baseURL}lon=${obj.lng}&lat=${obj.lat}&key=${key}`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            const weatherObj = json.data[0];
            return {
                currentTemp: weatherObj.temp,
                description: weatherObj.weather.description,
            }
        } catch (error) {
            console.log(error);
        }
}

async function getFutureForecast(obj) {
        // Build url string
        const baseURL = ` http://api.weatherbit.io/v2.0/forecast/daily?units=I&`;
        const key = process.env.API_KEY;
        const url = `${baseURL}days=${obj.dateDiff + 1}&lon=${obj.lng}&lat=${obj.lat}&key=${key}`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            const weatherObj = json.data[json.data.length - 1];
            return {
                high: weatherObj.high_temp,
                low: weatherObj.low_temp,
                description: weatherObj.weather.description,
            };
        } catch (error) {
            console.log(error);
        }
}

module.exports = {getCurrentForecast, getFutureForecast};