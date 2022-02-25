function submitAnswerOne() {
const answerOneInput = document.getElementById('answer-one-input');
const answerOne = answerOneInput.value;
if(answerOne == 'Intro to Internet Programing') {
alert("That's right!");
hide('question-one');
show('question-two');
}
else if(answerOne == 'Intro To Internet Programing') {
alert('Close! All words capitalized except "to"');
}
else {
alert('Wrong! Hint: Check D2L!')
}
}

function submitAnswerTwo(){
const answerTwoInput = document.getElementById('answer-two-input');
const answerTwo = answerTwoInput.value;

if(answerTwo == 121) {
alert("That's right!");
hide('question-two');
show('question-three');
}
else if(answerTwo < 121) {
alert('The answer is higher.');
}
else {
alert('The answer is lower.')
}
}

function submitAnswerThree(){
const answerThreeInput = document.getElementById('answer-three-input');
const answerThree = answerThreeInput.value;

if(answerThree == 'Friday') {
alert("That's right!");
hide('question-three');
show('question-four');
}
else if(answerThree == 'Thursday') {
alert('Hint: Later in the Week');
}
else if(answerThree == 'Wednesday') {
alert('Hint: Later in the Week');
}
else if(answerThree == 'Tuesday') {
alert('Hint: Later in the Week');
}
else if(answerThree == 'Monday') {
alert('Hint: Later in the Week');
}
else if(answerThree == 'Sunday') {
alert('Hint: Later in the Week');
}
else if(answerThree == 'Saturday') {
alert('Hint: Earlier in the week!');
}
else {
alert('Wrong! Try Again')
}
}

function submitAnswerFour(){
const answerFourInput = document.getElementById('answer-four-input');
const answerFour = answerFourInput.value;

if(answerFour == 24) {
alert("That's right!");
hide('question-four');
show('done');
}
else if(answerFour < 24) {
alert('The answer is higher.');
}
else {
alert('The answer is lower.')
}
}

function show(id){
const element = document.getElementById(id);
element.style.display = 'block';
}

function hide(id) {
const element = document.getElementById(id);
element.style.display = 'none';
}

