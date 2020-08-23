var questionCount = 0;
var colorfulScore = 0;
var medicalScore = 0;
var blackScore = 0;
var kn95Score = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", medical);
q1a2.addEventListener("click", kn95);
q1a3.addEventListener("click", black);
q1a4.addEventListener("click", colorful);

q2a1.addEventListener("click", kn95);
q2a2.addEventListener("click", colorful);
q2a3.addEventListener("click", medical);
q2a4.addEventListener("click", black);

q3a1.addEventListener("click", colorful);
q3a2.addEventListener("click", medical);
q3a3.addEventListener("click", black);
q3a4.addEventListener("click", kn95);

//#TODO: Define quiz functions here
function medical() {
  medicalScore += 1;
  questionCount += 1;
  alert("Hey doctor! What's up?")
  if (questionCount >=3){
    updateResult();
  }
}
function kn95() {
  kn95Score += 1;
  questionCount += 1;
  alert("The bigger the mask, the better!")
  
  if (questionCount >=3){
    updateResult();
}
function black() {
  blackScore += 1;
  questionCount += 1;
  alert ("The classic cloth!")
  
  if (questionCount >=3){
    updateResult();
}
function colorful() {
  colorfulScore += 1;
  questionCount += 1;
  alert("You are full of color!");
  
  if (questionCount >=3){
    updateResult();
}
function result1() {
  
}
  
var result=document.getElementById ("result");
var resultImg=document.getElementById("resultImg");
function updateResult () {
  if (colorfulScore >= 3) {
    result.innerHTML =
      "Colorful: Your mask is very colorful and it is very eye-catching! Everyone loves seeing the bright side of you! They enjoy your company and wish to have you around anytime of day!";
  } else if (medicalScore >= 3) {
    result.innerHTML =
    "Medical: If your parents were well prepared before the virus spread, or your parents are doctors, this is the mask for you!";
  } else if (blackScore >= 3) {
    result.innerHTML =
      "Black cloth mask: This mask shows that you are really active your community and go outdoors often! You try to help those around you at any oppurtunity and use criticism to help you grow as a person!";
  } else if (kn95Score >= 3) {
    result.innerHTML =
      "You take safety as your number one priority to keep yourself and others healthy! This mask helps people the most based on protection, just like how you protect people!";
  }
}