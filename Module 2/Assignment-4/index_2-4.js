let numbers = [];

while (true) {
    let number = parseFloat(prompt("Enter numbers (enter 0 to print all the numbers): "));
    if (number === 0) {
        break;
    }
    numbers.push(number);
}
numbers.sort(function (a, b){ return b - a; });


console.log('Numbers from largest to smallest: ')
for ( let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);

console.log('Highest number: ' + highest)
console.log('Lowest number: ' + lowest)



