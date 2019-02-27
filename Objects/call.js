const greet = function() {
    console.log(`Hai I'm ${this.name} and ${this.age} old`);
}

greet();


const person1 = {
    name : "Pavan",
    age : 25,
    greet : function() {
        console.log(`Hai I'm ${this.name} and ${this.age} old`)
    }
}

person1.greet();

const person2 = {
    name : "Santhosh",
    age : 29,
}

greet.call(person2);
greet.call(person1)