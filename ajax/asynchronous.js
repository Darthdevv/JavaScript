const fs = require('fs');

const dogBreed = fs.readFileSync('./ajax/dog.txt', 'utf-8');
console.log(dogBreed);

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
  console.log(data);
});

console.log('hello world');
