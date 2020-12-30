const getImg = require('../pixabay')

test('returns an object with properties: country and imgURL', async () => {

    const res = await getImg('Japan')
    expect(res).toHaveProperty('country', 'Japan')
    expect(res.imgURL).toMatch(/\.jpg$/)
    
})