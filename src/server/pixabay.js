require("dotenv").config();
const fetch = require("node-fetch");

async function getImg(obj) {
     // Build url string
     const baseURL = `https://pixabay.com/api/`;
     const key = process.env.PIXABAY;
     // Just in case the country is 2 words
     const country = encodeURIComponent(obj.country);
     const url = `${baseURL}?key=${key}&q=${country}&image_type=photo`;
 
     try {
         const response = await fetch(url);
         const json = await response.json()
        //  console.log(json);
         const imgURL = json.hits[0].webformatURL;
         return {imgURL};
     } catch (error) {
         console.log(error);
     }
 
}

module.exports = getImg