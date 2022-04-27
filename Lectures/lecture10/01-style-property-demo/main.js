
const makeRed = () => {
    // your code here...
    resetButtonBackground();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor= "red";
    document.querySelector("#btn1").style.backgroundColor= "pink";

};

const makeBlue = () => {
    // your code here...
    resetButtonBackground();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor= "blue";
    document.querySelector("#btn2").style.backgroundColor= "red";
};

const makePink = () => {
    // your code here...
    resetButtonBackground();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor= "pink";
    document.querySelector("#btn3").style.backgroundColor= "blue";

};

const makeOrange = () => {
    // your code here...
    resetButtonBackground();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor= "orange";
    document.querySelector("#btn4").style.backgroundColor= "red";

};


const resetButtonBackground = () => {
    const color="#EEE"
    document.querySelector("#btn1").style.backgroundColor= "rgb (133,133,133)";
    document.querySelector("#btn2").style.backgroundColor= "rgb (133,133,133)";
    document.querySelector("#btn3").style.backgroundColor= "rgb (133,133,133)";
    document.querySelector("#btn4").style.backgroundColor= "rgb (133,133,133)";

};
