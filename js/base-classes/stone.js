var collisionStone = [];

class Stone extends LevelStructure {

    constructor(images, width, height, positionX, positionY) {
        super(images, width, height, positionX, positionY);

        $("#game").append(`<img id='stone${this.id}' class='stone-img'></img>`);
        $("#stone" + this.id).attr('src', "image/background/" + images);
        $("#stone" + this.id).css({
            "left": positionX,
            "bottom": positionY,
            "width": width,
            "height": height,
            "position": "absolute",
            "display": "none",
            "z-index": 4
        });
    }

    static stoneMovement() {
        var stoneFalling = [];
        $(".stone-img").css("display", "block");
        console.log("stones");
        $(".stone-img").each((i) => {
            collisionStone[i] = 0;
            var stoneBottom = parseInt($(".stone-img")[i].style.bottom);
            var stoneLeft = parseInt($(".stone-img")[i].style.left);

            if (i == 0) $(".stone-img")[i].style.left = parseInt(30 * window.innerWidth / 100) + "px";
            else if (i == 1) $(".stone-img")[i].style.left = parseInt(50 * window.innerWidth / 100) + "px";
            else if (i == 2) $(".stone-img")[i].style.left = parseInt(70 * window.innerWidth / 100) + "px";
            else $(".stone-img")[i].style.left = parseInt(90 * window.innerWidth / 100) + "px";

            stoneFalling[i] = setInterval(stoneFall, 150);

            function stoneFall() {
                if (stoneBottom >= parseInt(20 * window.innerHeight / 100)) {
                    if (i == 0)
                        $(".stone-img")[i].style.bottom = (stoneBottom -= 20) + "px";
                    else
                        $(".stone-img")[i].style.bottom = (stoneBottom -= 30) + "px";
                }
                else {
                    $(".stone-img")[i].style.bottom = window.innerHeight + "px";
                    clearInterval(stoneFalling[i]);
                }

                var characterLeft = parseInt(mainCharacter.characterElementHTML.style.left);
                var characterBottom = parseInt(mainCharacter.characterElementHTML.style.bottom);
                console.log(stoneLeft, characterLeft);
                if ((stoneLeft - 25 <= characterLeft) && (stoneLeft + 5 >= characterLeft)) {
                    console.log("inside collision");

                    if (characterBottom + 100 < (stoneBottom)) {

                        if (collisionStone[i] == 0) {
                            mainCharacter.sethealth()
                            collisionStone[i] = 1;
                        }
                    }
                    else { //gameOverVoice.pause(); }
                    }
                }
            }

        });

    }

    static stoneMovementWithCharacter() {
        $(".stone-img").each((i) => {
            var positionLeft = parseInt($(".stone-img")[i].style.left);
            $(".stone-img")[i].style.left = (positionLeft -= 25) + "px";
        });

    }

}