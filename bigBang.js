const fs = require('fs');

let numbers = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    numbers.push('BIGBANG');
  } else if (i % 3 === 0) {
    numbers.push('BIG');
  } else if (i % 5 === 0) {
    numbers.push('BANG');
  } else {
    numbers.push(i.toString());
  }
}

fs.writeFile('output.json', JSON.stringify(numbers), 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('output.json file created successfully.');
});
