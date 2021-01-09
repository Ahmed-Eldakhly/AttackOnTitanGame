class Building extends LevelStructure {

    constructor(images, width, height, positionx, positiony) {
        super(images, width, height, positionx, positiony);
        $("#game").append("<img id='build" + this.id + "' class='build-img'></img>");
        $("#build" + this.id).attr('src', "image/buildings/" + images);
        $("#build" + this.id).css({
            "left": positionx,
            "bottom": positiony,
            "width": width,
            "height": height,
            "z-index": 3
        });
    }

    static buildingsMovement() {
        $(".build-img").each((i) => {
            var position = parseInt($(".build-img")[i].style.left);
            if (position < - parseInt($(".build-img").css('width'))) {
                position = window.outerWidth;
            }

            $(".build-img")[i].style.left = position - 30 + "px";
        })
    }
}