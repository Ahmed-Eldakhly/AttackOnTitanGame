//var for timer
var timerValue;
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
        gameCreation(levelId, characterId);
    }
});


document.addEventListener("keydown", keyListen);
function keyListen(keyObject) {
    if (keyObject.keyCode == 38) {
        if (MAIN_CHARACTER_STATE == MOVING || MAIN_CHARACTER_STATE == MOVE_FOREARD_FROM_JUMP) {
            mainCharacter.stopMove();
            var callBackJump = mainCharacter.jumpWithMove_function.bind(mainCharacter)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            MAIN_CHARACTER_STATE = JUMPING;
        }
        else if (MAIN_CHARACTER_STATE == STAND) {
            var callBackJump = mainCharacter.jumpOnly_function.bind(mainCharacter)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            MAIN_CHARACTER_STATE = JUMPING;
        }
    }
    else if (keyObject.keyCode == 39) {
        if (MAIN_CHARACTER_STATE == STAND) {
            var callBackMove = mainCharacter.forwardMove.bind(mainCharacter)
            if (moveIntervalID == undefined)
                moveIntervalID = setInterval(callBackMove, 70)
            MAIN_CHARACTER_STATE = MOVING;
        }
    }
}

document.addEventListener("keyup", keyUpListen);
function keyUpListen(keyObject) {
    if (keyObject.keyCode == 39) {
        mainCharacter.stopMove();
        MAIN_CHARACTER_STATE = STAND;
    }
}

onkeypress = function (keyObject) {
    if (keyObject.key == 97)
        console.log("attack");

    if (keyObject.key == 115)
        mainCharacter.characterSpeed = 60;
    else
        mainCharacter.characterSpeed = 20;

}

$(window).on('blur', function (params) {
    if (MAIN_CHARACTER_STATE != LOSE && MAIN_CHARACTER_STATE != WIN) {
        Enemy.clearAttack();
        MAIN_CHARACTER_STATE = LOSE;
        mainCharacter.endGame();
    }
});

function countdown() {
    clearInterval(timerValue);
    timerValue = setInterval(function () {
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

        if (minutes == 0 && seconds == 0 && MAIN_CHARACTER_STATE != LOSE) {
            clearInterval(timerValue);
            MAIN_CHARACTER_STATE = WIN;
            mainCharacter.endGame();
        }
    }, 1000);
}
countdown();
