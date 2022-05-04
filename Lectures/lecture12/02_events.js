// EXAMPLE 1: Generic Functionality
// https://codepen.io/vanwars/pen/NmZRxe

// event handler:
const sayHello = () => {
    alert('Hello');
};

// event listener:
document.querySelector('#my_button').onclick = sayHello;

// alternative syntax:
// document.querySelector('#my_button').addEventListener('click', sayHello);


// EXAMPLE 2: Functionality depends on what has been clicked
// https://codepen.io/vanwars/pen/KYjgzL
// event handler:
const changeColor = (ev) => {
    const sourceElement = ev.target;
    document.querySelector('body').style.background = sourceElement.innerHTML;
 };
 
 // event listener attach to all of the buttons:
 document.querySelector('#color1').onclick = changeColor;
 document.querySelector('#color2').onclick = changeColor;
 document.querySelector('#color3').onclick = changeColor;

// alternative syntax:
//  document.querySelector('#color1').addEventListener('click', changeColor);
//  document.querySelector('#color2').addEventListener('click', changeColor);
//  document.querySelector('#color3').addEventListener('click', changeColor);
