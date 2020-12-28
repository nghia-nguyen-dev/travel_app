import { getDateDiff, split, postData } from './helper';
import { displayCurrentWeather, displayFutureWeather, displayImg } from './display';

const generateBtn = document.querySelector(`#generate`);
generateBtn.addEventListener(`click`, clickHandler);

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

export { clickHandler, generateBtn };
