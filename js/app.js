'use strict';

// Get the user's name


var userName = prompt('Please cite your name trespasser!');
var correct = 0;
var totalQuestions = 0;
alert(userName + '! Answer these questions correctly to proceed on! Answer with y/n or yes/no');
var quiz;
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

const startQuestion = (question, answer, flavor) => ({
  question,
  answer,
  flavor
});
var questionList = [];
questionList.push(startQuestion('Are green tea and red tea the same kind of leaves', 'yes', 'tea'));
questionList.push(startQuestion('Are dogs believed to be the first species to be domesticated?', 'no', 'animal'));
questionList.push(startQuestion('Are there an algorithm based on ants?', 'yes', 'algorithm'));
questionList.push(startQuestion('Are endamame soy beans?', 'yes', 'sushi'));
questionList.push(startQuestion('Are bubble teas healthy for you?', 'no', 'bubble tea'));

console.log(questionList[0]);
const answerQuestion = (quizQuestions) => {
  var response = prompt(quizQuestions.question).toLowerCase();
  if (response.charAt(0) === quizQuestions.answer.charAt(0)) {
    alert('That is correct! Here is your next question!');
    correct++;
  } else {
    alert('That is incorrect!');
  }
  console.log('This question is designed for ' + quizQuestions.flavor + ' lovers');
  totalQuestions++;
};

for (quiz = 0; quiz < questionList.length; quiz++) {
  answerQuestion(questionList[quiz]);
}

function questionSix() {
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
  totalQuestions++;
}
questionSix();

function questionSeven() {
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
}
questionSeven();

if (correct > 0.8 * totalQuestions) {
  alert('You may enter ATLANTIS!!!');
} else {
  alert('You are not allowed!!!!');
}
alert('Thanks for playing, ' + userName + ' you guessed ' + correct + ' out of ' + totalQuestions + ' correct.');