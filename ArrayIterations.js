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
//Using map method
//returning the number by adding all the array values
let digits = [1,2,3,4,5,6,7,8,9];
let count = digits.reduce(function(total,value){
    console.log(value);
    total = total+value;
    return total;
},0);
console.log(count);
//returning the array of distinct values
let students = ["one","one","two","three","four","five","six","five","one"];
let distinct = students.reduce(function(holder,curEle){
    if(holder.indexOf(curEle)===-1){
        holder.push(curEle);
    }
   // console.log(curEle);
    return holder;
},[]);
console.log(distinct);
//returning the object
let numericals = ["one","one","two","three","four","five","six","five","one"];
let addition = numericals.reduce(function(total,numericals){
    if(total[numericals]){
        total[numericals]+=1;
    }
    else {
        total[numericals]=1;
    }
    return total;
},{});
console.log(addition);
