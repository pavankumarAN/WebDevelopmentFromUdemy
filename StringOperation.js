function StringCut(list) {
    let cut = list.split(' ');
    console.log(cut);
    let sec = cut.join(' ').trim();
    console.log(sec);
}
StringCut("My name is Pavan kumar");

function reverseString(text) {
    let str= text.split('').reverse().join('');
    console.log(str);
    
}
reverseString("Programming is tough until and unless you show interest about it");
function longWord(text) {
    let longestWord="";
    let spl = text.split(' ');
    console.log(spl);
    for(let key of spl) {
        if(key.length>longestWord) {
            longestWord = key;
        }
    }
    console.log(`The longest word in "${text}" is ${longestWord} and the length is ${longestWord.length}`);
}
longWord("Rashmi is the waste body in the world and she doesn\'t hear to me");