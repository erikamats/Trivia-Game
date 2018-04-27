
// ------------Start Below------------------ \\


// Instructions + create function
$(document).ready(function() {


    
        function startScreen(){
            startIntro = " Press the start buttton to begin! "; 
            // console.log(startIntro)

            $("#sub-wrapper").prepend("<h3>" + "<br>"+ startIntro + "</h3>");
            // $("#quiz-area").hide();
        }




         //create questions section
            var preguntas = [{
                    question: "Which album sold more records? 'Jagged Little Pill' or  'Spice'?",
                    answer: ["Jagged Little Pill ", " Spice"],
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
   
                      // for loop to display all questions               
                    for (var i = 0; i < preguntas.length; i++) {

                    console.log(preguntas[i].question + preguntas[i].answer);
                    console.log( preguntas[i].question + " Correct answer = " + preguntas[i].correct);
                    
                    } //close for loop
        
                    // var TriviaQuestions = (preguntas[i].question + preguntas[i].answer);
                    //correct
                    var correct=0;

                    function accurate(){
                        correct++;
                    }

                    //incorrect
                    var incorrect=0;
                    function notAccurate(){
                    incorrect++;
                    }
                    // Unanswered
                    var noanswer = (10 - (correct + incorrect));

                    // Results Screen
                    function results(){
                        $("#quiz-area").html("<p class= 'text-center'> All Done!" + "</p>" + 
                        "<p>" + "  Correct Answers: " +  correct + "</p>" +
                        "<p>" + "  Incorrect Answers : " +  incorrect + "</p>" +
                        "<p>" + " Unanswered: " +  incorrect + "</p>")
                    }


                   //  start timer
                    function startTimer() {
                          

                            function countdown(){
                                seconds--; 
                                // console.log(seconds);
                                if(seconds === 0)
                                    return clearInterval(timer); // stops the counter
                                    results();
                              
                            } // close countdown

                        timer = setInterval(countdown, 1000);    
                        countdown();
                        $("#quiz-area").html("<h3>" + "Time Remaining: " + timer + " seconds" + "</h3>");
                    } // close startTimer with countdown


                        function startTrivia(){
                            var seconds = 120;

                            chosenAnswer = $(this).text();
                            if (chosenAnswer === preguntas.question[i]){
                                correct++;

                            }  else if (chosenAnswer !== preguntas.answer[i]){
                                //  console.log("This is incorrect!");
                                incorrect ++;
                    
                            } else if(seconds === 0){
                                return clearInterval(timer); // stops the counter
                                results();
                              
                         }} //close startTrivia

// close button and start questions on click

$("#start").on("click","#start",(function(event) {          

    startScreen(); // run the instruc.
    // $("#sub-wrapper").fadeOut();
    // $("#start").fadeOut();
  $("#quiz-Area").append(TriviaQuestions);
      
startTrivia();
startTimer();
})); //close 
}) // close ready

                       




   //initiate function startTrivia
  

        //         function scoring(){
                
        //                 if (questions[0].correct[0] === questions[0].answer[0]){
        //                     console.log("Correct answer!");
        //                     correct++;
                
        //                
       
                        
        //                 
                    




            


// Start Run \\

 

// //add timer after start button look up  the add function

// }); //closing of onclick fade out



//------------------------------------------\\

//add timer after start button look up  the add function



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
