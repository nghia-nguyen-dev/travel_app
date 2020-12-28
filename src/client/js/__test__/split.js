function split(str) {
	if (str.split(', ').length === 2) {
    	return str.split(', ');
    } else if (str.split(',').length === 2) {
    	return str.split(',')
    } else {
    	return 'Location is not in the correct format of City, Country'
    }
}

export{split}