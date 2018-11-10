const name = document.getElementById('name');
/* name.addEventListener('keypress',function(){
    console.log("Key was pressed");
}); */

/* name.addEventListener('keydown',function(){
    console.log("Key down");
}); */

name.addEventListener('keyup',function(){
    console.log("Key Up" +" "+ name.value);
})