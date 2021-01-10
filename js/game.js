//var for timer
var timerval;
var minutes;
var seconds
/////////////


var Eren = new Characters(characterID, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, ErenWinPhotosArray, document.getElementById("defenderPhotos"));
var createdBackground = 0;
/****** Hossam Multible enemy edit ******/
var enemy1 = new Enemy(enemyPhotosArray, 120, 0);
var enemy2 = new Enemy(enemyPhotosArray, 120, 1);
var enemy3 = new Enemy(enemyPhotosArray, 120, 2);
/****** Hossam Multible enemy edit ******/

//var initBuilding = new Building("demo1.png", 600, 600, "0px", "100px");
var background1 = new Building("back2.jpg", 1536, 760, "0px", "4.5px");
var background2 = new Building("back3.jpg", 1536, 760, "-1590px", "0px");

var floorPosetionX = 0;
/****** Hossam Multible enemy edit ******/
enemy1.move();
//enemy2.move();

var x = enemy2.move.bind(enemy2)
var y = enemy3.move.bind(enemy3)

setTimeout(x, 2000);
setTimeout(y, 3000);
/****** Hossam Multible enemy edit ******/

document.addEventListener("keydown", KeyListen);
function KeyListen(jumpObject) {
    if (jumpObject.keyCode == 38) {
        if (EREN_STATE == MOVING || EREN_STATE == MOVE_FOREARD_FROM_JUMP) {
            Eren.stopMove();
            var callBackJump = Eren.jumpOnly_function.bind(Eren)
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

function levelElementsMovement() {
    $(".build-img").each((i) => {
        var position = parseInt($(".build-img")[i].style.left);
        if (position < -1500) {
            position = 1536;
        }

        $(".build-img")[i].style.left = position - 20 + "px";
    })
    $(".floor-img").each((i) => {
        var position = parseInt($(".floor-img")[i].style.left);
        if (position < -500) {
            position = 1500;
        }

        $(".floor-img")[i].style.left = position - 20 + "px";
    })
}


// Build floor
for (let i = 0; i < 4; i++) {
    var floor = new Building("floor.png", 500, 150, floorPosetionX, "0px");
    floorPosetionX += 520;
}
//timer

//window.onload = function () {

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

        if (minutes == 0 && seconds == 0) {
            clearInterval(timerval);
            var erenWin = Eren.winGame.bind(Eren)
            setTimeout(erenWin, 2000)
        }
    }, 1000);
}
countdown();