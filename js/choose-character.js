var characterFlage = -1;
var levelFlage = -1;

// Change Charecters
var characters = document.getElementsByClassName('character');

for (let i = 0; i < characters.length; i++) {
    characters[i].addEventListener('click', function (e) { chooseCharecter(e, i) });
}

function chooseCharecter(e, i) {
    for (let j = 0; j < characters.length; j++) {
        characters[j].style.background = "rgba(171, 144, 124,0.7)";
        characters[j].style.color = "black";
        characters[j].style.transition = " 0.5s ease-out";
    }
    characters[i].style.background = "rgba(0,0,0,0.8)";
    characters[i].style.color = "white";
    characters[i].style.transition = " 0.5s ease-out";
    characterFlage = i;
}

// Change Levels
var levels = document.getElementsByClassName('level');

for (let i = 0; i < levels.length; i++) {
    levels[i].addEventListener('click', function (e) {
        chooseLevel(e, i)
    })
}

function chooseLevel(e, i) {
    for (let j = 0; j < levels.length; j++) {
        levels[j].style.background = "rgba(171, 144, 124,0.7)";
        levels[j].style.color = "black";
        levels[j].style.transition = " 0.5s ease-out";
    }
    levels[i].style.background = "rgba(0,0,0,0.8)";
    levels[i].style.color = "white";
    levels[i].style.transition = " 0.5s ease-out";
    levelFlage = i;
}

// Start Action
var startBtn = $('#start');
var characterTitle = document.getElementById('title');
var levelTitle = document.getElementById('level-title');

startBtn.on('click', startGame);

function startGame(event) {
    event.preventDefault();
    if (characterFlage == -1) {
        characters[0].style.background = "rgba(0,0,0,0.8)";
        characters[0].style.color = "white";
        characters[0].style.transition = " 0.5s ease-out";
        characterFlage = 0;
    }

    if (levelFlage == -1) {
        levels[0].style.background = "rgba(0,0,0,0.8)";
        levels[0].style.color = "white";
        levels[0].style.transition = " 0.5s ease-out";
        levelFlage = 0;
    }

    characterFlage += 1;
    levelFlage += 1;

    setTimeout(function () {
        var url = "game.html?level=" + levelFlage + "&character=" + characterFlage;
        window.location.href = url;
    }, 500);

}

