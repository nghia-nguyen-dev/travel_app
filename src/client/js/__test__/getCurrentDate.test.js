import {getCurrentDate} from './getCurrentDate'

test(`Return current date`, () => {
    
    expect(getCurrentDate())
        .toBe(`12/27/2020`)
}) 