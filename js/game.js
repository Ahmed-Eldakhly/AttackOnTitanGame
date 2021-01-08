
var Eren = new Characters(characterID, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, document.getElementById("defenderPhotos"));
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

$(document).keyup(function (jumpObject) {
    if (jumpObject.keyCode == 39) {
        Eren.stopMove();
        EREN_STATE = STAND;
    }
});
