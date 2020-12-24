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

// add incoming data to our endpoint object
function addData(req, res) {
  res.send(`success!`);
  const incomingData = req.body;
  projectData.temperature = incomingData.temperature;
  projectData.date = incomingData.date;
  projectData.userFeeling = incomingData.userFeeling;
  console.log(projectData);
}

function sendData(req, res) {
  res.send(projectData);
}
