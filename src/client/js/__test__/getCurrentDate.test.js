const { getCurrentDate } = require('../helper')

test(`Return current date`, () => {
    expect(getCurrentDate())
        .toBe(`2020-12-29`)
})