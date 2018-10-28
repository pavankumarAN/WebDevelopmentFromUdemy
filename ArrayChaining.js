let names = ["one","two","three","four","five","two","two","five"];
let sale = names.filter(function(ele){
    return ele==="two";
}).map(function(key){
    return `${key} is for sale`;
});
console.log(sale);