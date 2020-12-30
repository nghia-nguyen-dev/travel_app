const { getFutureForecast } = require('../weatherbit')

test('', async () => {

    const arg = {
        dateDiff: 2,
        lat: 35.6895,
        lng: 139.69171
    }

    const res = await getFutureForecast(arg)
    expect(res).toHaveProperty('high')
    expect(res).toHaveProperty('low')
    expect(res).toHaveProperty('description')

})
