class Employee{
    constructor(id) {
        this.id = id;
    }
    showId() {
        console.log(`ID : ${this.id}`);
    }
}

const pavan = new Employee(51);
console.log(pavan); 
pavan.showId(); 

class Manager extends Employee {
    constructor(id,name,department) {
        super(id);
        this.name = name;
        this.department = department;
    }

    callMeeting() {
        console.log(`I'm calling meeting with ID : ${this.id}`);
    }
}

const Santhosh = new Manager(23,"Santhosh", "Development");
Santhosh.callMeeting();