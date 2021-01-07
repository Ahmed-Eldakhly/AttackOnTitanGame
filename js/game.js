var Eren = new Characters(1, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, document.getElementById("erenJumpPhotos"));

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