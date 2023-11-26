
let numbers = [];

for (let i = 0; i < 5; i++ ) {
    let num = parseFloat(prompt('Enter a number' + ( i + 1) + '!'));
    numbers.push(num);
}

console.log('Numbers in reverse: ');
for (let i = numbers.length - 1; i>=0; i--) {
    console.log(numbers[i]);
}

