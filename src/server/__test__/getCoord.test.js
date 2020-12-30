const getCoord = require('../geonames')

test('return an object with 3 properties', async () => {

    const location = {
        city: 'Tokyo',
        country: 'Japan'
    }

    const res = await getCoord(location)
    expect(res).toHaveProperty('country', 'JP')
    expect(res).toHaveProperty('lat')
    expect(res).toHaveProperty('lng')

})