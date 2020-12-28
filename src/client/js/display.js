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
	const data =`
	<p>Sorry we were unable to locate that city in ${imgObj.country}</p>
	<img src="${imgObj.imgURL}">
	`;
	entry.innerHTML = data;
}

export { displayCurrentWeather, displayFutureWeather, displayImg }