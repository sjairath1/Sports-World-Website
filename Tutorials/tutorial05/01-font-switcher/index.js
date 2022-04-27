let currentFontSize = 1.4;

const makeBigger = () => {
   currentFontSize += 0.2;
   console.log(currentFontSize)
   alert('make bigger!');
   document.querySelector('.content').style.fontSize= `${currentFontSize}em`;
};

const makeSmaller = () => {
   currentFontSize -= 0.2;
   console.log(currentFontSize)
   alert('make smaller!');
   document.querySelector('.content').style.fontSize= `${currentFontSize}em`;
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

/*
*/
