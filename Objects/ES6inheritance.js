function Employee(id) {
    this.id = id;
}

Employee.prototype.showId = function() {
    console.log(`This ${this.id} is my ID `)
}

const pavan = new Employee(51);
console.log(pavan);
pavan.showId();

function Manager(id, name, department) {
    Employee.call(this,id);
    this.name = name;
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);//This is because we are not allowed to call like ManagerObject.showId()
//So we are using the prototype of the Employee to the Manager

Manager.prototype.constructor  = Manager;//When we use Employee prototype for the Manager Object then it will redirect to the Employee object not to the Manager object
//To resolve that confliction we are using this

Manager.prototype.meeting = function() {
    console.log(`I'm calling a meeting`);
}

const santhosh = new Manager(23, "Santhosh", "Developing");

console.log(santhosh);

santhosh.meeting();

santhosh.showId();