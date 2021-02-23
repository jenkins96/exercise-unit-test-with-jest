// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})
// Dollar to Yen
test("One dollar should be 106.58 yen", function(){
    // import
    const { fromDollarToYen } = require('./app.js')
    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)
    // if 1 dollar is 106.5 yen, then 3.5 dollar should be (3.5 * 106.5)
    const expected = (127.9 * (3.5 / 1.2));
    // this is the comparison for the unit test
    expect(expected).toBeCloseTo(yen, 1);
})
// Yen to Pound
test("One yen should be 0.0062 pounds", function(){
      // import
    const { fromYenToPound } = require('./app.js')
    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)
    // if 1 yen is 0.006 pounds, then 3.5 (3.5 * 0.006)
    const expected = (3.5 * 0.006);
    // this is the comparison for the unit test
    expect(expected).toBeCloseTo(pound, 1);
})