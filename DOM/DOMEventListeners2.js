const item = document.getElementById('item');
const heading = document.getElementById('heading');

item.addEventListener('click',function(){
    console.log("You Clicked");
    
});
item.addEventListener('mouseup',function(){
    console.log("Up");
});
item.addEventListener('mousedown',function(){
    console.log("Down");
});
heading.addEventListener("mouseover",function(){
    heading.classList.add('special');
});
heading.addEventListener("mouseout",function(){
    heading.classList.remove('special');
});