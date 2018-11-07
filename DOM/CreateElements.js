const result = document.querySelector("#result");
console.log(result.children);
const bodyDiv = document.createElement("div");
const text = document.createTextNode("Body Element");
bodyDiv.appendChild(text);
result.appendChild(bodyDiv); 
bodyDiv.classList.add("show");
/* document.body.appendChild(bodyDiv); */
const newEle = document.createElement("div");
const textEle = document.createTextNode("Pavan");
newEle.appendChild(textEle);
document.body.appendChild(newEle);//adds a new element after the previous element
/* result.appendChild(newEle); */ //adds a new element before the previous element 