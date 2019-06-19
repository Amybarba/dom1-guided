// createElement = make a new HTML element
const h1 = document.createElement('h1');
const div = document.createElement('div');
console.log(div);

const button = document.createElement('button');
console.log('button', button);

const nav = document.createElement('nav');
console.log('nav', nav);

for (let i = 0; i <= 4; i++) {
    console.log(document.createElement('a'));
}

// 1 Select a part of the DOM to attach!
const body = docoument.querySelector('body');
// 2 Attach to the selected element
// attach a child! (appendChild)
body.appendChild(div);
div.className = 'container';
div.style.border = '3px dashed rebeccapurple';

div.appendChild(h1);
h1.textContent = 'My Super Fun Page';
h1.style.textAlign = 'center';
h1.style.textTransform = 'uppercase';

body.appendChild(button);
button.textContent = 'CLick me!';
h1.textContent = parseInt('3');
