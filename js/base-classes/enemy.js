var baseTop = 0;
var baseRight = 0;
var character = [];
var createEnemy = [];
var collisionEnemy = [];

var attackFlag = false;        //hossam edit
var attackingOne = -1;         //hossam edit

class Enemy {
    constructor(level,attackMovement,images, speed, id) { //hossam edit
        this.images = images;
        this.speed = speed;
        this.id = id
        this.attackMovement = attackMovement;  //hossam edit
        this.level = level;                     //hosssam edit
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
                if(attackFlag == false  || enemyId != attackingOne)
                {
                    character[enemyId].src = "image/characters/enemy-" + enemyImages[curruntEnemy];
                    character[enemyId].style.left = positionX + "px";
                    positionX -= 45;                        curruntEnemy = curruntEnemy + 1;
                    if (curruntEnemy >= enemyImages.length) {
                        curruntEnemy = 0;
                    }
                }
                else if(attackFlag == true)  //hossam edit
                {
                    if(enemyId == attackingOne)   //hossam edit
                    {
                        character[attackingOne].src = "image/characters/attack-"+attackImages[attackMove]; //hossam edit
                        attackMove += 1;
                        if(attackMove >= attackImages.length) //hossam edit
                        {
                            attackMove = 0;
                            attackFlag = false; //hossam edit
                        }
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
                        mainCharacter.sethealth()
                        collisionEnemy[enemyId] = 1;
                        attackFlag = true;
                        attackingOne = enemyId
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

