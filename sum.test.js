const sum = require('./sum')

test('it properly adds two numbers', () => {
    // if (sum(1,2) == 3 ){
    //     console.log('works')
    // } else {
    //     console.log('maybe you check the code again for errors')
    // }
    expect(
        sum(1,2)
    ).toBe(3)
});