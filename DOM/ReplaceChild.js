const result = document.querySelector("#result");
console.log(result.children);
const bodyDiv = document.createElement("div");
const text = document.createTextNode("Body Element");
bodyDiv.appendChild(text);
/* result.appendChild(bodyDiv); */
bodyDiv.classList.add("show");
const newEle = document.createElement("div");
const textEle = document.createTextNode("Pavan");
newEle.appendChild(textEle);
result.appendChild(newEle);
document.body.insertBefore(newEle,result);
result.replaceChild(bodyDiv,newEle);