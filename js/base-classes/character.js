var ErenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var ErenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];

var ErenWinPhotosArray = ["mov3", "mov4", "mov5", "mov6", "mov7", "mov1"];

var ErenMovebackPhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png", "1.png"];
var ErenLosePhotosArray = ["1.png", "1.png", "2.png", "3.png", "4.png"];

var jumpIntervalID;
var backIntervalID;
var MoveImageCureent = 0;
var moveIntervalID;
var currentBackMove = 0;

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
                EREN_STATE = STAND;
                if (this.position_x >= 800) {
                    var callBackJump = Eren.backwardMove.bind(Eren)
                    if (backIntervalID == undefined)
                        backIntervalID = setInterval(callBackJump, 40);
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
                EREN_STATE = STAND;
                if (this.position_x >= 800) {
                    var callBackJump = Eren.backwardMove.bind(Eren)
                    if (backIntervalID == undefined)
                        backIntervalID = setInterval(callBackJump, 40);
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
        if (currentBackMove == ErenMovebackPhotosArray.length) {
            currentBackMove = 0;
        }
        if (this.position_x > 800)
            this.position_x -= this.characterSpeed;
        else {
            clearInterval(backIntervalID);
            backIntervalID = undefined;
        }
        this.characterElementHTML.src = "image/characters move/forward-move/" + ErenMovebackPhotosArray[currentBackMove];
        this.characterElementHTML.style.left = (this.position_x) + "px";
        currentBackMove++;

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



    /* lose game only */
    loseGame() {
        this.stopMove();
        document.removeEventListener("keydown", KeyListen);
        document.removeEventListener("keyup", KeyUpListen);
        var backgroundTitan = new Background("titan.png", 800, 400, "400px", "453px");
        var audio = document.createElement('audio');
        audio.setAttribute('src', 'audio/game-over.mp3');
        audio.play();

        var LoseCureentImage = 0;
        var photos = this.characterLosePhotos;
        var positionX = this.position_x;
        var positionY = this.position_y;
        var characterElement = this.characterElementHTML;

        var lose = setInterval(characterlose, 300);

        function characterlose() {
            if (LoseCureentImage >= photos.length) {
                clearInterval(lose);
                $('body').append("<div class='lose-div'><h1 class='lose-title'>Game Over</h1></div>");
                $('.lose-div').append("<img src='image/characters move/lose/armored-titan.png' class='lose-image'><a href='game.html' class='retry'>Retry</a>");
                characterElement.style.display = "none";
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
            cal = cal - (0.2 * 200);
            $('#healthBar').css('width', cal + 'px');
            return true;
        }
        else {
            $('#healthBar').css('width', '0px');
            $('#healthBar').text('');
            this.loseGame();
            return false;
        }
    }

    winGame() {
        this.stopMove();
        document.removeEventListener("keydown", KeyListen);
        document.removeEventListener("keyup", KeyUpListen);
        //var backgroundTitan = new Background("titan.png", 800, 400, "400px", "453px");
        var audio = document.createElement('audio');
        audio.setAttribute('src', 'attack-on-titans.mpeg');
        audio.play();

        var WinCureentImage = 0;
        var photos = this.characterWinPhotos;
        var positionX = this.position_x;
        var positionY = this.position_y;
        var characterElement = this.characterElementHTML;

        var win = setInterval(characterWin, 300);

        function characterWin() {
            if (WinCureentImage >= photos.length) {
                clearInterval(win);
                $('body').append("<div class='win-div'><h1 class='win-title'>You WIN</h1></div>");
                $('.win-div').append("<img src='image/win-logo.png' class='win-image'><a href='game.html' class='again'>Play Again?</a>");
                characterElement.style.display = "none";
            } else {
                if (WinCureentImage == photos.length - 1) {
                    characterElement.style.width = "150px";
                    characterElement.style.height = "80px";
                    console.log(characterElement.style.top, (positionY - 20));
                    characterElement.style.top = (positionY + 40) + "px";
                }
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

var EREN_STATE = STAND;
