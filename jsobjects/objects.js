const person = {
    name: 'John',
    age: 29,
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

console.log(person);
person.greet();

const hobbies = ['Sports', 'Cooking', 'Weightlifting'];
// for of loop
// for(let hobby of hobbies){
//     console.log(hobby);
// }


//refresh on arrow functions
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);