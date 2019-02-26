
//Factory functions
function createPerson(firstName, lastName) {
    return  {
        firstName : firstName,
        lastName : lastName,
        fullname : function() {
            console.log(`My full name is ${this.firstName} ${this.lastName}`);
        }
    }
}

const pavan = createPerson("Pavankumar", "A N");
pavan.fullname();

const santhosh = createPerson("Santhosh","Biradar");
santhosh.fullname();


//Constructor functions

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

var sharan = new Person("Sharan", "Hruday");
sharan.fullname();
var kiran = new Person("Kiran","Kumar");
kiran.fullname();