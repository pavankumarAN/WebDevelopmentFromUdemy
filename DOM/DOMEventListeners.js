/* document.getElementById('item').classList.add('special'); */
const btn = document.querySelector('.btn');


//first way of doing things
/*     btn.addEventListener('click',addClass);
    function addClass() {
    console.log("hai");
    document.getElementById('item').classList.add('special');
}
 */


 //second way of doing things
btn.addEventListener('click',function(){
    document.getElementById('item').classList.add('special');
});