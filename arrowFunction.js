// ! function declare way -1 
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(7, 5));

// ! function declare way -2
// const add = function(num1, num2){
//     return num1 + num2;
// }
// console.log(add(7,6));
// ! function declare way -3(using arrow function)
const doubleIt = num => num *2;


// ! function declare way -4(using arrow function)more than 1 parameter
const add = (num1, num2) => num1 + num2;


// ! function declare way -4(using arrow function)more than 1 method
const multiWork = (x, y) => {
    const add = x + y;
    const difference = x - y;
    return add * difference;
}

console.log(multiWork(12, 5));
