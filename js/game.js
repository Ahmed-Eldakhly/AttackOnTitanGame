//var for timer
var timerval;
var minutes;
var seconds;
var levelId = 1, characterId = 1;
var queryString = new Array();
$(function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["level"] != null && queryString["character"] != null) {
        levelId = parseInt(queryString["level"]);
        characterId = parseInt(queryString["character"]);
        gameCreation(levelId, characterId)
    }
});


document.addEventListener("keydown", KeyListen);
function KeyListen(KeyObject) {
    if (KeyObject.keyCode == 38) {
        if (EREN_STATE == MOVING || EREN_STATE == MOVE_FOREARD_FROM_JUMP) {
            mainCharacter.stopMove();
            var callBackJump = mainCharacter.jumpWithMove_function.bind(mainCharacter)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
        }
        else if (EREN_STATE == STAND) {
            var callBackJump = mainCharacter.jumpOnly_function.bind(mainCharacter)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
        }
    }
    else if (KeyObject.keyCode == 39) {
        if (EREN_STATE == STAND) {
            var callBackMove = mainCharacter.forwardMove.bind(mainCharacter)
            if (moveIntervalID == undefined)
                moveIntervalID = setInterval(callBackMove, 70)
            EREN_STATE = MOVING;
        }
    }
}

document.addEventListener("keyup", KeyUpListen);
function KeyUpListen(KeyObject) {
    if (KeyObject.keyCode == 39) {
        mainCharacter.stopMove();
        EREN_STATE = STAND;
    }
}

onkeypress = function (KeyObject) {
    if (KeyObject.key == 97)
        console.log("attack");

    if (KeyObject.key == 115)
        mainCharacter.characterSpeed = 60;
    else
        mainCharacter.characterSpeed = 20;

}

function countdown() {
    clearInterval(timerval);
    timerval = setInterval(function () {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        minutes = timer[0];
        seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes == 0) {
            minutes = 0;
            //seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0 && EREN_STATE != LOSE) {
            clearInterval(timerval);
            EREN_STATE = WIN;
            mainCharacter.endGame();
        }
    }, 1000);
}
countdown();
