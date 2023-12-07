'use strict';


async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const quote = await response.json();

  // Output the quote and author name
  document.getElementById('quote').innerHTML = quote.content;
  document.getElementById('author').innerHTML = quote.author;
}

const quoteBtn = document.getElementById('quote-generator')
quoteBtn.addEventListener('click', randomQuote)
// randomQuote();

