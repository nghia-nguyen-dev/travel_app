import {validateDateFormat} from './validateDate'

test(`Return true if date is in mm/dd/yyyy format`, () => {
    
    expect(validateDateFormat('12/27/2020'))
        .toBe(true)

}) 