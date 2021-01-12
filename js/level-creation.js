var mainCharacter;
var createdBackground = 0;
var enemy1, enemy2, enemy3;
var enemies = [];
var erenJumpPhotosArray = ["mov2", "mov3", "mov4", "mov5", "mov6", "mov7", "mov9", "mov10", "mov1"];
var erenMovePhotosArray = ["2.png", "3.png", "4.png", "5.png", "6.png"];
var erenWinPhotosArray = ["mov3", "mov4", "mov5", "mov6", "mov7", "mov1"];
var erenLosePhotosArray = ["1.png", "1.png", "2.png", "3.png", "4.png"];
var enemyPhotosArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];

var enemyAttack = ["1.png", "2.png", "3.png", "4.png", "5.png"];       //hossam edit


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
                enemy2 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 1);  //hossam edit
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
        switch (character) {
            case 1:
                mainCharacter = new Characters(character, "Eren jeager", 20, 1, erenJumpPhotosArray, erenMovePhotosArray, erenLosePhotosArray, erenWinPhotosArray, document.getElementById("defenderPhotos"));
                enemy1 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 0);  //hossam edit
                enemy2 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 1);  //hossam edit
                //enemy3 = new Enemy(,enemyAttack,enemyPhotosArray, 120, 2);  //hossam edit
                enemies = [enemy1, enemy2/*, enemy3*/];
                background1 = new Background("background1-level2.jpg", 1536, 760, "0px", "0px");
                background2 = new Background("background2-level2.jpg", 1536, 760, "-1536px", "0px");
                // Build roof
                for (let i = 0; i < 6; i++) {
                    roof = new Building("roof-Level2.png", 360, 140, roofPosetionX, "0px");
                    roofPosetionX += 330;
                }
                // Launch enemy attack
                Enemy.launchAttack(enemies);
                break;
            case 2:

                break;
            case 3:

                break;
        }
    } else if (level == 3) {

    }
}

