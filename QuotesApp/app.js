var quotes = [
    {
        name : "Pavankumar AN",
        quote : "If you die without showing your success to haters then your effort was about only earning money"
    },
    {
        name : "Rashmi",
        quote : "Decisions defines destiny"
    },
    {
        name : "Shivu",
        quote : "Have knowledge like google should contact you for the information"
    },
    
    {
        name : "Samrat",
        quote : "Make simple but it must be an example"
    }
];

var quoteBtn = document.querySelector('#quoteBtn');
var quoteAuthor = document.querySelector('#quoteAuthor');
var quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',printQuote);

function printQuote() {
    let randomNum = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[randomNum].quote;
    quoteAuthor.innerHTML = quotes[randomNum].name;
}