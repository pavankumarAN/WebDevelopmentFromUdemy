var arr = [1, 2, 3, 4];
//Normal functions
function name1() {
    console.log(`My name is "Pavan"`);
}
function call1(a,b) {
    console.log(`The sum of two numbers is ${a + b}`);
}
arr.forEach(function(el) {
    console.log(el);
}
)


//ES6 functions
const name2 = ()=> {
    console.log(`My name is "Pavan"`);
}

const call2 = (a, b) => {
    console.log(`The sum of two numbers is ${a + b}`);
}
arr.forEach(el=>{
    console.log(el);
})

//Normal functions
name1();    
call1(3,2);


//ES6 functions
name2();
call2(5,4);