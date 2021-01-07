
var Eren = new Characters(characterID, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, document.getElementById("defenderPhotos"));
var createdBackground = 0;
/****** Hossam Multible enemy edit ******/
var enemy1 = new Enemy(enemyPhotosArray, 120, 0);
var enemy2 = new Enemy(enemyPhotosArray, 120, 1);
var enemy3 = new Enemy(enemyPhotosArray, 120, 2);
/****** Hossam Multible enemy edit ******/

//var initBuilding = new Building("demo1.png", 600, 600, "0px", "100px");
var background1 = new Building("back2.jpg", 1536, 760, "0px", "4.5px");
var background2 = new Building("back3.jpg", 1536, 760, "-1590px", "0px");

//var background2 = new Building("back2.jpg", 1540, 760, "1550px", "0px");
//var building2 = new Building("houses.png", 800, 800, "800px", "35px");
// var building2 = new Building("houses.png", 500, 800, "1060px", "35px");
var floorPosetionX = 0;
/****** Hossam Multible enemy edit ******/
enemy1.move();
//enemy2.move();

var x = enemy2.move.bind(enemy2)
var y = enemy3.move.bind(enemy3)

setTimeout(x, 2000);
setTimeout(y, 3000);
/****** Hossam Multible enemy edit ******/

function stateMachine() {
    switch (EREN_STATE) {
        case STAND:
            /* do nothing */
            break;

        case MOVE_FORWARD_FROM_STAND:
            var callBackMove = Eren.forwardMove.bind(Eren)
            moveIntervalID = setInterval(callBackMove, 70)
            EREN_STATE = MOVING;
            break;

        case MOVE_FOREARD_FROM_JUMP:
            var callBackMove = Eren.forwardMove.bind(Eren)
            moveIntervalID = setInterval(callBackMove, 70)
            EREN_STATE = MOVING;
            break;

        case MOVING:
            break;

        case JUMP_FROM_STAND:
            var callBackJump = Eren.jumpOnly_function.bind(Eren)
            jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
            break;

        case JUMP_FROM_MOVE_FORWARD:
            Eren.stopMove();
            var callBackJump = Eren.jumpWithMove_function.bind(Eren)
            jumpIntervalID = setInterval(callBackJump, 70);
            EREN_STATE = JUMPING;
            break;

        case JUMPING:
            break;

    }
}

document.addEventListener("keydown", KeyListen);
/*jumpKeyListenerID = document.addEventListener("keydown" , KeyListen);*/
function KeyListen(jumpObject) {
    // if (!createdBackground) {
    //     var background2 = new Building("back2.jpg", 1540, 760, "1550px", "0px");
    //     createdBackground = 1;
    // }
    if (jumpObject.keyCode == 38) {
        if (EREN_STATE == MOVING)
            EREN_STATE = JUMP_FROM_MOVE_FORWARD;
        else if (EREN_STATE == STAND)
            EREN_STATE = JUMP_FROM_STAND;
    }
    else if (jumpObject.keyCode == 39) {
        if (EREN_STATE == STAND)
            EREN_STATE = MOVE_FORWARD_FROM_STAND;
    }
    stateMachine();
}

$(document).keyup(function (jumpObject) {
    if (jumpObject.keyCode == 39) {
        Eren.stopMove();
        EREN_STATE = STAND;
    }
    stateMachine();
});

$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 39:
            $(".build-img").each((i) => {
                var position = parseInt($(".build-img")[i].style.left);
                if (position < -1500) {
                    position = 1536;
                }

                //right 
                $(".build-img")[i].style.left = position - 20 + "px";
            })
            $(".floor-img").each((i) => {
                var position = parseInt($(".floor-img")[i].style.left);
                if (position < -500) {
                    position = 500;
                }

                //right 
                $(".floor-img")[i].style.left = position - 20 + "px";
            })
    }
});

// Build floor
for (let i = 0; i < 4; i++) {
    var floor1 = new Building("floor.png", 500, 150, floorPosetionX, "0px");
    floorPosetionX += 520;
}
