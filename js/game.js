
var Eren = new Characters(characterID, "Eren jeager", 20, 1, ErenJumpPhotosArray, ErenMovePhotosArray, document.getElementById("defenderPhotos"));
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

$(document).keyup(function (jumpObject) {
    if (jumpObject.keyCode == 39) {
        Eren.stopMove();
        EREN_STATE = STAND;
    }
});

onkeypress = function (KeyObject) {
    if (KeyObject.keyCode == 97)
        console.log("attack");

    if (KeyObject.keyCode == 115)
        Eren.characterSpeed = 60;
    else
        Eren.characterSpeed = 20;

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
    var floor = new Building("floor.png", 500, parseInt(20 * $(window).innerHeight() / 100), floorPosetionX, "0px");
    floorPosetionX += 520;
}




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

}
*/