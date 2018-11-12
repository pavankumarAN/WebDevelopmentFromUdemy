/* document.getElementById('container').addEventListener('click',function(){
    console.log("You clicked on container");
});
document.getElementById('list').addEventListener('click',function(){
    console.log('You clicked on Unordered list');
});
document.querySelectorAll('.list-item').forEach(function(item) {
    item.addEventListener('click',function() {
        console.log("You clicked on list Item"); 
    })
}); */



document.getElementById('container').addEventListener('click',function(){
    console.log("You clicked on container");
},true);
document.getElementById('list').addEventListener('click',function(){
    console.log('You clicked on Unordered list');
},true);
document.querySelectorAll('.list-item').forEach(function(item) {
    item.addEventListener('click',function() {
        console.log("You clicked on list Item"); 
    })
},true);