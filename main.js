const author = document.querySelector(".quot h1");
const quot = document.querySelector(".quot p");
const newQuot = document.querySelector(".btns .regroup");
const linkBtn = document.querySelector(".btns .link");

async function generateRandomQuotes (){
    const res = await fetch("https://type.fit/api/quotes");
    const slip = await res.json();
    return slip;

 }

 const data = await generateRandomQuotes();

 function generateQuote() {
    let len = data.length;
    let index = Math.floor(Math.random() *len);
    author.textContent = data[index]['author'];
    quot.textContent = data[index]['text'];
 }

 newQuot.addEventListener("click", generateQuote);
 linkBtn.addEventListener("click", generateQuote);
 generateQuote();


