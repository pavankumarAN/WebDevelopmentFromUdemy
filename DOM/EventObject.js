document.body.addEventListener('click',function(event){
    console.log(event.type);
    console.log(event.target);
});

document.getElementById("link").addEventListener('click',function(event){
    event.preventDefault();
    console.log(event.target);
    
})