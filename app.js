
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYentoEuro = function(valueInYen) {
    let valueInEuro = valueInYen * 0.87;
    return valueInEuro;
}


module.exports = {fromEuroToDollar, fromDollartoYen, fromYentoEuro}

