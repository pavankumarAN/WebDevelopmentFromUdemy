var buttons = document.querySelector('#buttons');

var colors = ['red','blue','yellow','white','green','pink','black'];

buttons.addEventListener('click', () => {
    var body =document.querySelector('body');
    console.log(body);
    body.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
});