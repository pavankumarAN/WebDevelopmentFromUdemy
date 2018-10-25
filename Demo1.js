
/* function calculate() {
	var getIn = "fdbfdsafbdjbf"
	document.getElementById("demo").innerHTML=getIn.length;
} */
console.log(this);

var person = {
	name : "Pavan",
	age : 25,
	place:"Chitradurga",
	details : function() {
		console.log(this);
	}
};
person.details();