var ErenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var jumpIntervalID;
/*var jumpKeyListenerID;*/
var jumpState = 0;
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
    }

    /* jump only */
    jumpOnly_function(obj) {
        this.jumpPosition++;
        switch (this.jumpPosition) {
            case 0:
            case 1:
            case 2:
                this.characterElementHTML.src = "image/characters move/" + this.characterJumpPhotos[this.jumpPosition] + ".png";
                console.log(this.jumpPosition)
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
                clearInterval(jumpIntervalID);
                break;
        }
    }
    /* movement only */
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
                console.log(this.jumpPosition)
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
                clearInterval(jumpIntervalID);
                /*jumpKeyListenerID = document.addEventListener("keydown" , KeyListen);*/
                break;
        }
    }

}

var Eren = new characters(1, "Eren jeager", 60, 1, ErenJumpPhotosArray, [5, 10], document.getElementById("erenJumpPhotos"));

document.addEventListener("keydown", KeyListen);
/*jumpKeyListenerID = document.addEventListener("keydown" , KeyListen);*/
function KeyListen(jumpObject) {
    /*clearInterval(jumpKeyListenerID);*/
    if (jumpObject.keyCode == 38 && jumpState === 0) {
        var callBackJump = Eren.jumpWithMove_function.bind(Eren)
        jumpIntervalID = setInterval(callBackJump, 70);
        jumpState = 1;
    }
}
