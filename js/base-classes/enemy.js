var enemyPhotosArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];

class Enemy {
    constructor(images, lastPosition, speed) {
        this.images = images;
        this.speed = speed;
        this.lastPosition = lastPosition;
    }
    move() {
        var character = document.createElement("img");
        var body = document.getElementsByTagName("body")[0];
        character.classList.add("enemy");
        character.src = "image/characters/enemy-" + this.images[0];

        body.appendChild(character);

        var pos = window.outerWidth;  //1150
        character.style.left = pos + "px";

        var id = setInterval(frame, this.speed);

        var img = this.images;
        var last = this.lastPosition;
        var i = 0;
        function frame() {
            if (pos <= -120) {
                //clearInterval(id);
                pos = window.outerWidth; //1150
            }
            else {
                character.src = "image/characters/enemy-" + img[i];
                character.style.left = pos + "px";
                pos -= 40;
                i = i + 1;
                if (i > 7) {
                    i = 0;
                }
            }
        }
    }
};  
