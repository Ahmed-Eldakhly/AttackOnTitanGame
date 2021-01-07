var enemyPhotosArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
var baseTop = 0;
var baseRight = 0;
var character = [];

class Enemy {
    //static id = 0;
    constructor(images, speed,id) {
        this.images = images;
        this.speed = speed;
        this.id = id
    }

    move() {
        console.log(this.id);
        character[this.id] = document.createElement("img");
       // id += 1;
        var body = document.getElementsByTagName("body")[0];

        character[this.id].classList.add("enemy");
        character[this.id].src = "image/characters/enemy-" + this.images[0];


        body.appendChild(character[this.id]);

        var pos = window.outerWidth;  
        character[this.id].style.left = pos + "px";

        var id = setInterval(frame, this.speed);
        var idd = this.id;
        var img = this.images;
        var i = 0;
        function frame() {
            if (pos <= -160) {
                //clearInterval(id);
                pos = window.outerWidth; 
            }
            else {
                character[idd].src = "image/characters/enemy-" + img[i];
                character[idd].style.left = pos + "px";
                pos -= 40;
                i = i + 1;
                if (i > 7) {
                    i = 0;
                }
            }
        }
    }
};  
