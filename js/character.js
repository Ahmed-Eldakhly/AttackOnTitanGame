var idCounter = 0;
var move;
var jump;
class Character {
    id = 0;
    constructor(name, level, forwardImages, jumpImages) {
        this.name = name;
        this.level = level;
        this.forwardImages = forwardImages;
        this.jumpImages = jumpImages
        this.id = ++idCounter;
        this.forward = 0;
    }

    forwardMove(position) {
        this.forward = 1;
        var i = 0;
        var images = this.forwardImages;
        move = setInterval(function () {
            if (i == images.length) {
                i = 0;
            }
            $("#character").attr('src', "image/sprit-sheet/characters/forward-move/" + images[i]);
            $("#character").css('left', position.left += 20);
            i++;
        }, 120);
    }

    stopMove() {
        this.forward = 0;
        $("#character").attr('src', "image/sprit-sheet/characters/forward-move/1.png");
        clearInterval(move);
    }

    jumpMove(position) {
        clearInterval(move);
        var i = 0;
        var images = this.jumpImages;
        move = setInterval(function () {
            console.log(images.length);
            if (i == images.length) {
                i = 0;
                $("#character").css('top', position.top -= 80);
                $("#character").css('left', position.left += 30);
                clearInterval(move);
            }
            $("#character").attr('src', "image/sprit-sheet/characters/jump-move/" + images[i]);
            i++;
        }, 120);

        $("#character").css('top', position.top += 50);

    }


}

    Object.defineProperty(Character, 'id', {
    writable: false
});
