function validateDateFormat(date) {
    const testCase = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    const results = testCase.test(date);
    return results;
}

module.exports = {validateDateFormat}