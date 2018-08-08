"use strict";

// Get the user's name

var userName = prompt("Please cite your name trespasser!");

alert(
  userName +
    "! Answer these questions correctly to proceed on! Answer with y/n or yes/no"
);

// if (correct answer) {
// do this
// and do this
// etc.
// } else {
// do this other thing
// and do this other thing
// }

//Created a loop to auto feed questions in this way so that we can keep track of the number of questios
//makes adding questions in the future much easier and the success rate adjust automatically
//adjust the questions limit on the loop to add more questions and add question below by copying such format

var answerOne = prompt(
  "Are green tea and red tea from the same kind of tea leaves?"
).toLowerCase();
if (answerOne === "yes" || answerOne === "y") {
  alert("That is correct! Here is your next question!");
} else {
  alert("That is incorrect! This is not going well");
  correct++;
}
console.log(
  "This question is designed for tea lovers " +
    userName +
    " answered " +
    answerOne
);

var answerTwo = prompt(
  "Are dogs the first animal to be domesticated by humans?"
).toLowerCase();
if (answerTwo === "no" || answerTwo === "n") {
  alert("That is correct! Here is your next question!");
  correct++;
} else {
  alert("That is incorrect! This is not going well.");
}
console.log(
  "This question is designed for animal lovers " +
    userName +
    " answered " +
    answerTwo
);

var answerThree = prompt("Are endamame soybeans?").toLowerCase();
if (answerThree === "y" || answerThree === "yes") {
  alert("That is correct! Here is your next question!");
  correct++;
} else {
  alert("That is incorrect! This is not going well.");
}
console.log(
  "This question is designed for sushi lovers " +
    userName +
    " answered " +
    answerThree
);

var answerFour = prompt("Are there an algorithm based on ants?").toLowerCase();
if (answerFour === "y" || answerFour === "yes") {
  alert("That is correct! Here is your next question!");
  correct++;
} else {
  alert("That is incorrect! This is not going well.");
}
console.log(
  "This question is designed for algorithm lovers " +
    userName +
    " answered " +
    answerFour
);

var answerFive = prompt("Are bubble teas healthy?").toLowerCase();
if (answerFive === "n" || answerFive === "no") {
  alert("That is correct, bubble tea is high in sugar!!!");
  correct++;
} else {
  alert("That is incorrect, tapiocas are a form of starch!!");
}

var questions = 5;
var correct = 0;

if (correct > 0.8 * questions) {
  alert("You may enter ATLANTIS!!!");
} else {
  alert("You are not allowed!!!!");
}
