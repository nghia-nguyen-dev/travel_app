// Testing purpose
require("dotenv").config();
const fetch = require("node-fetch");

async function getCoordinates(location) {
    // Build url string
    const baseURL = `http://api.geonames.org/searchJSON?`;
    const userName = process.env.userName;
    const url = `${baseURL}q=${location.country}&name_equals=${location.city}&username=${userName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { lng, lat, countryCode: country } = data.geonames[0]
        return {
            lng,
            lat,
            country
        }
    } catch (error) {
        console.log(error);
        return false;
    }

}

module.exports = getCoordinates;