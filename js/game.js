//var for timer
var timerval;
var minutes;
var seconds
/////////////
var Eren = new Characters(characterID, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, ErenLosePhotosArray, ErenWinPhotosArray, document.getElementById("defenderPhotos"));
var createdBackground = 0;
/****** Hossam Multible enemy edit ******/
var enemy1 = new Enemy(enemyPhotosArray, 120, 0);
var enemy2 = new Enemy(enemyPhotosArray, 120, 1);
var enemy3 = new Enemy(enemyPhotosArray, 120, 2);
/****** Hossam Multible enemy edit ******/

//Game Background
var background1 = new Background("game-back1.jpg", 1536, 760, "0px", "0px");
var background2 = new Background("game-back2.jpg", 1536, 760, "-1590px", "4px");

// Game Roof 
var roofPosetionX = 0;

// Build roof
for (let i = 0; i < 4; i++) {
    var roof = new Building("roof.png", 500, 150, roofPosetionX, "0px");
    roofPosetionX += 520;
}

/****** Hossam Multible enemy edit ******/

function createAttackWave() {
    enemy1.move();
    var x = enemy2.move.bind(enemy2)
    var y = enemy3.move.bind(enemy3)
    setTimeout(x, 2000);
    setTimeout(y, 3000);
}


function launchAttack() {
    createAttackWave();
    var wave = 5000;
    for (let i = 0; i < 25; i++) {
        setTimeout(createAttackWave, wave);
        wave += 5000;
    }
}

launchAttack();




/****** Hossam Multible enemy edit ******/

document.addEventListener("keydown", KeyListen);
function KeyListen(jumpObject) {
    if (jumpObject.keyCode == 38) {
        if (EREN_STATE == MOVING || EREN_STATE == MOVE_FOREARD_FROM_JUMP) {
            Eren.stopMove();
            var callBackJump = Eren.jumpWithMove_function.bind(Eren)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
        }
        else if (EREN_STATE == STAND) {
            var callBackJump = Eren.jumpOnly_function.bind(Eren)
            if (jumpIntervalID == undefined)
                jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
        }
    }
    else if (jumpObject.keyCode == 39) {
        if (EREN_STATE == STAND) {
            var callBackMove = Eren.forwardMove.bind(Eren)
            if (moveIntervalID == undefined)
                moveIntervalID = setInterval(callBackMove, 70)
            EREN_STATE = MOVING;
        }
    }
}

document.addEventListener("keyup", KeyUpListen);
function KeyUpListen(jumpObject) {
    if (jumpObject.keyCode == 39) {
        Eren.stopMove();
        EREN_STATE = STAND;
    }
}

onkeypress = function (KeyObject) {
    if (KeyObject.keyCode == 97)
        console.log("attack");

    if (KeyObject.keyCode == 115)
        Eren.characterSpeed = 60;
    else
        Eren.characterSpeed = 20;

}


// Eren Lose 
// var erenLose = Eren.loseGame.bind(Eren)
// setTimeout(erenLose, 2000)

// $('body').one('mouseover', function () {
//     var audio = document.createElement('audio');
//     audio.setAttribute('src', 'audio/attack.mp3');
//     audio.play();
// })

// Window blur
$(window).on('blur', function () {
    if (EREN_STATE != LOSE && EREN_STATE != WIN) {
        Eren.loseGame();
        EREN_STATE = LOSE;
    }
});



/*onkeydown = onkeyup = function (jumpObject) {
    if (jumpObject.type == "keydown") {
        if (jumpObject.keyCode == 38) {
            if (EREN_STATE == MOVING || EREN_STATE == MOVE_FOREARD_FROM_JUMP) {
                Eren.stopMove();
                var callBackJump = Eren.jumpWithMove_function.bind(Eren)
                if (jumpIntervalID == undefined)
                    jumpIntervalID = setInterval(callBackJump, 70);
                EREN_STATE = JUMPING;
            }
            else if (EREN_STATE == STAND) {
                var callBackJump = Eren.jumpOnly_function.bind(Eren)
                if (jumpIntervalID == undefined)
                    jumpIntervalID = setInterval(callBackJump, 70);
                EREN_STATE = JUMPING;
            }
        }
        else if (jumpObject.keyCode == 39) {
            if (EREN_STATE == STAND || EREN_STATE == MOVE_FOREARD_FROM_JUMP) {
                var callBackMove = Eren.forwardMove.bind(Eren)
                if (moveIntervalID == undefined)
                    moveIntervalID = setInterval(callBackMove, 70)
                EREN_STATE = MOVING;
            }
        }
    }
    else {
        if (jumpObject.keyCode == 39) {
            Eren.stopMove();
            EREN_STATE = STAND;
        }
    }

}*/


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
            Eren.endGame();
            //Eren.winGame();
            //var erenWin = Eren.winGame.bind(Eren)
            //setTimeout(erenWin, 2000)
        }
    }, 1000);
}
countdown();
