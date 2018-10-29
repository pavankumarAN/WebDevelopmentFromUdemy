function toFahrenheit(temp) {
let fahr = temp * 9/5 + 32;
console.log(`Temperature : ${temp} in Fahrenheit is ${fahr}`);
return fahr;
}
let cat = toFahrenheit(50);

function toCelcius(temp) {
    let cel=((temp-32)* 5/9);
    console.log(`Temperature : ${temp} in Celcius is ${cel}`);
}
toCelcius(cat);