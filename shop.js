const input = require('console-input').input

console.log('Hello');
console.log('What do you want');
const answer = input();

if (answer === 'vodka') {
    console.log('how old are you?')
    const age = input()
    
    if (age >= 18) {
        console.log('Ok')
    } else {
        console.log('NO');
    }
} else {
    console.log('Yes')
}