var ErenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var ErenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];
var ErenWinPhotosArray = ["mov3", "mov4", "mov5", "mov6", "mov7", "mov1"];
var ErenLosePhotosArray = ["1.png", "1.png", "2.png", "3.png", "4.png"];

var jumpIntervalID;
var backIntervalID;
var MoveImageCureent = 0;
var moveIntervalID;

/*var jumpKeyListenerID;*/
var jumpState = 0;

class Characters {
    constructor(ID, Name, speed, level, jumpPhotos, movementPhotos, losePhotos, winPhotos, HTML_Element) {
        this.characterID = ID;
        this.characterName = Name;
        this.characterSpeed = speed;
        this.characterLevel = level;
        this.characterJumpPhotos = jumpPhotos;
        this.characterMovementPhotos = movementPhotos;
        this.characterWinPhotos = winPhotos;
        this.characterLosePhotos = losePhotos;
        this.characterElementHTML = HTML_Element;
        this.position_x = parseInt(3 * $(window).innerWidth() / 100);
        this.position_y = parseInt(20 * $(window).innerHeight() / 100);
        this.characterElementHTML.style.bottom = this.position_y + "px";
        this.characterElementHTML.style.left = this.position_x + "px";
        this.jumpPosition = 0;
    }

    /* jump only */
    jumpOnly_function(obj) {
        this.jumpPosition++;
        //Element move with character
        Building.buildingsMovement();
        Background.backgroundsMovement();
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.position_x += 15;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                this.position_x += 15;
                this.position_y += 90;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.bottom = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
            case 7:
                this.position_x += 15;
                this.position_y -= 135;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.bottom = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 8:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;
                if (this.position_x >= 800) {
                    var callBackJump = mainCharacter.backwardMove.bind(mainCharacter)
                    if (backIntervalID == undefined)
                        backIntervalID = setInterval(callBackJump, 40);
                    EREN_STATE = GO_BACK;
                }
                else {
                    EREN_STATE = STAND;
                }
                clearInterval(jumpIntervalID);
                jumpIntervalID = undefined;
                break;
        }
    }

    /* move and jump */
    jumpWithMove_function(obj) {
        this.jumpPosition++;
        //Element move with character
        Building.buildingsMovement();
        Background.backgroundsMovement();
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.position_x += 30;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 3:
            case 4:
            case 5:
                this.position_x += 30;
                this.position_y += 70;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.bottom = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 6:
            case 7:
                this.position_x += 30;
                this.position_y -= 70;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.bottom = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                break;
            case 8:
                this.position_x += 30;
                this.position_y -= 70;
                this.characterElementHTML.style.left = (this.position_x) + "px";
                this.characterElementHTML.style.bottom = (this.position_y) + "px";
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                this.jumpPosition = 0;
                jumpState = 0;

                if (this.position_x >= 800) {
                    var callBackJump = mainCharacter.backwardMove.bind(mainCharacter)
                    if (backIntervalID == undefined)
                        backIntervalID = setInterval(callBackJump, 40);
                    EREN_STATE = GO_BACK;
                }
                else {
                    EREN_STATE = STAND;
                }

                /* if (this.position_x >= 800) {
                     this.position_x = 800;
                     this.characterElementHTML.style.left = (this.position_x) + "px";
                 }*/
                clearInterval(jumpIntervalID);
                jumpIntervalID = undefined;

                break;

        }
    }

    /* movement only */
    forwardMove() {
        if (MoveImageCureent == this.characterMovementPhotos.length) {
            MoveImageCureent = 0;
        }
        if (this.position_x < 800)
            this.position_x += this.characterSpeed;
        this.characterElementHTML.src = "image/characters move/forward-move/" + this.characterMovementPhotos[MoveImageCureent];
        this.characterElementHTML.style.left = (this.position_x) + "px";
        MoveImageCureent++;

        //Element move with character
        Building.buildingsMovement();
        Background.backgroundsMovement();

    }
    backwardMove() {
        if (MoveImageCureent == this.characterMovementPhotos.length) {
            MoveImageCureent = 0;
        }
        if (this.position_x > 800) {
            this.position_x -= 15;
            this.characterElementHTML.src = "image/characters move/forward-move/" + this.characterMovementPhotos[MoveImageCureent];
            this.characterElementHTML.style.left = (this.position_x) + "px";
            MoveImageCureent++;
            EREN_STATE = GO_BACK;
        }

        else {
            clearInterval(backIntervalID);
            backIntervalID = undefined;
            this.characterElementHTML.src = "image/characters move/forward-move/1.png";
            this.characterElementHTML.style.left = (this.position_x) + "px";
            EREN_STATE = STAND;
        }

        //Element move with character
        Building.buildingsMovement();
        Background.backgroundsMovement();

    }

    /* stop movement only */
    stopMove() {
        this.characterElementHTML.src = "image/characters move/forward-move/1.png";
        clearInterval(moveIntervalID);
        moveIntervalID = undefined;
    }

    endGame() {
        Enemy.clearAttack();
        /* stop moving. */
        this.characterElementHTML.src = "image/characters move/forward-move/1.png";
        clearInterval(moveIntervalID);
        clearInterval(backIntervalID);
        clearInterval(jumpIntervalID);
        backIntervalID = undefined;
        moveIntervalID = undefined;
        jumpIntervalID = undefined;
        /* stop timer. */
        clearInterval(timerval);
        /* stop key up and down events. */
        document.removeEventListener("keydown", KeyListen);
        document.removeEventListener("keyup", KeyUpListen);
        this.position_y = parseInt(20 * $(window).innerHeight() / 100);
        this.characterElementHTML.style.bottom = this.position_y + "px";
        /***/
        var positionX = this.position_x;
        var positionY = this.position_y;
        var characterElement = this.characterElementHTML;
        if (EREN_STATE == LOSE) {
            this.loseGame(positionX, positionY, characterElement)
        } else if (EREN_STATE == WIN) {
            this.winGame(positionX, positionY, characterElement)
        }
    }

    // /* lose game only */
    loseGame(positionX, positionY, characterElement) {
        /* show titan. */
        var backgroundTitan = new Background("titan.png", 800, 400, "400px", "453px");
        /* add lose sound */
        var audio = document.createElement('audio');
        audio.setAttribute('src', 'audio/game-over.mp3');
        audio.play();

        /* make event to move character in lose state. */
        var LoseCureentImage = 0;
        var photos = this.characterLosePhotos;
        /* create lose interval to change lose images. */
        var lose = setInterval(characterlose, 300);

        function characterlose() {
            if (LoseCureentImage >= photos.length) {
                clearInterval(lose);
                $('body').append("<div class='lose-div'><h1 class='lose-title'>Game Over</h1></div>");
                $('.lose-div').append(`<img src='image/characters move/lose/armored-titan.png' class='lose-image'><a href='game.html?level=${levelId}&character=${characterId}' class='retry'>Retry</a>`);
                characterElement.remove();
            } else {
                if (LoseCureentImage == photos.length - 1) {
                    characterElement.style.width = "150px";
                    characterElement.style.height = "80px";
                    characterElement.style.bottom = (positionY - 40) + "px";
                }
                characterElement.src = "image/characters move/lose/" + photos[LoseCureentImage];
                characterElement.style.left = positionX + "px";
                positionX += 15;
                LoseCureentImage++;
            }
        }


    }

    sethealth() {
        var cal = 0;
        cal = $('#healthBar').width();
        if (cal <= 160 && cal > 80) {
            $('#healthBar').css('background', 'rgb(196, 123, 14)');
            $('#healthBar').css('color', 'rgb(196, 123, 14)');
        }
        else if (cal <= 80) {
            $('#healthBar').css('background', 'rgb(153, 38, 38)');
            $('#healthBar').css('color', 'rgb(153, 38, 38)');
        }

        if (cal > 40) {
            if (EREN_STATE != WIN) {
                cal = cal - (0.2 * 200);
                $('#healthBar').css('width', cal + 'px');
                return true;
            }
        }
        else {
            $('#healthBar').css('width', '0px');
            $('#healthBar').text('');
            if (EREN_STATE != LOSE && EREN_STATE != WIN) {
                EREN_STATE = LOSE;
                //Eren.loseGame();
                this.endGame();
            }
            return false;
        }
    }

    winGame(positionX, positionY, characterElement) {
        var audio = document.createElement('audio');
        audio.setAttribute('src', 'attack-on-titans.mpeg');
        audio.play();

        var WinCureentImage = 0;
        var photos = this.characterWinPhotos;
        var win = setInterval(characterWin, 300);

        function characterWin() {
            if (WinCureentImage >= photos.length) {
                clearInterval(win);
                $('body').append("<div class='win-div'><h1 class='win-title'>You WIN</h1></div>");
                $('.win-div').append(`<img src='image/characters/eren-win.png' class='win-image'><a href='game.html?level=${levelId}&character=${characterId}' class='again'>Play Again?</a>`);
                characterElement.remove();
                $("#defenderPhotos").css("bottom", "-20px");
            } else {
                characterElement.src = "image/characters move/" + photos[WinCureentImage] + ".png";
                characterElement.style.left = positionX + "px";
                positionX += 30;
                WinCureentImage++;
            }
        }

    }
}

var STAND = 0;
var MOVE_FORWARD_FROM_STAND = 1;
var MOVE_FOREARD_FROM_JUMP = 2;
var MOVING = 3;
var JUMP_FROM_STAND = 4;
var JUMP_FROM_MOVE_FORWARD = 5;
var JUMPING = 6;
var LOSE = 7;
var WIN = 8;
var GO_BACK = 9;

var EREN_STATE = STAND;
