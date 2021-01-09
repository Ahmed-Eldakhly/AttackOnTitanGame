var enemyPhotosArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
var baseTop = 0;
var baseRight = 0;
var character = [];

class Enemy {
    //static id = 0;
    constructor(images, speed, id) {
        this.images = images;
        this.speed = speed;
        this.id = id
    }

    move() {
        character[this.id] = document.createElement("img");
        var body = document.getElementsByTagName("body")[0];

        character[this.id].classList.add("enemy");
        character[this.id].src = "image/characters/enemy-" + this.images[0];


        body.appendChild(character[this.id]);

        var pos = window.outerWidth;
        character[this.id].style.left = pos + "px";
        character[this.id].style.bottom = parseInt(2 * window.outerHeight / 100) + "px";
        var id = setInterval(frame, this.speed);
        var idd = this.id;
        var img = this.images;
        var i = 0;
        function frame() {
            if (pos <= -160) {
                clearInterval(id);
                pos = window.outerWidth;
                character[idd].remove();
            }
            else {
                character[idd].src = "image/characters/enemy-" + img[i];
                character[idd].style.left = pos + "px";
                pos -= 45;
                i = i + 1;
                if (i >= img.length) {
                    i = 0;
                }
            }
            //console.log((parseInt(character[idd].style.left)))
            if (parseInt(character[idd].style.left) <= parseInt(Eren.characterElementHTML.style.left) && parseInt(character[idd].style.left) + 40 >= parseInt(Eren.characterElementHTML.style.left)) {
                if (parseInt(Eren.characterElementHTML.style.bottom) < (parseInt(character[idd].style.bottom) + 300)) { /*gameOverVoice.play();*/ console.log("lose") }
                else { //gameOverVoice.pause(); }
                }
            }
            else {
                // gameOverVoice.pause();
            }
        }
    }
};

//var gameOverVoice = document.getElementById("gameOver");

