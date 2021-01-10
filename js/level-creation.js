var mainCharacter;
var createdBackground = 0;
var enemy1, enemy2, enemy3;
var enemies = [];
//Game Background
var background1, background2;

// Game Roof 
var roofPosetionX = 0, roof;

function gameCreation(level, character) {

    if (level == 1) {
        switch (character) {
            case 1:
                mainCharacter = new Characters(character, "Eren jeager", 20, 1, ErenJumpPhotosArray, ErenMovePhotosArray, ErenLosePhotosArray, ErenWinPhotosArray, document.getElementById("defenderPhotos"));
                enemy1 = new Enemy(enemyPhotosArray, 120, 0);
                enemy2 = new Enemy(enemyPhotosArray, 120, 1);
                enemy3 = new Enemy(enemyPhotosArray, 120, 2);
                enemies = [enemy1, enemy2, enemy3];
                background1 = new Background("game-back1.jpg", 1536, 760, "0px", "0px");
                background2 = new Background("game-back2.jpg", 1536, 760, "-1590px", "4px");
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

    }
}

