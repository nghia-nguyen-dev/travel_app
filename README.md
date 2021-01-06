# Travel App

A travel planner that gets the weather base on input location and date.

## Installation

1. Make sure you have npm installed
1. Run npm install
1. Create a .env file at the root level and add API keys for
`userName=<Geonames_key> PIXABAY=<pixabay_key> API_KEY=<weatherbit_key>`
1. `npm run start` in the command line to start up the server
1. Open browser and navigate to localhost:8000

## Usage

1. Enter the location and departure date (*Please use the placeholder format as a guide*)
1. Hit submit
1. Data will populate under __Forecast__
    - Current date: will display temp + weather description
    - Future date: will display high + low temp + weather description
- __IMPORTANT!!!__ If the city cannot be found, a message and a random image of the country will display instead.

## Limitation

- Can only get weather info that is within 16 days in the future (*this is due to the Weatherbit API*)

- Cannot get past weather info

## Tech

- html
- sass
- javascript
- Webpack
- node.js
- express

## APIs

- Geonames
- Weatherbit
- Pixabay