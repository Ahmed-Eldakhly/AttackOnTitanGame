//var for timer
var timerValue;
var minutes;
var seconds;
var audioTimer = document.createElement('audio');
//var backgroundAudio = document.createElement('audio');

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
        // for injection
        var injectionLeft = parseInt(document.getElementById("injection").style.left);
        var injectionRight = parseInt(document.getElementById("injection").style.left) + parseInt(document.getElementById("injection").width);
        var characterLeft = parseInt(document.getElementById("defenderPhotos").style.left);
        var characterRight = parseInt(document.getElementById("defenderPhotos").style.left) + parseInt(document.getElementById("defenderPhotos").width);
        if ((injectionLeft <= characterRight && injectionLeft >= characterLeft) || (injectionRight <= characterRight && injectionRight >= characterLeft)) {
            if (injectionIconCollision == 0) {
                injection.injectionDisappear();
                mainCharacter.increasehealth();
                injectionIconCollision = 1;
            }

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

document.addEventListener("keypress", keyPressListen);
function keyPressListen(keyObject) {
    if (keyObject.keyCode == 97)
        console.log("attack");

    if (keyObject.keyCode == 115)
        mainCharacter.characterSpeed = mainCharacter.highSpeed;
    else
        mainCharacter.characterSpeed = mainCharacter.lowSpeed;

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
    var alertFlag = false;
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

        if (minutes == 0 && seconds <= 3 && MAIN_CHARACTER_STATE != LOSE) {
            /* add timer sound */
            backgroundAudio.pause();
            audioTimer.setAttribute('src', 'audio/timer.mp3');
            audioTimer.play();
        }

        if (minutes == 0 && seconds == 0 && MAIN_CHARACTER_STATE != LOSE) {
            clearInterval(timerValue);
            MAIN_CHARACTER_STATE = WIN;
            mainCharacter.endGame();
        }
        if (seconds % 20 == 0 && levelId < 3) {
            injection.injectionMovementStart();
        } else if (seconds % 10 == 0 && levelId == 3) {
            console.log(levelId);
            injection.injectionMovementStart();
        }

        // Create stones
        if (seconds % 10 == 0) {
            Stone.stoneMovement();
        }

    }, 1000);
}

//countdown();

countdown();


//Add Sound 
// var soundFlag = false;
// $('.speaker').on('click', function (params) {
//     /* add background sound */
//     backgroundAudio.setAttribute('src', 'audio/attack-small.mp3');
//     backgroundAudio.loop = true;

//     if (!soundFlag) {
//         $('#sound').attr("src", "image/sound.svg");
//         backgroundAudio.play();
//     } else {
//         $('#sound').attr("src", "image/no-sound.svg");
//         backgroundAudio.pause();
//     }
//     soundFlag = !soundFlag;
// })
