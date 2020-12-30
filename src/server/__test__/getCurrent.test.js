const { getCurrentForecast } = require('../weatherbit')

test('Returns an object with the property "temp" and "description"', async () => {

    const arg = {
        country: "JP",
        lat: 35.6895,
        lng: 139.69171
    }

    const res = await getCurrentForecast(arg)
    expect(res).toHaveProperty('temp')
    expect(res).toHaveProperty('description')

})


