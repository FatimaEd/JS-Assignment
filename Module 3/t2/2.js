    const ul = document.querySelector('#target');
    const items = ['First item', 'Second item', 'Third item'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;

        if (item === 'Second item') {
            li.classList.add('my-item');
        }

        ul.appendChild(li);
    });