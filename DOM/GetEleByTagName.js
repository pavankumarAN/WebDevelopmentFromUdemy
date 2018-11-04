var list =document.getElementsByTagName('li');
console.log(list);
console.log(list.length);
/* list.forEach(function(ele){
    console.log(ele);
}); */
//this gives an error 
const betList = [...list];
console.log(betList);
