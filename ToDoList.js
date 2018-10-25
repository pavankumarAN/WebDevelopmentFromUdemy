let toDoList=[];
//Complex Logic
/* function addItem(arr) {
    let answer = prompt("Enter the item to be inserted into the List");
    let correct = answer.toLowerCase().trim();
    if(checkDuplicateItem(arr,correct)) {
        arr.push(correct);
    }
    else {
        alert("Sorry, this item is already added");
    }
}

function checkDuplicateItem(arr,item) {
    let available=false;
    let index = arr.indexOf(item);
    if(index>-1) {
        available = false;
    }
    else {
        available = true;
    }
    return available;  
} */

//Simple Logic
function addItem(arr) {
    let answer = prompt("Enter the item to be inserted into the List");
    let correct = answer.toLowerCase().trim();
    let index = arr.indexOf(correct);
    if (index === -1) {
        arr.push(correct);
    }
    else {
        alert("Sorry, this item is already added");
    }
}

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
console.log(toDoList);


