/*this class inherites from LevelStructure class
its instance creates the background of the game */


class Background extends LevelStructure {

    constructor(images, width, height, positionX, positionY) {
        super(images, width, height, positionX, positionY);
        /* creates image element*/
        $("#game").append("<img id='back" + this.id + "' class='background-img'></img>"); 
        /*set an image to the element*/
        $("#back" + this.id).attr('src', "image/background/" + images);
        /*set position and size*/
        $("#back" + this.id).css({
            "left": positionX,
            "bottom": positionY,
            "width": width,
            "height": height
        });
    }
    /*a function to make the background move with the character*/
    static backgroundsMovement() {
        $(".background-img").each((i) => {
            /*read position*/
            var position = parseInt($(".background-img")[i].style.left);
            /*move position by 20 px*/
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