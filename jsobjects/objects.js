const person = {
    name: 'John',
    age: 29,
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

console.log(person);
person.greet();

const hobbies = ['Sports', 'Cooking'];
// for of loop
// for(let hobby of hobbies){
//     console.log(hobby);
// }


//refresh on arrow functions
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

/*
<----------------------------------------------------->
*/

hobbies.push('Programming');
console.log(hobbies);

/*
<----------------------------------------------------->
*/


// The spread operator 
// we are not adding a new value to an array but creating a copy of that array with all the old values with the new value attached keeping the const = hobbies 
//This is called immutability

//Creates a copy of the Array 
const copiedArray = hobbies.slice();
console.log(copiedArray);

//Put the array into the [0] position into the new array
const copiedArrayTwo = [hobbies];
console.log(copiedArrayTwo);