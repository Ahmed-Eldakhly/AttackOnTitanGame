class Floor extends LevelStructure {

    constructor(images, width, height, positionx, positiony) {
        super(images, width, height, positionx, positiony);
        $("#game").append("<img id='build" + this.id + "' class='floor-img'></img>");
        $("#floor" + this.id).attr('src', "image/floor/" + images);
        $("#floor" + this.id).css({
            "left": positionx,
            "bottom": positiony,
            "width": width,
            "height": height,
            "z-index": 3
        });
    }

    static floorMovement() {
        $(".floor-img").each((i) => {
            var position = parseInt($(".floor-img")[i].style.left);
            if (position < - parseInt($(".floor-img").css('width'))) {
                position = window.outerWidth;
            }

            $(".floor-img")[i].style.left = position - 30 + "px";
        })
    }
}