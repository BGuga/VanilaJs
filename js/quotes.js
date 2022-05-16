const quotes =[
{
    quote: "A",
    author:"AA",
},{
    quote: "B",
    author:"BB",
},{
    quote: "C",
    author:"CC",
},{
    quote: "D",
    author:"DD",
},{
    quote: "E",
    author:"EE",
},{
    quote: "F",
    author:"FF",
},{
    quote: "G",
    author:"GG",
},{
    quote: "H",
    author:"HH",
},{
    quote: "I",
    author:"II",
},{
    quote: "J",
    author:"JJ",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText= todaysQuote.author;