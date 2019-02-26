const btns =  document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(let i=0;i<btns.length;i++) {
    btns[i].addEventListener('click',() => {
        let number = btns[i].getAttribute('data-num');
        screen.value +=number;
    });
} 
equalBtn.addEventListener('click',() => {
    if(screen.value!=="") {
    let value = eval(screen.value);
    screen.value=value;
    }
    else {
        alert(`Input is empty`);
        return false;
    }
});

clearBtn.addEventListener('click', () => {
    screen.value = "";
})