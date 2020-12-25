const getCoordinates = require('../geonames');

test(`Returns data about the city`, () => {
    
    expect(getCoordinates(`Boston`))
        .toBe(false)
}) 