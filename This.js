var Employee = function(name,age,place) {
    this.name=name;
    this.age=age;
    this.place=place;
    this.employeeDetails = function() {
        console.log(`I'm ${this.name}, my age is ${this.age} and I'm from ${this.place}`);
    };
}
var Pavan = new Employee("Pavan",25,"Chitradurga");
Pavan.employeeDetails();
var Santhosh = new Employee("Sathosh",27,"Bidar");
Santhosh.employeeDetails();