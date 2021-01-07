var ErenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var ErenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];
var jumpIntervalID;

//var idCounter = 0;
var moveIntervalID;
//var jump;

/*var jumpKeyListenerID;*/
var jumpState = 0;

/**/
var NotMoveWithJump = 0;

class characters {
    characterID;
    characterName;
    characterSpeed;
    characterLevel;
    characterJumpPhotos = [];
    characterMovementPhotos = [];
    characterElementHTML;
    position_x;
    position_y;
    jumpPosition;
    constructor(ID, Name, speed, level, jumpPhotos, movementPhotos, HTML_Element) {
        this.characterID = ID;
        this.characterName = Name;
        this.characterSpeed = speed;
        this.characterLevel = level;
        this.characterJumpPhotos = jumpPhotos;
        this.characterMovementPhotos = movementPhotos;
        this.characterElementHTML = HTML_Element;
        this.position_x = 550;
        this.position_y = 500;
        this.characterElementHTML.style.top = this.position_y + "px";
        this.characterElementHTML.style.left = this.position_x + "px";
        this.jumpPosition = 0;
        this.forward = 0;
    }

    /* jump only */
    jumpOnly_function(obj) {
        this.jumpPosition++;
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                this.position_y -= 30;
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
            case 7:
                this.position_y += 45;
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 8:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;
                NotMoveWithJump = 0;
                EREN_STATE = STAND;
                clearInterval(jumpIntervalID);
                stateMachine();
                break;
        }
    }
    /* move and jump */
    jumpWithMove_function(obj) {
        this.jumpPosition++;
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.position_x += 5;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                this.position_x += 5;
                this.position_y -= 30;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
                this.position_x += 5;
                this.position_y += 45;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 7:
                this.position_x += 5;
                this.position_y += 45;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.top = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;
                EREN_STATE = MOVE_FOREARD_FROM_JUMP;
                clearInterval(jumpIntervalID);
                $(document).triggerHandler("keyup");
                /*if (EREN_STATE == MOVE_FOREARD_FROM_JUMP)
                    stateMachine();*/
                break;
        }
    }
    /* movement only */
    forwardMove() {
        if (MoveImageCureent == this.characterMovementPhotos.length) {
            MoveImageCureent = 0;
        }
        this.position_x += 20;
        $("#erenJumpPhotos").attr('src', "image/characters move/forward-move/" + this.characterMovementPhotos[MoveImageCureent]);
        this.characterElementHTML.style.left = (this.position_x) + "px";
        /*this.characterElementHTML.css("left", (this.position_x) + "px");*/
        /*$("#erenJumpPhotos").css('left', position.left = this.position_x);*/
        MoveImageCureent++;
        Eren.forward = 1;
    }
    /* stop movement only */
    stopMove() {
        this.forward = 0;
        $("#erenJumpPhotos").attr('src', "image/characters move/forward-move/1.png");
        clearInterval(moveIntervalID);
    }

}

var Eren = new characters(1, "Eren jeager", 60, 1, ErenJumpPhotosArray, ErenMovePhotosArray, document.getElementById("erenJumpPhotos"));

var MoveImageCureent = 0;

var STAND = 0;
var MOVE_FORWARD_FROM_STAND = 1;
var MOVE_FOREARD_FROM_JUMP = 2;
var MOVING = 3;
var JUMP_FROM_STAND = 4;
var JUMP_FROM_MOVE_FORWARD = 5;
var JUMPING = 6;

var EREN_STATE = STAND;

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





//document.addEventListener("keydown", KeyListen);
/*jumpKeyListenerID = document.addEventListener("keydown" , KeyListen);*/
/*function KeyListen(jumpObject) {
    if (jumpObject.keyCode == 38 && jumpState === 0) {
        var callBackJump = Eren.jumpOnly_function.bind(Eren)
        jumpIntervalID = setInterval(callBackJump, 70);
        jumpState = 1;
        NotMoveWithJump = 1;
    }
}


$(document).keydown(function (e) {

    var position = $("#erenJumpPhotos").position();
    switch (e.keyCode) {
        case 39: //right
            if (!Eren.forward) {
                var callBackMove = Eren.forwardMove.bind(Eren)
                moveIntervalID = setInterval(callBackMove, 70)
            }
            break;
    }
});


$(document).keyup(function (e) {
    switch (e.keyCode) {
        case 39:
            Eren.stopMove();
            break;
    }
});*/