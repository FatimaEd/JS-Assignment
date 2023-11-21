var username = prompt("Please enter your name:");
var greeting = "Hello, " + username + "!";

var element = document.getElementById("greeting");
element.innerText = greeting;