let person = {};
console.log(person);
console.log(person.name);
console.log('name' in person);
let king = new Object();
console.log(king);
if(king.name===undefined) {
    king.name="Pavan";
    console.log(king.name);
}
console.log(king.name);
delete king.name;
console.log(king.name);
let human = {
    firstName : "Pavan",
    lastName : "kumar A N",
    age : 25,
    height : 5.6,
    weight : 65,
    married : true,
    education : "Graducated from VTU in bachelor of Engineering in Computer Science stream",
    job : "Software Developer",
    address : "Chitradurga"
}
for(const key in human) {
    console.log(`${key} : ${human[key]}`);
}
let students = {
    student1 : {name : "Pavan", branch : "CSE"},
    student2 : {name : "Vinay", branch : "CV"},
    student3 : {name : "Swamy", branch : "Mech"}
}
console.log(students);
console.log(students.student1);
console.log(students.student1.name);
for(let kid in students) {
    console.log(kid);
    console.log(students[kid]);
}
//passing objects as parameters into the functions
function wish({greet,name}) {
    return `${greet}!!!! ${name}`;
}
let pavan = wish({name : "Pavan", greet : "Hai"});
console.log(pavan);