import { getDateDiff, split, postData } from './helper';
import { displayCurrentWeather, displayFutureWeather, displayImg } from './display';

async function clickHandler() {
	const location = document.querySelector(`#location`).value;
	const departure = document.querySelector(`#departure`).value;

	// Make sure that both inputs are filled out before moving on
	if (!location || !departure) {
		alert(`Both fields must be filled out`);
		return;
	}

	const splitLocation = split(location)

	const data = { 
		location: {
			city: splitLocation[0],
			country: splitLocation[1]
		},
		currentForecast: true,
	};

	// Check how far trip date is from today's date
	const dateDiff = getDateDiff(departure);
   
	// Cannot get weather info that is Greater than 16 days in the future(due to weatherbit API limit)
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

export { clickHandler };
