var getClass = document.querySelector("#special").getAttribute("class");
console.log(getClass);
const link = document.getElementById("link").getAttribute("href");
console.log(link);
const sibling = document.getElementById("link").nextSibling.nextSibling;
console.log(sibling);
sibling.setAttribute("class","first");
console.log(sibling);
var list = document.querySelectorAll(".first");
console.log(list);