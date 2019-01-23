let arr1 = ['1','2','3'];
let [a,b,c] = arr1;
console.log(`${a}--${b}--${c}`);


let fun1 = () => {
    return [1,2,3];
}
let [one, , three] = fun1();
console.log(one);
console.log(three);
