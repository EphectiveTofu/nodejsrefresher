//asynchronous programming is an essential concept in JavaScript that allows your code to run in the background without blocking the execution of other code.
//asynchonous since it does not fire off immediately

const fetchData = (callback) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            callback('Done');
        }, 1500);
    });
};



//This is also a callback function
setTimeout(() => {
    console.log('Timeout is done');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

//synchronous code this all fires together 
console.log('Hello');
console.log('Hi again');

