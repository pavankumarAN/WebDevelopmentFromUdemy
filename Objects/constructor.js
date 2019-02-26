function Student(name,age,branch) {
    this.name = name;
    this.age = age;
    this.branch = branch; 
    // this.greet = function() {
    //     console.log(`Hello, I'm ${this.name} and I'm ${this.age} old, studying in the ${this.branch}`);
    // }
}
 
Student.prototype.college = "SJMIT";
Student.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} old, studying in the ${this.branch} of ${this.college}`);
}
const Pavan = new Student("Pavan", 25, "CSE");

console.log(Pavan);
Pavan.greet();

const Santhosh = new Student("Santhosh",29,"ECE");

console.log(Santhosh);

Santhosh.greet();

