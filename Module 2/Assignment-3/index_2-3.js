dogsNames = [];

for ( i = 0; i<6; i++) {
    let name = prompt('Enter The dogs names ' + (i + 1) + ':');
    dogsNames.push(name);
}

dogsNames.sort().reverse();

let ulEl  = document.createElement('ul');

for (let i = 0; i < dogsNames.length; ++i) {
    let liEl = document.createElement('li');
    liEl.textContent = dogsNames[i];
    ulEl.appendChild(liEl);
}

document.getElementById('list').appendChild(ulEl);


