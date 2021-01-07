var idCounter = 0;
class Building {
    id = 0;
    constructor(images, width, height, positionx, positiony) {
        this.images = images;
        this.width = width;
        this.height = height;
        this.id = ++idCounter;
        this.positionx = positionx;
        this.positiony = positiony;
        this.forward = 0;

        if (this.id > 2) {
            $("#game").append("<img id='build" + this.id + "' class='build-img'></img>");
            $("#build" + this.id).css("z-index", 3);
        }

        $("#game").append("<img id='build" + this.id + "' class='floor-img'></img>");
        $("#build" + this.id).attr('src', "image/Buildings/" + images);
        $("#build" + this.id).css("left", positionx);
        $("#build" + this.id).css("bottom", positiony);
        $("#build" + this.id).css("width", width);
        $("#build" + this.id).css("height", height);

        if (this.id > 2) {
            $("#build" + this.id).css("z-index", 3);
        }

    }



}
