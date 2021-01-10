var baseTop = 0;
var baseRight = 0;
var character = [];
var createEnemy = [];

class Enemy {
    constructor(images, speed, id) {
        this.images = images;
        this.speed = speed;
        this.id = id
    }

    moveEnemy() {
        character[this.id] = document.createElement("img");
        var body = document.getElementsByTagName("body")[0];

        character[this.id].classList.add("enemy");
        character[this.id].src = "image/characters/enemy-" + this.images[0];


        body.appendChild(character[this.id]);

        var positionX = window.outerWidth;
        character[this.id].style.left = positionX + "px";
        character[this.id].style.bottom = parseInt(2 * window.outerHeight / 100) + "px";
        var enemyGenerator = setInterval(generateEnemies, this.speed);
        var enemyId = this.id;
        var enemyImages = this.images;
        var curruntEnemy = 0;
        function generateEnemies() {
            if (positionX <= -160) {
                clearInterval(enemyGenerator);
                positionX = window.outerWidth;
                character[enemyId].remove();
            }
            else {
                character[enemyId].src = "image/characters/enemy-" + enemyImages[curruntEnemy];
                character[enemyId].style.left = positionX + "px";
                positionX -= 45;
                curruntEnemy = curruntEnemy + 1;
                if (curruntEnemy >= enemyImages.length) {
                    curruntEnemy = 0;
                }
            }
            console.log((parseInt(character[enemyId].style.left)))
            if ((parseInt(character[enemyId].style.left) <= parseInt(mainCharacter.characterElementHTML.style.left)
                && parseInt(character[enemyId].style.left) + 40 >= parseInt(mainCharacter.characterElementHTML.style.left))) {
                if (parseInt(mainCharacter.characterElementHTML.style.bottom) < (parseInt(character[enemyId].style.bottom) + 300)) {
                    mainCharacter.sethealth()
                }
                else { //gameOverVoice.pause(); }
                }
            }
            else {
                // gameOverVoice.pause();
            }
        }
    }

    static createAttackWave(enemies) {
        enemies[0].moveEnemy();
        var timer = 2000;
        for (let i = 1; i < enemies.length; i++) {
            var x = enemies[i].moveEnemy.bind(enemies[i]);
            setTimeout(x, timer);
            timer += 1000;
        }
    }

    static launchAttack(enemies) {
        Enemy.createAttackWave(enemies);
        var wave = 5000;
        for (let i = 0; i < 25; i++) {
            createEnemy[i] = setTimeout(function () {
                Enemy.createAttackWave(enemies);
            }, wave);
            wave += 5000;
        }
    }

    static clearAttack() {
        for (let i = 0; i < 25; i++) {
            clearTimeout(createEnemy[i]);
        }
    }

};

//var gameOverVoice = document.getElementById("gameOver");

