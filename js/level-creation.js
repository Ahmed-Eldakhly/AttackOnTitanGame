var mainCharacter;
var createdBackground = 0;
var enemy1, enemy2, enemy3;
var enemies = [];
var erenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var erenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];
var erenWinPhotosArray = ["mov3", "mov4", "mov5", "mov6", "mov7", "mov1"];
var erenLosePhotosArray = ["1.png", "1.png", "2.png", "3.png", "4.png"];

var enemyPhotosArray = ["enemy-1.png", "enemy-2.png", "enemy-3.png", "enemy-4.png", "enemy-5.png",
    "enemy-6.png", "enemy-7.png", "enemy-8.png"];
var enemyAttack = ["attack-1.png", "attack-2.png", "attack-3.png", "attack-4.png", "attack-5.png"]; //hossam edit

var enemyPhotosArrayReiner = ["r1.png", "r2.png", "r3.png", "r4.png", "r5.png", "r6.png", "r7.png"];
var enemyAttackReiner = ["ra1.png", "ra2.png", "ra3.png", "ra4.png", "ra5.png"];   //hossam edit
// var enemyAttackReiner = ["rb1.png", "rb2.png", "rb3.png", "rb4.png","rb5.png"];   //hossam edit




//Game Background
var background1, background2;

// Game Roof 
var roofPosetionX = 0, roof;

function gameCreation(level, character) {

    if (level == 1) {
        switch (character) {
            case 1:
                mainCharacter = new Characters(character, "Eren jeager", 20, 1, erenJumpPhotosArray, erenMovePhotosArray, erenLosePhotosArray, erenWinPhotosArray, document.getElementById("defenderPhotos"));
                enemy1 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 0);  //hossam edit
                enemy2 = new Enemy(1, enemyAttackReiner, enemyPhotosArrayReiner, 120, 1);  //hossam edit
                //enemy3 = new Enemy(,enemyAttack,enemyPhotosArray, 120, 2);  //hossam edit
                enemies = [enemy1, enemy2/*, enemy3*/];
                background1 = new Background("game-back1.jpg", 1536, 760, "0px", "0px");
                background2 = new Background("game-back2.jpg", 1536, 760, "-1536px", "4px");
                // Build roof
                for (let i = 0; i < 4; i++) {
                    roof = new Building("roof.png", 500, 150, roofPosetionX, "0px");
                    roofPosetionX += 520;
                }
                // Launch enemy attack
                Enemy.launchAttack(enemies);
                break;
            case 2:

                break;
            case 3:

                break;
        }
    } else if (level == 2) {

    } else if (level == 3) {

        switch (character) {
            case 1:
                mainCharacter = new Characters(character, "Eren jeager", 20, 3, erenJumpPhotosArray, erenMovePhotosArray, erenLosePhotosArray, erenWinPhotosArray, document.getElementById("defenderPhotos"));
                enemy1 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 0);  //hossam edit
                enemy2 = new Enemy(1, enemyAttackReiner, enemyPhotosArrayReiner, 120, 1);  //hossam edit
                enemies = [enemy1, enemy2];
                background1 = new Background("sunset.jpg", window.outerWidth, 760, "0px", "0px");
                background2 = new Background("sunset2.jpg", window.outerWidth, 760, -window.outerWidth + "px", "4px");
                // Build roof
                for (let i = 0; i < 4; i++) {
                    roof = new Building("roof.png", (window.outerWidth / 3) - 40, 150, roofPosetionX, "0px");
                    roofPosetionX += (window.outerWidth / 3) - 20;
                }
                // Launch enemy attack
                // Enemy.launchAttack(enemies);
                break;
            case 2:

                break;
            case 3:

                break;
        }

    }
}

