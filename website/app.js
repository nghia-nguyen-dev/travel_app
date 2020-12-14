/* Global Variables */
const generateBtn = document.querySelector(`#generate`);

/* Helper Functions */
function getCurrentDate() {
  const d = new Date();
  return d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
}

// Post data function
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
    console.log("error", error);
  }
};

// Get weather data from API
async function getWeatherInfo() {
  // Build url string
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
  const zipCode = document.querySelector(`#zip`).value;
  const apiKey = `01230402996a2c0bcff6e0ba4ce12d17`;

  const url = `${baseURL}${zipCode}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

// Event listener
generateBtn.addEventListener(`click`, async () => {
  // get weather data
  const weatherObject = await getWeatherInfo();
  // extract temp
  const temp = Math.round(weatherObject.main.temp);

  // get date
  const td = getCurrentDate();

  // get user's feeling
  const userFeeling = document.querySelector(`#feelings`).value;

  const data = {
    temperature: `${temp}°F`,
    date: td,
    userFeeling: userFeeling,
  };

  const results = await postData(`/add`, data);
  console.log(results);
});

// Function to update most recent entry using data from server

async function updateEntry() {
  console.log("getting data from server");
}
