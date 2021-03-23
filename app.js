// My name 
const inputName = prompt("Hello what is your name?");

const firstChar = inputName.charAt(0).toUpperCase();

const restOfName = inputName.slice(1, inputName.length).toLowerCase();

const myName = firstChar + restOfName;

// My age
const myAge = prompt("How old are you?");

// Early years variable
let earlyYears = 2;
// Multiplication assignment by 10.5 to earlier years?
earlyYears *= 10.5;

// My Age minus 2? Where we going with this? lol
let laterYears = myAge - 2;
// Multiplication assignment by 4 to my later years?
laterYears *= 4;

// console.log(earlyYears);
// console.log(laterYears);

// My age in dog years!
const myAgeInDogYears = earlyYears + laterYears;




// Using string interpolation putting all the vars together
console.log(`You are ${myName}. You are ${myAge} years old in human years which would be ${myAgeInDogYears} years old in dog years.`);