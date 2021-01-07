//https://code.jquery.com/jquery-3.5.1.js
var idCounter = 0;
var move;
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

            $("#game").append("<img id='build" + this.id + "' class='build-img'></img>");
            $("#build" + this.id).attr('src', "image/Buildings/" + images);
            $("#build" + this.id).css("right", positionx);
            $("#build" + this.id).css("top", positiony);
            $("#build" + this.id).css("width", width);
            $("#build" + this.id).css("height", height);

        }


        // forwardMove(position) {
        //     this.forward = 1;
        //     move = setInterval(function () {$("#build"+this.id).css('left', position.left -= 20);}, 120);
        // }


        // backwardMove(position) {
        //     this.forward = 1;
        //     move = setInterval(function () {$("#build"+this.id).css('left', position.left += 20);}, 120);
        // }

        // stopMove() {
        //     this.forward = 0;
        //     clearInterval(move);
        // }




    }
    Object.defineProperty(Building, 'id', {
        writable: false
});


var building = new Building("demo2.png", 600, 600, "0px", "100px");
var building2 = new Building("demo1.png", 300, 300, "600px", "100px");


$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 39:
            $(".build-img").each((i) => {
                var position = $(".build-img")[i].style.right;
                //right 
                $(".build-img")[i].style.right = parseInt(position) + 20 + "px";
            })
    }
})


// $(document).keydown(function (e) {
//     switch (e.keyCode) {
//         case 39: 
//  $(".build-img").each((i)=>{ 
//       //console.log($(this));
//         var position = $(".build-img")[i].style.left;
//         console.log(position);
//       //right 
//     //$(".build-img")[i].css('left', position.left += 20)

// });  }
// })

// $(document).keydown(function (e) {
//     var position = $("#build"+this.id).position();
//     switch (e.keyCode) {
//         case 39: //right
//             if (!building.forward) building.forwardMove(position);
//             break;
//         case 37: //left
//             if (!building.forward) building.backwardMove(position);
//             break;
//     }
// });

// $(document).keyup(function (e) {
//     switch (e.keyCode) {
//         case 39:
//             building.stopMove();
//             break;
//         case 37:
//             building.stopMove();
//             break;
//     }
// });



