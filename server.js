// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Import packages
const express = require(`express`);
const bodyParser = require(`body-parser`)
const cors = require(`cors`)

// create instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder (connect server side to client side code)
app.use(express.static('demo'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`server running on port: ${port}`);
}


// ROUTING

// handles GET requests from client
app.get(`/`,(req, res) => {
  // console.log(req);
  res.send(projectData)
})

// handles POST requests from client
app.post(`/`,(req, res) => {
  projectData.push(req.body)
})