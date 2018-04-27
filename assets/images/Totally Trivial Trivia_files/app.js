
// ------------Start Below------------------ \\


// Instructions + create function
$(document).ready(function() {
    
    function startScreen(){
        startIntro = " Press the start buttton to begin! "; 
        // console.log(startIntro)

        $("#sub-wrapper").prepend("<h3>" + "<br>"+ startIntro + "</h3>");
     }

startScreen(); // run the function


// // set up the onclick removal of the start button
    $("#start").click(function() {

    $("#sub-wrapper").fadeOut();
    $("#start").fadeOut();
    $("#quiz-area").hide();


}); //closing of onclick fade out

  


  


// //create questions section
function startTrivia(){
    var panel =  $("#quiz-area");
    // var timer = "";
    var seconds = 30;

    setTimeout(startTrivia, 2000);
    $("#quiz-area").append("<h3>" + "Time Remaining: " + seconds +  " seconds" + "</h3>");

}
startTrivia();

// startTrivia();  // initiate function startTriva

//     var panel =  $("#quiz-area");   
//     var timer = "";
//     var seconds = 10;
    
//     function countdown(){
//       seconds--; 
      
//      
//       console.log(seconds);
//       if(seconds === 0)
//         return clearInterval(timer);
    

    


// countdown();

// function startTimer(){
//     timer = setInterval(countdown,1000);


//     for (var i =0; i < questions.length; i++)
// }

// function loss(){
//    incorrect ++;
//         if (questions[0].correct[0] === questions[0].answer[0]){
//             console.log("Red is the correct answer!");

//         } else if (questions[0].correct !== questions[0].answer[0]){
//             console.log("This is incorrect!");
//         }



}); // close ready




//add timer after start button look up  the add function


// var incorrect = 0 ;
// var correct = 0 ;

// var questions = [{
// question: "Which album sold more records: Alanis Morissette's 'Jagged Little Pill' or Spice Girls' 'Spice'?",
// answer: ["Jagged Little Pill'", "Spice"],
// correct: "Spice",
// },
// {
// question: "Which was the highest grossing movie of the '90s?",
// answer: ["Titanic", "Jurassic Park"],
// correct: "Titanic",
// },
// {
// question: "What was Tommy's last name in 'Rugrats'",
// answer: ["Finster", "Pickles"],
// correct: "Pickles",
// },
// {
// question: "'Tamagotchi' is a Japanese portmanteau of what two words?",
// answer: ["Egg and Watch", "Egg and Computer"],
// correct: "Egg and Watch",
// },
// {
// question: "What was the name of the sheep who was the first successfully cloned animal in 1996?",
// answer: ["Dolly", "Molly"],
// correct: "Dolly"
// },
// {
// question: "What was the flavor of the soft drink Surge?",
// answer: ["Pineapple", "Citrus"],
// correct: "Citrus"
// },

// {
// question: "Which band formed first: NSYNC or the Backstreet Boys?",
// answer: ["NSYNC", "Backstreet Boys"],
// correct: "Backstreet Boys"
// },
// {
// question: "Rocko, of the Nickelodeon animated series Rocko's Modern Life,' was what kind of animal?",
// answer: ["A wallaby", "A mixed breed dog"],
// correct: "A wallaby"
// },
// { 
// question: "Who sang the Friends' theme song?",
// answer: ["The Rembrandts", "Gin Blossoms"],
// correct: "The Rembrandts"
// }];

// 


// // add for loop here to run through questions

// for (var i = 0; 1 < questions.length; i++) {

//     panel.append("<h3>" + questions[i].question + "</h3>");
//     panel.append("<button>" + questions[i].answer[0]);
    
//     console.log( "Correct answer" + questions[i].correct);
//     // startTimer();
//     // countdown();



//             if (questions[0].correct[0] === questions[0].answer[0]){
//                 console.log("Red is the correct answer!");

//             } else if (questions[0].correct !== questions[0].answer[0]){
//                 console.log("This is incorrect!");
//             }

//         }
// // //Timer Section

// // var timer;
// // var seconds = 10;
    
// // function countdown(){
// //       seconds--; 
// //       $("#quiz-area").append("<h1>" + Time Remaining:  + timer + "</h1>");
// //       console.log(seconds);
// //       if(seconds === 0){
// //         return clearInterval(timer);

// // }};

// // countdown();

// // function startTimer(){
// //     timer = setInterval(countdown,1000);


// // //                 var myVar = setInterval(function(){ myTimer() }, 1000);

// // //                 function myTimer() {
// // //                     var d = new Date();
// // //                     var t = d.toLocaleTimeString();
// // //                     document.getElementById("demo").innerHTML = t;
// // //                 }

// // //                 function myStopFunction() {
// // //                     clearInterval(myVar);
// // // }
// // }

// startTimer();
