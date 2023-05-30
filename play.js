const fName = 'Ken';
let age =  39;
const hasHobbies = true;

age = 40;

const summarizeUser = (userName, userAge, userHasHobby) => {
    
    return (
    'Name is ' + userName 
    + ', age is ' + userAge 
    + ' and the user has hobbies ' + userHasHobby
    ); 
};

// Normal way to wite an arrow function with two parameters
// const add = (a, b) => {
//     return a + b
// }

//Shorthand way to write an arrow function 
const add = (a, b) => a + b;

//When you have only one parameter being passed into the function as an 
//argument, you can omit the parentheses
const addOne = a => a + 1;

//If you are not passing in an argument you need to have the parantheses. 
const addRandom = () =>  1 + 5;


console.log(add(3, 4));
console.log(addOne(54));
console.log(addRandom());

console.log(summarizeUser(fName, age, hasHobbies));