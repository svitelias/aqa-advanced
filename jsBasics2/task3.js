const number = 5;

console.log('--- for loop ---');
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log('--- while loop ---');
let i = 1;
while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}
