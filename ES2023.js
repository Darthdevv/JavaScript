'use strict';

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const quote = await response.json();

  // Output the quote and author name
  console.log(quote);
  console.log(`- ${quote.author}`);
}
randomQuote();