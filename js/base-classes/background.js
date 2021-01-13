class Background extends LevelStructure {

    constructor(images, width, height, positionX, positionY) {
        super(images, width, height, positionX, positionY);

        $("#game").append("<img id='back" + this.id + "' class='background-img'></img>");
        $("#back" + this.id).attr('src', "image/background/" + images);
        $("#back" + this.id).css({
            "left": positionX,
            "bottom": positionY,
            "width": width,
            "height": height
        });
    }

    static backgroundsMovement() {
        $(".background-img").each((i) => {
            var position = parseInt($(".background-img")[i].style.left);
            $(".background-img")[i].style.left = position - 20 + "px";
            if (position <= - (window.outerWidth) && i == 0) {
                position = parseInt($(".background-img")[1].style.left) + (window.outerWidth);
                $(".background-img")[i].style.left = position - 20 + "px";
            }
            else if (position <= - (window.outerWidth) && i == 1) {
                position = parseInt($(".background-img")[0].style.left) + (window.outerWidth);
                $(".background-img")[i].style.left = position + "px";
            }
        })
    }
}