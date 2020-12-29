# Travel App

A travel planner that gets the weather base on input location and date.

## Installation

1. Make sure you have npm installed
1. Install these `"dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.1"
  }`
1. `npm run build-prod` to produce a dist folder
1. `npm run start` in the command line to start up the server
1. Open browser and navigate to localhost:8000

## Usage

1. Enter the location and departure date (*Please use the placeholder format as a guide*)
1. Hit submit
1. Data will populate under __Forecast__
    - Current date: will display temp + weather description
    - Future date: will display high + low temp + weather description
- __IMPORTANT!!!__ If the city can't be found, a message with an image of the country will display instead of weather info

## Limitation

- Can only get weather info that is within 16 days in the future (*this is due to the Weatherbit API*)

## Tech

- html
- sass
- javascript
- Webpack
- node.js

## APIs

- Geonames
- Weatherbit
- Pixabay