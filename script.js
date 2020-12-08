
// Default varaibles
var main = document.getElementById("main");
var clock = document.getElementById("timer");
var list = document.getElementById("answerbutton");


console.log("im connected")

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

var questionsIndex = 0

// Generate the questions //

function generateQuestions() {
    var askingQuestion = questions[questionsIndex];
    main.textContent = askingQuestion.question;

    console.log("askingQuestion")

    for ( i = 0; i < askingQuestion.options.length; i++) {
     
    
        var answerbutton = document.createElement("button");
        answerbutton.textContent = askingQuestion.options[i];

        answerbutton.setAttribute("value", askingQuestion.options[i]);

        answerbutton.onclick = tester

      
        list.appendChild(answerbutton)
        


    }
}

function tester() {
    console.log("click button")

    console.log(this.value)
   if (this.value === questions[questionsIndex].correct) 
   {correct.textContent(correct)
       console.log("correct")
       
   } else {
       
   }
}

// Timer Function//
function currentTimer () {
    timeRem--;
    timer.setAttribute("textContent", timeRem);
    if (timeRem < 0) {
        stopTimer();
        userInfo();
        timer.style.visibility = "hidden";
    }
}


//stop timer//
function stopTimer () {
    clearInterval(holdTimer);
}

// Deduct time as penalty for incorrect answers
function timePenalty() {
    timeRem -= 5;
}





 //Call function//
 generateQuestions();



