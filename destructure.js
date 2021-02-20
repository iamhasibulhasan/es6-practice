const object = {name: "Hasibul hasan", age : 23, height : "5.9f", weight : "90kg", motherName : "Lipi", wifeName : "Proma"};

const height= object.height;
const {name} = object;
const {motherName, wifeName} = object;

console.log(height);
console.log(name);
console.log(motherName, wifeName);