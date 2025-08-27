// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("===VARIABLE===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

//  firstName = "Sarah";
// let myCurrentJob = "teacher";

// age = 25;
// age = 26;

// console.log("=== DATA TYPES ===");


// let age = 23;
// console.log(age);
// console.log(typeof age);


// let firstName = "Jonas";
// console.log(firstName);
// console.log(typeof firstName); 


// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); 


// let year;
// console.log(year); 
// console.log(typeof year); 

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);



// // Basic Operatiors - Math operation
// console.log("===MATH OPERATION===");

// const now = 2037;
// const ageJonas = now - 1991;
// console.log(ageJonas);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operation:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

//  firstName = "Julia";
// const lastName = "Santiago";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 23 + "years old");



// //// Assignment Operators
// console.log("===ASSIGNMENT OPERATORS===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);



// /// comparison operators
// console.log("===COMPARISON OPERATORS ===");

// console.log("Age coparison"
// );
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <=15);

// const isFullAge = ageSarah >=18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018); 
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);



// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console

// let BMImark = (massMark / heightMark ** 2);
// console.log("Mark,s BMI is:", BMImark)
// let BMIjohn = (massJohn / heightJohn ** 2);
// console.log("John's BMI is:", BMIjohn)

// console.log("===COMPARISON OPERATORS ===");

// console.log("BMI coparison"
// );
// console.log(BMImark > BMIjohn);

// console.log("Number comparison:");
// console.log(27.30 > 24.19);
// console.log("Mark has a higher BMI than John")



////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);



////////////////////////////////////
// Taking Decisions: if / else Statements
 age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}



////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}


let height = 0; 
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


if (height !== undefined) {
  console.log("Height is defined");
}





////////////////////////////////////
// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

BMIMark

if (BMIMark >= BMIJohn) {
  console.log("Mark has a higher BMI than John");
} else {
  const BMIdifference = BMIMark - BMIJohn;
  console.log(`Mark's BMI difference to John is ${BMIdifference} years :`);
}
// hhhh