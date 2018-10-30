function toCent(feet,inches) {
    if(feet<0 || inches<0) {
        alert("Invalid Parameters");
        return;
    }
    else{
        let centimeters = (feet*12)*2.54;
        centimeters +=inches*2.54;
        console.log(`${centimeters} from ${feet} and ${inches}`);
    }
}
toCent(12,2);
//toCent(-3,8);