const {getDateDiff} = require('./dateDiff')

test(`Subtract current date from future date argument`, () => {
    expect(getDateDiff('12/28/2020'))
        .toBe(1)
}) 