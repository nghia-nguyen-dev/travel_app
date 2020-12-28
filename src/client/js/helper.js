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

export {getCurrentDate, getDateDiff, validateDateFormat, split, postData}