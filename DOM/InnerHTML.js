const list =document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
console.log(item.textContent);
console.log(item.innerHTML);
const ul = document.createElement('ul');;
ul.innerHTML = `<li class="item">List Item</li>
<li>List Item</li>`;
document.body.appendChild(ul);
const secondDiv = document.createElement('h1');
secondDiv.textContent = `I'm second DIV`;
document.body.appendChild(secondDiv);
list.insertBefore(secondDiv,item);