var baseTop = 0;
var baseRight = 0;
var character = [];
var createEnemy = [];
var collisionEnemy = [];
var index = 0;

class Enemy {
    constructor(titanName, level, attackMovement, images, speed, id) { //hossam edit
        this.images = images;
        this.speed = speed;
        this.id = id
        this.attackMovement = attackMovement;  //hossam edit
        this.level = parseInt(level);                     //hosssam edit
        this.titanName = titanName;
    }

    moveEnemy() {
        var attackFlag = false;        //hossam edit
        var attackingOne = -1;         //hossam edit
        character[this.id] = document.createElement("img");
        var body = document.getElementsByTagName("body")[0];

        character[this.id].classList.add("enemy");
        character[this.id].src = "image/characters/" + this.images[0];

        body.appendChild(character[this.id]);

        var positionX = window.outerWidth;
        //var positionY = window.outerHeight
        character[this.id].style.left = positionX + "px";
        if (this.titanName == "Eren") {
            character[this.id].style.height = "300px";
        }
        else if (this.titanName == "Reiner") {
            character[this.id].style.height = "270px";
        }

        character[this.id].style.bottom = parseInt(2 * window.outerHeight / 100) + "px";
        var enemyGenerator = setInterval(generateEnemies, this.speed);
        var enemyId = this.id;
        collisionEnemy[enemyId] = 0;
        var enemyImages = this.images;
        var curruntEnemy = 0;
        var attackMove = 0;    //hossam edit
        var attackImages = this.attackMovement //hossam edit
        var senesingAttack = this.level;
        collisionEnemy[enemyId] = 0;

        function generateEnemies() {
            if (positionX <= -160) {    //hosssam edit from -160 to -560
                clearInterval(enemyGenerator);
                positionX = window.outerWidth;
                character[enemyId].remove();
            }
            else {
                if (senesingAttack > 1 && attackFlag == true && enemyId == attackingOne)  //hossam edit
                {
                    character[attackingOne].src = "image/characters/" + attackImages[attackMove];
                    attackMove += 1;
                    character[attackingOne].style.left = (positionX -= 30) + "px"
                    if (attackMove >= attackImages.length) //hossam edit
                    {
                        attackMove = 0;
                        attackFlag = false; //hossam edit
                    }
                }
                else if (senesingAttack >= 1 && attackFlag == false || enemyId != attackingOne) {
                    character[enemyId].src = "image/characters/" + enemyImages[curruntEnemy];
                    character[enemyId].style.left = positionX + "px";
                    positionX -= 50;
                    curruntEnemy = curruntEnemy + 1;

                    if (curruntEnemy >= enemyImages.length) {
                        curruntEnemy = 0;
                    }

                }
            }
            var enemyLeft = parseInt(character[enemyId].style.left);
            var characterLeft = parseInt(mainCharacter.characterElementHTML.style.left);
            var enemyBottom = parseInt(character[enemyId].style.bottom);
            var characterBottom = parseInt(mainCharacter.characterElementHTML.style.bottom);
            if ((enemyLeft - 45 <= characterLeft) && (enemyLeft + 45 >= characterLeft)) {
                if (characterBottom < (enemyBottom + 300)) {
                    if (collisionEnemy[enemyId] == 0) {
                        //mainCharacter.sethealth()
                        collisionEnemy[enemyId] = 1;
                        if (senesingAttack > 1) {
                            attackFlag = true;
                            attackingOne = enemyId
                        }

                    }
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

