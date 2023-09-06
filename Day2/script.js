mainE1.style.backgroundColor = 'var(--main-bg)';
//mainE1.style.setProperty('background-color', 'var(--main-bg)');

mainE1.innerHTML = "<h1>SEI Rocks!</h1>";
//add a class of flex=ctr to mainE1

mainE1.classList.add('flex-ctr');

//select and cache nav it
const topMenuE1 = document.querySelector('#top-menu');

topMenuE1.style.height = '100%';

//Add a class of flex-aroundto topMenuE1.

topMenuE1.style.backgroundColor = 'var(--top-menu-bg)';
topMenuE1.classList.add('flex-around');