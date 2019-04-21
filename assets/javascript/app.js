//global variables
    //countdown timer
    var timeInSeconds = setInterval(countdownTimer, 30000);

//hides 'start game' button and surrounding text when user clicks
$("#button-and-text").click(function buttonHide() {
    $(this).hide();
    $('audio#abides-audio')[0].play()
});

function countdownTimer() {
    $("#countdown-timer-clock").html("<p>Time Remaining: " + timeInSeconds.toString() + "</p>");
}

