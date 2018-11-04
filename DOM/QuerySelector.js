var query = document.querySelector('#list');
query.style.backgroundColor = "red";
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
one.style.backgroundColor = 'yellow';
two.style.backgroundColor = 'blue';
three.style.backgroundColor = 'gray';
four.style.backgroundColor = 'pink';
var all = document.querySelectorAll('#all');
console.log(all);
var allClass = document.querySelectorAll('.allClass');
console.log(allClass);
allClass.forEach(function(item){
    console.log(item);
    
    item.style.backgroundColor = 'green';
});
