// console.log('Fundamentals Part 2');

// // FUnctions - Declarations and Expressions
// console.log("=== FUNCTIONA ===");

// function logger() {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ////////////////////////////////////
// // Function Expressions
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age1 = calcAge(2002);
// console.log(age1);

// function calcAge2(birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const myAge = calcAge(2002, 2037);
// const herAge = calcAge (2001, 2037);

// console.log('I am ${myAge} years old');
// console.log('She is ${herAge} years old');

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
// console.log(introduce("Sarah")); // Missing parameters become undefined


// // Return Values and Scope
// function calcAge3(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge3(birthYear); 
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));


// // Global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }
// testScope();
// console.log(globalVar);

// const userName = "Jonas"; 

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`; 
//   const timestamp = new Date().toLocaleTimeString(); 

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41); 
// scoreKoalas = calcAverage(23, 34, 27);   
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);

// // Corrected Array constructor usage
// const years = [1991, 1992, 1993];
// console.log(years);

// console.log(grades[0]);
// console.log(grades[3]);

// console.log(grades.length);

// grades[0] = 99;
// console.log(grades);

// // Function to calculate age
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// // Corrected array of ages
// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);

// // Update one age
// ages[1] = calcAge(1950);
// console.log(ages);

// // Array Methods
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Add elements
// friends.unshift("John");
// console.log(friends);

// // Remove elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // Search in array
// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("John"));

// console.log(friends.includes("Michael"));
// console.log(friends.includes("John"));

// // Array iteration using loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// // Using forEach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Grade average calculation
// const allGrades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < allGrades.length; i++) {
//   total += allGrades[i];
// }

// const average = total / allGrades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// // Count passing grades
// let passCount = 0;
// allGrades.forEach((grade) => {
//   if (grade >= 70) passCount++;
// });

// console.log(`${passCount} out of ${allGrades.length} students passed`);


////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
