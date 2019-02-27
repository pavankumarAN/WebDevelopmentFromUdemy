const addItemsAction = document.querySelector('.addItemsAction');
const addItemsInput = document.querySelector('.addItemsInput');
const addItemsSubmit = document.querySelector('.addItemsSubmit');

const groceryList = document.querySelector('.groceryList');
const displayItemsAction = document.querySelector('.displayItemsAction');
const clearItems = document.querySelector('.clearItems');


addItemsSubmit.addEventListener('click',addItem);






function addItem(event) {
    event.preventDefault();
    let value = addItemsInput.value;
    console.log(value);
}