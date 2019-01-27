const sendBtn = document.getElementById('sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click',sendMsg);

function sendMsg() {
    let inMsg = messageIn.value;
    if(inMsg) {
    messageOut.innerHTML = inMsg;
    messageIn.value='';
    setTimeout
    }
    else {
        alert("Please enter message to send");
    } 
   
}