'use strict';

// Get the user's name

var userName = prompt('Please cite your name trespasser!');
var correct = 0;
var totalQuestions = 0;
alert(userName + '! Answer these questions correctly to proceed on! Answer with y/n or yes/no');

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

var answerOne = prompt('Are green tea and red tea from the same kind of tea leaves?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') { alert('That is correct! Here is your next question!'); } else {
  alert('That is incorrect! This is not going well');
  correct++;
}
console.log(
  'This question is designed for tea lovers ' + userName + ' answered ' +
  answerOne
);
totalQuestions++;

var answerTwo = prompt(
  'Are dogs the first animal to be domesticated by humans?'
).toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  alert('That is correct! Here is your next question!');
  correct++;
} else {
  alert('That is incorrect! This is not going well.');
}
console.log(
  'This question is designed for animal lovers ' + userName + ' answered ' + answerTwo
);
totalQuestions++;

var answerThree = prompt('Are endamame soybeans?').toLowerCase();
if (answerThree === 'y' || answerThree === 'yes') {
  alert('That is correct! Here is your next question!');
  correct++;
} else {
  alert('That is incorrect! This is not going well.');
}
console.log(
  'This question is designed for sushi lovers ' + userName + ' answered ' + answerThree
);
totalQuestions++;

var answerFour = prompt('Are there an algorithm based on ants?').toLowerCase();
if (answerFour === 'y' || answerFour === 'yes') {
  alert('That is correct! Here is your next question!');
  correct++;
} else {
  alert('That is incorrect! This is not going well.');
}
console.log('This question is designed for algorithm lovers ' + userName + ' answered ' + answerFour);
totalQuestions++;

var answerFive = prompt('Are bubble teas healthy?').toLowerCase();
if (answerFive === 'n' || answerFive === 'no') {
  alert('That is correct, bubble tea is high in sugar!!!');
  correct++;
} else {
  alert('That is incorrect, tapiocas are a form of starch!!');
}
console.log('This question is designed for tapioca lovers ' + userName + ' answered ' + answerFive);
totalQuestions++;

var guessSix = 0;
while (guessSix < 4) {
  var answerSix = prompt('What is my favorite tekken?');
  answerSix = Number(answerSix);
  console.log('The guess has been converted to ' + answerSix + ' and to test it out ' + (answerSix + 1));
  if (answerSix === 7) {
    alert('That is correct, way to pay attention to my introduction!');
    correct++;
    break;
  } else if (answerSix < 7) {
    alert('That is incorrect, too low of a guess ' + (3 - guessSix) + ' more tries!');
    guessSix++;
  } else {
    alert('That is incorrect, tekken 7 is the newest one guess a new number ' + (3 - guessSix) + ' more tries!');
    guessSix++;
  }
}
console.log(userName + ' took ' + (1 + guessSix) + ' guesses.');
var questions = 6;
totalQuestions++;

var livingHistory = ['taiwan', 'japan', 'south korea'];
var guessSeven = 0;

while (guessSeven < 6) {
  var answerSeven = prompt('Which Asian countries have I been to?').toLowerCase();
  if (answerSeven === livingHistory[0] || answerSeven === livingHistory[1] || answerSeven === livingHistory[2]) {
    alert('That is correct, I have visited those places');
    correct++;
    break;
  } else {
    alert('That is incorrect, guess again ' + (6 - guessSeven) + ' more tries!');
    guessSeven++;
  }
}
alert('Thanks for the guesses I have been to Taiwan, Japan, South Korea');
console.log(userName + ' took a total of' + (1 + guessSeven) + ' guesses');
totalQuestions++;

if (correct > 0.8 * questions) {
  alert('You may enter ATLANTIS!!!');
} else {
  alert('You are not allowed!!!!');
}
alert('Thanks for playing, ' + userName + ' you guessed ' + correct + ' out of ' + totalQuestions + ' correct.');