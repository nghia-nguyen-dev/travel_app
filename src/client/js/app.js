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

function split(str) {
	if (str.split(', ').length === 2) {
    	return str.split(', ');
    } else if (str.split(',').length === 2) {
    	return str.split(',')
    } else {
    	return 'Location is not in the correct format of City, Country'
    }
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
	const location = document.querySelector(`#location`).value;
	const departure = document.querySelector(`#departure`).value;

	const splitLocation = split(location)

	const data = { 
		location: {
			city: splitLocation[0],
			country: splitLocation[1]
		},
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

	try {
		const res = await postData("http://localhost:8000/send", data);
		const json = JSON.parse(res);
		console.log(json);
		if (json.imgURL) {
			displayImg(json)
		}
		else if (data.currentForecast) {
			displayCurrentWeather(json)
		} else {
			displayFutureWeather(json)
		}
		
	} catch(error) {
		console.log(error);
	}



}

/* Event listener */
generateBtn.addEventListener(`click`, clickHandler);

function displayCurrentWeather(weatherObj) {
	const entry = document.querySelector(`.entry`);
	const data =`
	<p><b>Temp:</b> ${weatherObj.temp}</p>
	<p>${weatherObj.description}</p>
	`;
	entry.innerHTML = data;
}

function displayFutureWeather(weatherObj) {
	const entry = document.querySelector(`.entry`);
	const data =`
	<p><b>High:</b> ${weatherObj.high}</p>
	<p><b>Low:</b> ${weatherObj.low}</p>
	<p>${weatherObj.description}</p>
	`;
	entry.innerHTML = data;
}

function displayImg(imgObj) {
	const entry = document.querySelector(`.entry`);
	entry.innerHTML = `<img src="${imgObj.imgURL}">`
}

export { clickHandler, generateBtn };
