//global variables
//set timer to 30 seconds
var timeRemaining = 30;
//holds time interval
var timeInterval = 0;
//hold 5 second timeout
var fiveSecondTimeout = 5;
//holds count for correct answers
var countCorrectAnswers = 0;
//holds count for incorrect answers
var countIncorrectAnswers = 0;
//holds count for unanswered questions
var countUnansweredQuestions = 0;
// holds index of current question
var currentQuestion = 0;
//holds questions, answers, correct answers
var questionsArray =
    [{
        q: "What is the name of the cocktail that the Dude imbibes on?",
        answers: ["White Russian", "Old-Fashioned", "Sazerac", "Martini"],
        correctAnswer: "White Russian"
    }, {
        q: "In what war did Walter fight in?",
        answers: ["Vietnam War", "Kosovo War", "Bosnia War", "Gulf War"],
        correctAnswer: "Vietnam War"
    }, {
        q: "What really tied the room together?",
        answers: ["the end table", "the rug", "the lamp", "the drapes"],
        correctAnswer: "the rug"
    }, {
        q: "Who does Walter tell \'You're out of your element!\"?",
        answers: ["The Dude", "Bunny", "Smokey", "Donny"],
        correctAnswer: "Donny"
    }, {
        q: "What sporting league do the Dude and Walter play in together?",
        answers: ["Basketball", "Football", "Bowling", "Baseball"],
        correctAnswer: "Bowling"
    }, {
        q: "Fill in the blank: \"MARK IT ________!\"",
        answers: ["A STRIKE", "A TURKEY", "A SPLIT", "ZERO"],
        correctAnswer: "ZERO"
    }, {
        q: "What animal do the Nihilists throw in the bathtub with the Dude?",
        answers: ["a dog", "a cat", "a marmot", "a rat"],
        correctAnswer: "a marmot"
    }, {
        q: "Who has been kidnapped?",
        answers: ["Maude", "Bunny", "the Dude", "Donny"],
        correctAnswer: "Bunny"
    }, {
        q: "What character does Jeff Bridges play?",
        answers: ["Lebowski", "the Dude", "Walter", "Donny"],
        correctAnswer: "the Dude"
    }, {
        q: "What body part does Lebowski show the Dude in belief that it is Bunny's?",
        answers: ["a finger", "an ear", "a tongue", "a toe"],
        correctAnswer: "a toe"
    }];

    function setTimeout () {
        fiveSecondTimeout--;
}

function startButton() {
    $("#button-and-text").click(function () {
        $('audio#abides-audio')[0].play();
        $("#button-and-text").hide();
        $(".start-trivia").show();
        $(".btn-sm").show();
    
        startTrivia();
    });


function startTrivia() {
    run();
    decrement();
    //initial question
    var i = currentQuestion;
    $("#questions").text(questionsArray[i].q);
    $("#answerA").text(questionsArray[i].answers[0]);
    $("#answerB").text(questionsArray[i].answers[1]);
    $("#answerC").text(questionsArray[i].answers[2]);
    $("#answerD").text(questionsArray[i].answers[3]);
    $(".btn-sm").click(function (e) {
        stop();
        if (questionsArray[i].answers == questionsArray[i].correctAnswer) {
            countCorrectAnswers++;
            $(".correct").show();
        } else {
            countIncorrectAnswers++;
            $(".incorrect").show();
            $("#display-correct-answer").text("The correct answer is: " + (questionsArray[i].correctAnswer) + "")
        }
        //5 second timeout here
        hideDiv();
    });
};

function hideDiv() {
    setTimeout();
    $(".start-trivia").hide();
    $(".btn-sm").hide();
    showNextQuestion();
}

function showDiv() {
    $(".start-trivia").show();
    $(".btn-sm").show();
    $(".correct").hide();
    $(".incorrect").hide();
}

function showNextQuestion() {
    currentQuestion++;
    startTrivia();
    showDiv();
}



//invoke game stats function after last question is answered


function run() {
    clearInterval(timeInterval);
    timeInterval = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(timeInterval);
}

function decrement() {
    timeRemaining--;
    $("#display-timer").html("<p>Time remaining: </p><p style=color:black;>" + timeRemaining + " secs</p>");
    }
};

 function gameStats() {
    $(".game-stats").show();
    $("#correct-answers").append(countCorrectAnswers);
    $("#incorrect-answers").append(countIncorrectAnswers);
    $("#unanswered-questions").append(countUnansweredQuestions);
    // gameReset();
}

function gameReset() {
    $(".btn-lg").click(function () {
        // startTrivia();
        countCorrectAnswers.clear();
        countIncorrectAnswers.clear();
        countUnansweredQuestions.clear();
    });
};

//starts game
startButton();
$(".start-trivia").hide();
$(".btn-sm").hide();
$(".game-stats").hide();
$(".correct").hide();
$(".incorrect").hide();

// } else if (timeRemaining === 0) {
//     stop();
//     countUnansweredQuestions++;