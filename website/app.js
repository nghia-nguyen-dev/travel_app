/* Global Variables */
const generateBtn = document.querySelector(`#generate`);

/* Helper Functions */
function getCurrentDate() {
  const d = new Date();
  return d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
}

/* Main Functions */
// Post data to server
const postData = async (url = "", data = {}) => {
  const options = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    return response.text();
  } catch (error) {
    console.log(`error`, error);
  }
};

// Get data from server
const getData = async (url = "") => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(`error`, error);
  }
};

// Get weather data from API
async function getWeather() {
  // Build url string
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
  const zipCode = document.querySelector(`#zip`).value;
  const apiKey = `01230402996a2c0bcff6e0ba4ce12d17`;
  // complete string
  const url = `${baseURL}${zipCode}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`error`, error);
  }
}

async function clickHandler() {
  // get weather data
  const weatherObject = await getWeather();
  // extract temperature
  const temp = Math.round(weatherObject.main.temp);

  // get current date
  const td = getCurrentDate();

  // get user's feeling
  const userFeeling = document.querySelector(`#feelings`).value;

  // build object to be sent
  const data = {
    temperature: `${temp}°F`,
    date: td,
    userFeeling: userFeeling,
  };

  // send data to server
  const post = await postData(`/add`, data);

  // check if post was successful
  if (post === `success!`) {
    updateEntry();
  }
}

/* Event listener */
generateBtn.addEventListener(`click`, clickHandler);

// Function to update most recent entry using data from server
async function updateEntry() {
  const date = document.getElementById(`date`);
  const temp = document.getElementById(`temp`);
  const content = document.getElementById(`content`);

  try {
    const entry = await getData(`/retrieve`);
    date.innerText = entry.date;
    temp.innerText = entry.temperature;
    content.innerText = entry.userFeeling;
  } catch (error) {
    console.log(`error`, error);
  }
}
