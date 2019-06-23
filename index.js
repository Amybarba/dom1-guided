// console.log('Connected to the console!');
// DOM = Document Object Model

// const body = document.querySelector('body');

// body.innerHTML = '';
// body.innerHTML = 'haha';
// body.style.background = 'purple';
// body.style.fontSize = '400px';

// setTimeout(() => body.style.fontSize = '100px', 5000);

// select stuff from HTML (elements)
// const body = document.querySelector('body');
// console.log('body');
// HTML ELEMENT
// const container = document.querySelector('.container');
// console.log('container', container);
// CLASS
// const lambdaButton = document.querySelector('#custom-btn');
// console.log('lamdaButton', lambdaButton);
// const specificSection = document.querySelector(
//     'section.secondary-content h2.services.header'
// );
// console.log('specificSection', specificSection);


// const navLinks = document.querySelector('nav a');
// console.log('querySelector', navLinks);

// const navLinksAll = document.querySelectorAll('nav a');
// console.log('querySelectorAll', navLinksAll);
// // node list ---> ARRAY LIKE!

// console.log(new Array());

// // forEach lives on the nodelist
// navLinksAll.forEach(navlink => (navlink.style.color = 'Blue'));

// // convert nodelist to array

// const newArray = Array.from(navLinksAll)
// console.log(newArray);
// for (let i = 0; i < newArray.length; i ++) {
//     newArray[i].style.fontFamily = 'Comic Sans MS';
// }

const body = document.querySelector('body');
console.log(body);

body.style.background = 'red';
