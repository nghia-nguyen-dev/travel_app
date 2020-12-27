require("dotenv").config();
const fetch = require("node-fetch");

async function getImg(country) {
    // Build url string
    const baseURL = `https://pixabay.com/api/`;
    const key = process.env.PIXABAY;
    const url = `${baseURL}?key=${key}&q=${encodeURIComponent(country)}&image_type=photo`;

    try {
        const response = await fetch(url);
        const json = await response.json()
        //  console.log(json.hits.length);
        const index = randomNum(json.hits.length)
        const imgURL = json.hits[index].webformatURL;
        return { imgURL };
    } catch (error) {
        console.log(error);
    }

}

function randomNum(ceiling) {
    return Math.floor(Math.random() * ceiling)
}

module.exports = getImg