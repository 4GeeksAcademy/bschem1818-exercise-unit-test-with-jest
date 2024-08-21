test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5 jpy", function() {
    const { fromDollartoYen } = require('./app.js');
    const Yen= fromDollartoYen(5.5);
    const expected = 5.5 * 156.5;
    expect(fromDollartoYen (5.5)).toBe(860.75);
})

test("One yen should be 0.87 euro", function() {
    const { fromYentoEuro } = require('./app.js');
    const Yen= fromYentoEuro(8.5);
    const expected = 8.5 * 0.87;
    expect(fromYentoEuro (8.5)).toBe(7.395);
})


