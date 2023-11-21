var wizardName = prompt("Enter your name:");
var randomNumber = Math.floor(Math.random() * 4) + 1;

var house;
if (randomNumber === 1) {
  house = "Gryffindor";
} else if (randomNumber === 2) {
  house = "Slytherin";
} else if (randomNumber === 3) {
  house = "Hufflepuff";
} else {
  house = "Ravenclaw";
}

document.getElementById("result").textContent =
  wizardName + ", you are " + house + ".";