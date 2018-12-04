//arrays
//for loop
var names = ["One","Two","Three"];
for(let i=0;i<names.length;i++) {
    console.log(names[i]);
}

//for-in will displays the either key or indexes
for(let v in names) {
    console.log(v);
}

//for-of will displays the values
for(let v of names) {
    console.log(v);
}
//string
var name = "Pavan";

for(let v in name) {
    console.log(v);
}
for(let v of name) {
    console.log(v);
}

//objects
var studentNames = {a:"Pavan",b:"santhosh",c:"Jeevan"};

for(let v in studentNames) {
    console.log(v);
}

//for-of will give error because objects are not iterable.
/* for(let v of studentNames) {
    console.log(v);
} */