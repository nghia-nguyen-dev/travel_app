require('dotenv').config();
const fetch = require('node-fetch');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Import packages
const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);

// create instance of app
const app = express();

/* Middleware */

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder (connect server side to client side code)
app.use(express.static("dist"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`server running on port: ${port}`);
}

/* ROUTING */

// handles GET requests from client
app.get(`/retrieve`, sendData);


// handles POST requests from client
app.post(`/add`, addData);
app.post('/openWeatherMap', getWeather)

// add incoming data to our endpoint object
function addData(req, res) {
  res.send(`success!`);
  const incomingData = req.body.data;
  projectData.temperature = incomingData.temperature;
  projectData.date = incomingData.date;
  projectData.userFeeling = incomingData.userFeeling;
}

function sendData(req, res) {
  res.send(projectData);
}

// Get weather data from API
async function getWeather(req, res) {
  const zipCode = req.body.data;
  // Build url string
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
  const apiKey = process.env.API_KEY;
  // complete string
  const url = `${baseURL}${zipCode}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data)
  } catch (error) {
    console.log(`error`, error);
  }
}