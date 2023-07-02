const cloneArray = require('./cloneArray')

test('expect the array to be arranged properly', ()=>{
    const array = [1,2,3,4]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)

})