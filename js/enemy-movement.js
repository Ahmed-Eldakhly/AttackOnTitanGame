// frame.style.backgroundColor = "yellow";
// document.body.style.backgroundColor = "red";

var enemy = ["image/characters/enemy-1.png","image/characters/enemy-2.png",
                "image/characters/enemy-3.png","image/characters/enemy-4.png",
                "image/characters/enemy-5.png","image/characters/enemy-6.png",
                "image/characters/enemy-7.png","image/characters/enemy-8.png"];
var i = 0;
function myMove() { 
    var box = document.getElementById("frame");
    var character = document.createElement("img");
    character.src = enemy[0];
    box.appendChild(character);
    character.style.position = "relative";
    var pos = 1150;
    character.style.left = pos + "px"; 
    var id = setInterval(frame, 200);
    function frame() 
    {
      if (pos <= -200) 
      {
        //clearInterval(id);
        pos = 1150;
      } 
      else 
      {
        character.src = enemy[i];
        character.style.left = pos + "px"; 
        console.log(pos);
        pos -= 140; 
        i = i + 1;
        if(i > 7)
        {
            i = 0;
        }
        
      }
    }
}

  

