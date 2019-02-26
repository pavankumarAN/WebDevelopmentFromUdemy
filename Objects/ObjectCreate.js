const createPerson = {
    greet : function() {
        console.log(`Hai I'm ${this.name}, ${this.age} old`);
    }
}

//type1
const Pavan = Object.create(createPerson);
Pavan.name = "Pavan";
Pavan.age = 25;

Pavan.greet();


//type2
const Santhosh = Object.create(createPerson, {
    name : {value : "Santhosh"},
    age : {value : 29}
});

Santhosh.greet();
