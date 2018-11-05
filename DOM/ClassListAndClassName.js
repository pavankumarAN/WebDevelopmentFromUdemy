const second = document.getElementById("second");
second.className="colors";
second.className="text";
const third = document.querySelector("#third");
third.classList.add('colors','text');//you can pass either one class or multiple classes seperated by ','
third.classList.remove('text');
const present = third.classList.contains("colors");
if(present) {
    console.log("The css class is present in the element");
}
const absent = third.classList.contains("text");
if(absent) {
    console.log("The css class is present in the element");
}
else {
    console.log("The css class is not present in the element");
}