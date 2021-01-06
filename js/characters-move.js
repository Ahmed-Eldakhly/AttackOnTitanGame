
var character = new Character("Eren", 1, ["2.png", "3.png", "4.png", "5.png", "6.png"], ["b"]);
$(document).keydown(function (e) {
    var position = $("#character").position();
    switch (e.keyCode) {
        case 39: //right
            if (!character.forward) character.forwardMove(position);
            break;
    }
});

$(document).keyup(function (e) {
    switch (e.keyCode) {
        case 39:
            character.stopMove();
            break;
    }
});
