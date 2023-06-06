const person = {
    name: 'John',
    age: 29,
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
//object destructuring 
const printName = ({ name, age }) => {
    console.log(name, age);
};

printName(person);

//Can only do this when destructuring objects
const { name, age} = person;
console.log(name, age);


const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
