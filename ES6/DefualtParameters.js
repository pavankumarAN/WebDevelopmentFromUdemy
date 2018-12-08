function add(a, b=2, c=3) {
    console.log(`The sum of three numbers is ${a+b+c}`);
}

const summ = (a, b=2, c=3) => {
    console.log(`The sum of three numbers is ${a+b+c}`);
}


add(1);
add(1,4,5);

summ(1);
summ(2,4,6);