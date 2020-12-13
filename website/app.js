/* Global Variables */

// build API URL
const baseURL = `api.openweathermap.org/data/2.5/weather?zip=`;
const apiKey = `01230402996a2c0bcff6e0ba4ce12d17`;
const zipCode = document.querySelector(`#zip`).value;

const apiCall = `${baseURL}${zipCode}&${apiKey}`;

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

postData("/addName", { name: "Nghia" });
postData("/addName", { name: "Ron" });
