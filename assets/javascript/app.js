//global variables
    //set timer to 30 seconds
    var timeRemaining = 31;
    //holds time interval
    var timeInterval;
    //holds count for correct answers
    var countCorrectAnswers = 0;
    //holds count for incorrect answers
    var countIncorrectAnswers = 0;
    //holds count for unanswered questions
    var countUnansweredQuestions = 0;
    //holds questions, answers, correct answers
    
    var questionsArray =    
    [{
        q1: "What is the name of the cocktail that the Dude imbibes on?",
        answerA: "White Russian",
        answerB: "Old-Fashioned",
        answerC: "Sazerac",
        answerD: "Martini",
        correctAnswer: "A"
    },{ 
        q2: "In what war did Walter fight in?",
        answerA: "Vietnam War",
        answerB: "Kosovo War",
        answerC: "Bosnia War",
        answerD: "Gulf War",
        correctAnswer: "A"
    },{
        q3: "What really tied the room together?",
        answerA: "the end table",
        answerB: "the rug",
        answerC: "the lamp",
        answerD: "the drapes",
        correctAnswer: "B" 
    },{
        q4: "Who does Walter tell \'You're out of your element!\"?",
        answerA: "The Dude",
        answerB: "Bunny",
        answerC: "Smokey",
        answerD: "Donny",
        correctAnswer: "D"
    },{
        q5: "What sporting league do the Dude and Walter play in together?",
        answerA: "Basketball",
        answerB: "Football",
        answerC: "Bowling",
        answerD: "Baseball",
        correctAnswer: "C"
    },{
        q6: "Fill in the blank: \"MARK IT ________!\"",
        answerA: "A STRIKE",
        answerB: "A TURKEY",
        answerC: "A SPLIT",
        answerD: "ZERO",
        correctAnswer: "D"
    },{
        q7: "What animal do the Nihilists throw in the bathtub with the Dude?",
        answerA: "a dog",
        answerB: "a cat",
        answerC: "a marmot",
        answerD: "a rat",
        correctAnswer: "C"
    },{
        q8: "Who has been kidnapped?",
        answerA: "Maude",
        answerB: "Bunny",
        answerC: "the Dude",
        answerD: "Donny",
        correctAnswer: "B"
    },{
        q9: "What character does Jeff Bridges play?",
        answerA: "Lebowski",
        answerB: "the Dude",
        answerC: "Walter",
        answerD: "Donny",
        correctAnswer: "B"
    },{
        q10: "What body part does Lebowski show the Dude in belief that it is Bunny's?",
        answerA: "a finger",
        answerB: "an ear",
        answerC: "a tongue",
        answerD: "a toe",
        correctAnswer: "D"
    }];


    // hides 'start game' button and surrounding text when user clicks
    // $("#button-and-text").click(function buttonHide() {
    //     $(this).hide();
    //     $('audio#abides-audio')[0].play()
    // });




    // $("#questions").append(questionsArray[0].q1);
    // $("#answerA").append(questionsArray[0].answerA);
    // $("#answerB").append(questionsArray[0].answerB);
    // $("#answerC").append(questionsArray[0].answerC);
    // $("#answerD").append(questionsArray[0].answerD);
    // $(".btn-sm").click(function () {
        
    //     if (userAnswer === correctAnswer) {
    //     countCorrectAnswers++;
    //     } else if (userAnswer === unanswered) {
    //     countUnansweredQuestions++;
    //     } else  {
    //     countIncorrectAnswers++;
    //     }
    // });




    // function run() {
    //     clearInterval(timeRemaining);
    //     timeInterval= setInterval(decrement, 1000);
    // }

    // function stop () {
    //     clearInterval(timeRemaining);
    // }

    // function decrement() {
    //     timeRemaining--;
    //     $("#display-timer").html("<p>Time remaining: </p><p style=color:black;>" + timeRemaining + " secs</p>");
    //     if (timeRemaining === -1) {
    //     stop();
    //     //add countUnansweredQuestions++ here?
    //     alert("display correct answer or congratulatory msg + relevant img");
    //     alert("set timeout for 5 secs and move on to next question")
    //     }
    // }  

    // run ();
    // decrement ();

 

    $("#correct-Answers").append function() {
        countCorrectAnswers;
    }
    $("#incorrect-answers").append function() {
        countIncorrectAnswers;
    }
    $("#unanswered-questions").append function () {
        countUnansweredQuestions;
    }
    $(".btn-lg").click function() {
        //restarts trivia mode and resets variables
    }


//.start-trivia - timer and buttonclicks
    // 1. html for start-trivia should display to user
    // 2. firstQuestion method invoked
        // 3. timer and button click method invoked
            // 3a. timer should start at 30 seconds
            // 3b. when user clicks button, if else statement should determine if answer is correct/incorrect by checking correctAnswerArray
            // 3c. if answer is correct, numberOfCorrectAnswers++, else numberofIncorrectAnswers++ else if, unanswered++ - need variables to store increments

            // if (correctAnswers) {
            //     countCorrectAnswers++;
            // } else if {
            //     countIncorrectAnswers++;
            // } else {
            //     countUnansweredQuestions++;
            // }
            // 3d. timer should stop upon button click or 30 seconds is up
            // 3e. screen should output to user the correct answer if answered incorrectly or congratulatory message if answered correctly + relevant img
                // 4. five second setTimeout before moving on to next question, timer should reset to 30 sec
                    // 5. setTimeout to invoke the nextQuestion unless user has reached lastQuestion
                        // 6. nextQuestion method for questions 2-9
                            // 6a. call the timer and button click function
                            // 6b. call the setTimeout function
                                // 7. lastQuestion method invoked
                                    // 7a. call the timer and button click function
                                    // 7b. call the setTimeout function
                                    // 7c. lastQuestion to invoke the gameStats div
                                        // 8. game-stats to display to user
                                            // 8a. display numberOfCorrectAnswers++ in #correct-answers div
                                            // 8b. display numberofIncorrectAnswers++ in #incorrect-answers div
                                            // 8c. display unanswered++ in #unanswered-questions div
                                            // 8d. invoke startOver function if user clicks on .btn-lg
                                                // 9. startOver function 
                                                // 9a. clear variables

