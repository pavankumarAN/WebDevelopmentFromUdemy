function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.school = "NMPHS";
Person.prototype.greet = function () {
    console.log(`Name : ${this.firstName} ${this.lastName} and School : ${this.school}`);
};

function Student(firstName, lastName) {
    // this.firstName = firstName;
    // this.lastName = lastName;

    //the above lines of code can be optimized by using inheritance even better way
    Person.call(this,firstName,lastName);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.role = "student";

Student.prototype.answerQuestion = function() {
    console.log(`and the answer is....`);
}

const pavan = new Student("Pavankumar", "A N");

console.log(pavan);
pavan.greet();
pavan.answerQuestion();


function Teacher(firstName,lastName) {
    // this.firstName = firstName;
    // this.lastName = lastName;

    //the above lines of code can be optimized by using inheritance even better way
    Person.call(this, firstName, lastName);
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.role = "teacher";

Teacher.prototype.askQuestion = function() {
    console.log(`and the answer to the question is?`);
}

const santhosh = new Teacher("Santhosh","Biradar");
console.log(santhosh);
santhosh.greet();
santhosh.askQuestion();