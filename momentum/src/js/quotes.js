const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function getQuotes() {
  const quotes = "images/quotesEn.json";
  const res = await fetch(quotes);
  const dataQuotes = await res.json();
  const quoteNum = Math.floor(Math.random() * (10 - 1 + 1));
  quote.innerHTML = dataQuotes[quoteNum].text;
  author.innerHTML = dataQuotes[quoteNum].author;
}
export default getQuotes;
