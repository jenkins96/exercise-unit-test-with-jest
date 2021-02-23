console.log("Hello World")
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
// Dollar to Yen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = oneEuroIs.JPY * (valueInDollar / oneEuroIs.USD);
    return valueInYen;
}
// Yen to Pound
const fromYenToPound = function(valueInYen){
    let valueinPound = oneEuroIs.GBP * (valueInYen / oneEuroIs.JPY);
    return valueinPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));