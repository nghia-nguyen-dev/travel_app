const {split} =  require('./split')

test(`Split a string "city, country" into an array with 2 items`, () => {
    
    expect(split('Tokyo, Japan'))
        .toEqual(['Tokyo', 'Japan'])

}) 