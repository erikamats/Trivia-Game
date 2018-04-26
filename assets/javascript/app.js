// Start trivia on click --> Then display screen with questions

// * The player will have a limited amount of time to finish the quiz. 
    // "Time Remaining: X seconds"

// You'll create a trivia form with multiple choice or true/false options (your choice).


//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

//below is to remove initial star button


// ------------------------------ \\

// set up the onclick of the start button

$(document).ready(function() {

$("#start").on("click","#quiz-area", function() {

    $("#start").remove();

});

//add timer after start button look up  the add function

var questions = [{
question: "Which album sold more records: Alanis Morissette's 'Jagged Little Pill' or Spice Girls' 'Spice'?",
answer: ["Jagged Little Pill'", "Spice"],
correct: "Spice",
},
{
question: "Which was the highest grossing movie of the '90s?",
answer: ["Titanic", "Jurassic Park"],
correct: "Titanic",
},
{
question: "What was Tommy's last name in 'Rugrats'",
answer: ["Finster", "Pickles"],
correct: "Pickles",
},
{
question: "'Tamagotchi' is a Japanese portmanteau of what two words?",
answer: ["Egg and Watch", "Egg and Computer"],
correct: "Egg and Watch",
},
{
question: "What was the name of the sheep who was the first successfully cloned animal in 1996?",
answer: ["Dolly", "Molly"],
correct: "Dolly"
},
{
question: "What was the flavor of the soft drink Surge?",
answer: ["Pineapple", "Citrus"],
correct: "Citrus"
},

{
question: "Which band formed first: NSYNC or the Backstreet Boys?",
answer: ["NSYNC", "Backstreet Boys"],
correct: "Backstreet Boys"
},
{
question: "Rocko, of the Nickelodeon animated series Rocko's Modern Life,' was what kind of animal?",
answer: ["A wallaby", "A mixed breed dog"],
correct: "A wallaby"
},
{ 
question: "Who sang the Friends' theme song?",
answer: ["The Rembrandts", "Gin Blossoms"],
correct: "The Rembrandts"
}];

var panel =  $("#quiz-area");


// add for loop here to run through questions

for ( var i=0; 1 < questions.length; i++);
panel.append("<h2>" + questions[i].question + "</h2>");
panel.append(questions[i].answer);
console.log(questions[i].correct);
startTimer();
countdown();



// if (questions[0].correct === questions[0].answer[0]){
//     console.log("Red is the correct answer!");
// } else if (questions[0].correct !== questions[0].answer[0]){
//     console.log("This is incorrect!");
// }


//Timer Section

var timer;
var seconds = 10;
    function countdown(){
      seconds--; 
      console.log(seconds);
      if(seconds === 0){
        return clearInterval(timer);

}};

countdown();

function startTimer(){
    timer = setInterval(countdown,1000);
}

});

startTimer();

