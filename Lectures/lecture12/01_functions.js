// ES6 Syntax:
const addTwoNums = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwoNums(3, 5));
console.log(addTwoNums(30, 5));
console.log(addTwoNums(123, 456));

// Older Syntax #1 (works the same way):
var addTwoNums1 = function (num1, num2) {
    return num1 + num2;
};

console.log(addTwoNums1(3, 5));
console.log(addTwoNums1(30, 5));
console.log(addTwoNums1(123, 456));


// Older Syntax #2 (works the same way):
function addTwoNums2(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNums2(3, 5));
console.log(addTwoNums2(30, 5));
console.log(addTwoNums2(123, 456));