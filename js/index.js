import { handleList, handleSingleValue, handleObject } from "./utils.js";

const studentNames = ["Lucille", "Gilbert", "Jennie", "Lydia", "Agnes"];

const students = [
  { name: "Lucille", age: 30, points: 26, happiness: 5 },
  { name: "Gilbert", age: 45, points: 0, happiness: 1 },
  { name: "Jennie", age: 47, points: 39, happiness: 5 },
  { name: "Lydia", age: 29, points: 14, happiness: 2 },
  { name: "Agnes", age: 34, points: 39, happiness: 4 },
];

// [26, 0, 39, 14, 39]

// const pointsArray = students.map((student) => {
//   return student.points;
// });
const pointsTotal = students
  .map((student) => student.points)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("pointsTotal: ", pointsTotal);

handleList(students, "Original Students");

/** includes */

const studentNamesIncludesHarry = studentNames.includes("Harry");

// const numbers = [1, 4, -4, 15, 42];
// const numbersIncludesFour = numbers.includes(4);

handleSingleValue(studentNamesIncludesHarry, "studentNamesIncludesHarry");

/** find and findIndex */

const personOverThirty = students.find((student) => student.age > 30);
console.log("personOverThirty: ", personOverThirty);

handleObject(personOverThirty, "personOverThirty");

const indexOfStudentWith39Points = students.findIndex(
  (student) => student.points === 39
);

handleSingleValue(indexOfStudentWith39Points, "indexOfStudentWith39Points");

//////////////////////////////////
//      Meet back at 10:17      //
//////////////////////////////////

///////////
/** sort */
///////////

// const students = [
//   { name: "Lucille", age: 30, points: 26, happiness: 5 },
//   { name: "Gilbert", age: 45, points: 0, happiness: 1 },
//   { name: "Jennie", age: 47, points: 39, happiness: 5 },
//   { name: "Lydia", age: 29, points: 14, happiness: 2 },
//   { name: "Agnes", age: 34, points: 39, happiness: 4 },
// ];

// const sortedByAge = students.slice().sort((a, b) => a.age - b.age);
const sortedByAge = students.toSorted((a, b) => a.age - b.age);
console.log("sortedByAge: ", sortedByAge);

handleList(sortedByAge, "sortedByAge");

const sortedByName = students.slice().sort((a, b) => {
  // first lowercase everything!
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log("students: ", students);

handleList(sortedByName, "sortedByName");

////////////
/** slice */
////////////

handleList(students, "Not Original Anymore");
handleList(sortedByAge, "Not Sorted By Age Anymore");

/////////////
/** reduce */
/////////////

const numbers = [1, 4, 5, 42, 7];

const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("total", total);

//

/////////////////////
/** some and every */
/////////////////////

const anyStudentHasZeroPoints = students.some(
  (student) => student.points === 0
);

handleSingleValue(anyStudentHasZeroPoints, "anyStudentHasZeroPoints");

const everyStudentIsOlderThanThirty = students.every(
  (student) => student.age > 30
);

handleSingleValue(
  everyStudentIsOlderThanThirty,
  "everyStudentIsOlderThanThirty"
);
