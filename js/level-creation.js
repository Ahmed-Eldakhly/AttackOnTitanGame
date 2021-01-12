var mainCharacter;
var createdBackground = 0;
var enemy1, enemy2, enemy3;
var enemies = [];
var enemyPhotosArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
var enemyAttack = ["1.png", "2.png", "3.png", "4.png", "5.png"];       //hossam edit

// Eren
var erenJumpPhotosArray = ["eren/mov2", "eren/mov3", "eren/mov4", "eren/mov5", "eren/mov6", "eren/mov7", "eren/mov9", "eren/mov10", "eren/mov1"];
var erenMovePhotosArray = ["eren/1.png", "eren/2.png", "eren/3.png", "eren/4.png", "eren/5.png", "eren/6.png"];
var erenWinPhotosArray = ["eren-win", "eren/mov3", "eren/mov4", "eren/mov5", "eren/mov6", "eren/mov7", "eren/mov1"];
var erenLosePhotosArray = ["eren-lose", "eren/lose1.png", "eren/lose1.png", "eren/lose2.png", "eren/lose3.png", "eren/lose3.png"];

// Mikasa
var mikasaJumpPhotosArray = ["mikasa/mov2", "mikasa/mov3", "mikasa/mov4", "mikasa/mov5", "mikasa/mov6", "mikasa/mov7", "mikasa/mov9", "mikasa/mov10", "mikasa/mov1"];
var mikasaMovePhotosArray = ["mikasa/1.png", "mikasa/2.png", "mikasa/3.png", "mikasa/4.png", "mikasa/5.png"];
var mikasaWinPhotosArray = ["mikasa-win", "mikasa/mov3", "mikasa/mov4", "mikasa/mov5", "mikasa/mov6", "mikasa/mov7", "mikasa/mov1"];
var mikasaLosePhotosArray = ["mikasa-lose", "mikasa/lose1.png", "mikasa/lose1.png", "mikasa/lose2.png", "mikasa/lose3.png", "mikasa/lose3.png"];

// Armin
var arminJumpPhotosArray = ["armin/mov2", "armin/mov3", "armin/mov4", "armin/mov5", "armin/mov6", "armin/mov7", "armin/mov9", "armin/mov10", "armin/mov1"];
var arminMovePhotosArray = ["armin/1.png", "armin/2.png", "armin/3.png", "armin/4.png", "armin/5.png"];
var arminWinPhotosArray = ["armin-win", "armin/mov3", "armin/mov4", "armin/mov5", "armin/mov6", "armin/mov7", "armin/mov1"];
var arminLosePhotosArray = ["armin-lose", "armin/lose1.png", "armin/lose1.png", "armin/lose2.png", "armin/lose3.png", "armin/lose3.png"];

//Game Background
var background1, background2;

// Game Roof 
var roofPosetionX = -10, roof;

function gameCreation(level, character) {
    var buildingHight = parseInt(20 * $(window).innerHeight() / 100);;

    if (level == 1) {
        enemy1 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 0);  //hossam edit
        enemy2 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 1);  //hossam edit
        enemy3 = new Enemy(1, enemyAttack, enemyPhotosArray, 120, 2);
        enemies = [enemy1, enemy2, enemy3];
        background1 = new Background("game-back1.jpg", 1536, 760, "0px", "0px");
        background2 = new Background("game-back2.jpg", 1536, 760, "-1536px", "4px");
        //Build roof
        for (let i = 0; i < 4; i++) {
            roof = new Building("roof.png", 500, buildingHight, roofPosetionX, "0px");
            roofPosetionX += 510;
        }
        //Launch enemy attack
        Enemy.launchAttack(enemies);
        switch (character) {
            case 1:
                $("#defenderPhotos").attr('src', 'image/characters move/eren/1.png');
                mainCharacter = new Characters(character, "Eren jeager", 20, level, erenJumpPhotosArray, erenMovePhotosArray, erenLosePhotosArray, erenWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
            case 2:
                $("#defenderPhotos").attr('src', 'image/characters move/mikasa/1.png');
                mainCharacter = new Characters(character, "Mikasa", 20, level, mikasaJumpPhotosArray, mikasaMovePhotosArray, mikasaLosePhotosArray, mikasaWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
            case 3:
                $("#defenderPhotos").attr('src', 'image/characters move/armin/1.png');
                mainCharacter = new Characters(character, "Armin", 20, level, arminJumpPhotosArray, arminMovePhotosArray, arminLosePhotosArray, arminWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
        }
    } else if (level == 2) {
        enemy1 = new Enemy(level, enemyAttack, enemyPhotosArray, 120, 3);  //hossam edit
        enemy2 = new Enemy(level, enemyAttack, enemyPhotosArray, 120, 4);  //hossam edit
        enemy3 = new Enemy(level, enemyAttack, enemyPhotosArray, 120, 2);  //hossam edit
        enemies = [enemy1, enemy2, enemy3];
        background1 = new Background("background1-level2.jpg", 1536, 760, "0px", "0px");
        background2 = new Background("background2-level2.jpg", 1536, 760, "-1536px", "0px");

        // Build roof
        for (let i = 0; i < 6; i++) {
            roof = new Building("roof-Level2.png", 360, buildingHight, roofPosetionX, "0px");
            roofPosetionX += 330;
        }
        // Launch enemy attack
        Enemy.launchAttack(enemies);
        switch (character) {
            case 1:
                $("#defenderPhotos").attr('src', 'image/characters move/eren/1.png');
                mainCharacter = new Characters(character, "Eren jeager", 20, level, erenJumpPhotosArray, erenMovePhotosArray, erenLosePhotosArray, erenWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
            case 2:
                $("#defenderPhotos").attr('src', 'image/characters move/mikasa/1.png');
                mainCharacter = new Characters(character, "Mikasa", 20, level, mikasaJumpPhotosArray, mikasaMovePhotosArray, mikasaLosePhotosArray, mikasaWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
            case 3:
                $("#defenderPhotos").attr('src', 'image/characters move/armin/1.png');
                mainCharacter = new Characters(character, "Armin", 20, level, arminJumpPhotosArray, arminMovePhotosArray, arminLosePhotosArray, arminWinPhotosArray, document.getElementById("defenderPhotos"));
                break;
        }
    } else if (level == 3) {

    }
}

