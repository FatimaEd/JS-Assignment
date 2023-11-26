
let participantsNumber = parseInt(prompt('Enter the number of participants: '));

let participantsNames = [];

for (let i = 0; i < participantsNumber; i++) {
    let names = prompt('Enter the name of all participants ' + (i+1) + ':' );
    participantsNames.push(names);
}

participantsNames.sort();

let ol = document.createElement('ol');
for (let i = 0; i < participantsNames.length; i++ )  {
    let li = document.createElement('li')
    li.textContent = participantsNames[i];
    ol.appendChild(li);
}

document.body.appendChild(ol);

