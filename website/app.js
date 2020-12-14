/* Global Variables */
const generateBtn = document.querySelector(`#generate`);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Post data function
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// postData("/addName", { name: "Nghia" });
// postData("/addName", { name: "Ron" });

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
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
}


