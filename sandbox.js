// factions & arguments

// const ace = (q, w) => {

// };
// ace("1", "2");

// const sum = (num1, num2) => {
//   console.log(num1 + num2);

// };
// sum(20, 30);

// const answer = (num1, num2) => {
//   console.log(num1 - num2);
// };

// answer(50, 25);

// const answer = (num1, num2) => {
//   console.log(num1 * num2);
// };

// answer(100, 5);

// const love = (male, female) => {
//   if (male == "martin" && female == "venus") {
//     console.log("match");
//   } else if (male == "martin" && female == "samantha") {
//     console.log("TAMA");
//   } else if (male == "martin" && female == "miya") {
//     console.log("pwede na sa dreams!");
//   } else if (male == "alucard" && famale == "venus") {
//     console.log("bawal");
//   } else {
//     console.log("not match");
//   }
// };

// love("martin", "miya");

// const name = "shaun";

// //  function

// const greet = () => "hello po";

// let resultone = greet();
// console.log(resultone);

// // methods

// let resulttwo = name.toUpperCase();
// console.log(resulttwo);

// callback & foreach

// const myfunc = (callbackfunc) => {
//   //  do somethimg
//   let value = 50;
//   callbackfunc(value);
// };

// myfunc(function(value){
//   //  do something
//   console.log(value);
// });

// callback & foreach

// let people = ['martin', 'vj', 'trono', 'ed', 'cj'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

//  object literals

let user = {
  name: "vjelson",
  age: 24,
  email: "vjelson@yahoo.com",
  loocations: "montalban",
  blogs: ["dance tutorail", "step by step"],
};

console.log(user);
console.log(user.name);

// user.age = 18;
console.log(user.age);



console.log(user["blogs"]);
user.name = "trono";
console.log(user.name);

console.log(typeof user);
