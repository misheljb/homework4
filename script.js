var main = document.getElementById("main");
var timer = document.getElementById("timer");
var answerbutton = document.getElementById("answerbutton");




//Set Question Variables

var questions = [
    {
    question: "Question 1: What is one of the Javascript data types?",
    options: [
        "Boolean",
        "Megabyte",
        "Mitochondria",
        "Appending",],
    correct: "Boolean",

},
{
    question: "Question 2: Which company developed Javascript?",
    options: [
        "Apple",
        "Oracle",
        "Netscape",
        "Google",],
    correct: "Netscape",

},
{
    question: "Question 3: What is a prompt box?",
    options: [
        "A box that gives you options to select",
        "A prompt box which allows the user to enter input by providing a text box",
        "A dropdown box that gives you multiple choices",
        "A radio selection ",],
    correct: "A prompt box which allows the user to enter input by providing a text box",

},
{
    question: "Question 4: What does CSS stand for?",
    options: [
        "Copy Style Sheet",
        "Consistantly Styling Sheet",
        "Cascading Style Sheets",
        "Counter Style Sheets",],
    correct: "Cascading Style Sheet",

},
{
    question: "Question 5: What is the === operator?",
    options: [
        "Returns true when equal value and type is found",
        "Value not found",
        "Returns not equal value or not equal type",
        "Returns equal when only the value is found",],
    correct: "Returns true when equal value and type is found",

},
{
    question: "Question 6: How many looping structures are there in Javascript?",
    options: [
        "4",
        "2",
        "1",
        "3",],
    correct: "3",

},
]


// Generate the questions //

function generateQuestions() {
    var askingQuestion = questions[questionsIndex];
    main.textContent = askingQuestion.question;


    for ( i = 0; i < askingQuestion.options.length; i++) {
       var list = document.createElement("list");
        answerbutton.setAttribute("list-index",i);


        var button = document.createElement("button");
        button.textContent = askingQuestion.options[i];

     

      

        
    }
}



// Timer Function//

function timer() {
    counter= 60;
    timer.textContent = counter;
    if (counter < 0){
        stopTimer();   
    }
    
}

// Clear timer//
function clearTimer() { 
    clearInterval (holdtimer);
 }