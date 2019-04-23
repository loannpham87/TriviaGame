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

    function run() {
        clearInterval(timeRemaining);
        timeInterval= setInterval(decrement, 1000);
    }

    function stop () {
        clearInterval(timeRemaining);
    }

    function decrement() {
        timeRemaining--;
        $("#display-timer").html("<p>Time remaining: </p><p style=color:black;>" + timeRemaining + " secs</p>");
        if (timeRemaining === -1) {
        stop();
        alert("display correct answer or congratulatory msg + relevant img");
        alert("set timeout for 5 secs and move on to next question")
        }
    }  

    run ();
    decrement ();

//hides 'start game' button and surrounding text when user clicks
// $("#button-and-text").click(function buttonHide() {
//     $(this).hide();
//     $('audio#abides-audio')[0].play()
// });

//.start-trivia - timer and buttonclicks
    // 1. html for start-trivia should display to user
    // 2. firstQuestion method invoked
        // 3. timer and button click method invoked
            // 3a. timer should start at 30 seconds
            // 3b. when user clicks button, if else statement should determine if answer is correct/incorrect by checking correctAnswerArray
            // 3c. if answer is correct, numberOfCorrectAnswers++, else numberofIncorrectAnswers++ else if, unanswered++ - need variables to store increments

            if (correctAnswers) {
                countCorrectAnswers++;
            } else if {
                countIncorrectAnswers++;
            } else {
                countUnansweredQuestions++;
            }
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

