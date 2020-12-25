/* Global Variables */
const generateBtn = document.querySelector(`#generate`);

/* Helper Functions */
function getCurrentDate() {
	const d = new Date();
	return (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
}

function getDateDiff(tripDate) {
	const todaysDate = new Date(getCurrentDate());
	const tripDate = new Date(tripDate);
	const diffTime = Math.abs(tripDate - todaysDate);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
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
		body: JSON.stringify({ data }),
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

async function clickHandler() {
	const city = document.querySelector(`#city`).value;
	const departure = document.querySelector(`#departure`).value;
	const userInput = { city, departure };

	// validate date input format (some form of regex handler)
    validateInputDate()

	// check how far trip date is from today's date
	const dateDiff = getDateDiff(departure);

	// if results is within a week
	if (dateDiff <= 7) {
		// get current forecast
	} else {
		// get predicted forecast
	}

	// get weather data
	const res = await postData("http://localhost:8000/send", userInput);

	// extract temperature
	const weatherObject = await JSON.parse(res);

	// get current date
	const td = getCurrentDate();

	// get user's feeling
	const userFeeling = document.querySelector(`#departure`).value;

	// build object to be sent
	const data = {
		temperature: `${temp}°F`,
		date: td,
		userFeeling: userFeeling,
	};

	// send data to server
	const post = await postData(`http://localhost:8000/add`, data);

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
		const entry = await getData(`http://localhost:8000/retrieve`);
		date.innerText = entry.date;
		temp.innerText = entry.temperature;
		content.innerText = entry.userFeeling;
	} catch (error) {
		console.log(`error`, error);
	}
}

export { clickHandler, generateBtn };
