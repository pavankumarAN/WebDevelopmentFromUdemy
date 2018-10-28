let names = ["one","two","three","four","five","six","seven","eight","nine","ten"];
//Using anonymous function
names.forEach(function(name) {
    console.log(name);
});
//Using seperate function
names.forEach(iteration);
function iteration(name) {
    console.log(name);
}
//Using filter method
let numbers = [-2,1,0,-5,5,4,2,6,-5-4];
let positive = numbers.filter(function(num){
    return num>0;
});
console.log(positive);
//Using map method
const users = [1,2,3,4,5];
const mul = users.map(function(dig){
    return dig*2;
});
console.log(mul);

