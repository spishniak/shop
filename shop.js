const input = require('console-input').input;

const VODKA = 'vodka';
const ADULT_AGE = 18;


console.log('Hello');
console.log('What do you want');
const answer = input();

if (answer === VODKA) {
    console.log('how old are you?');
    let age = input();
    console.log(age)
    
    while(isNaN(age)){
        console.log("age must be number")
        age = input();
    }

    if (age >= ADULT_AGE) {
        console.log('Ok');
    } else {
        console.log('NO');
    }
} else {
    console.log('Yes');
}
