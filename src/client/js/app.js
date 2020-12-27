/* Global Variables */
const generateBtn = document.querySelector(`#generate`);

/* Helper Functions */
function getCurrentDate() {
	const d = new Date();
	return (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
}

function getDateDiff(date) {
	const todaysDate = new Date(getCurrentDate());
	const tripDate = new Date(date);
	const diffTime = Math.abs(tripDate - todaysDate);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
}

function validateDateFormat(date) {
    const testCase = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    const results = testCase.test(date);
    return results;
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

async function clickHandler() {
	const city = document.querySelector(`#city`).value;
	const departure = document.querySelector(`#departure`).value;

	const data = { 
		city,
		currentForecast: true,
	};

   
    // Check date format
    if (!validateDateFormat(departure)) {
        return alert(`Date entered must be in the format of: MM/DD/YYYY`);
    }
    
	// check how far trip date is from today's date
	const dateDiff = getDateDiff(departure);
   
	// Cannot get weather info that is Greater than 16 days in the f
	if (dateDiff > 16) {
		alert('Sorry we are not albe to get future weather forecast that is greater than 16 days from today');
	} else if (dateDiff > 0) {
		// Get Future forecast
		data.currentForecast = false;
		data.dateDiff = dateDiff;
	}

	const res = await postData("http://localhost:8000/send", data);
	const json = JSON.parse(res);
	console.log(json);

	// // extract temperature
	// const weatherObject = await JSON.parse(res);

	// // get current date
	// const td = getCurrentDate();

	// // get user's feeling
	// const userFeeling = document.querySelector(`#departure`).value;

	// // build object to be sent
	// const data = {
	// 	temperature: `${temp}°F`,
	// 	date: td,
	// 	userFeeling: userFeeling,
	// };

	// // send data to server
	// const post = await postData(`http://localhost:8000/add`, data);

	// // check if post was successful
	// if (post === `success!`) {
	// 	updateEntry();
	// }
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
