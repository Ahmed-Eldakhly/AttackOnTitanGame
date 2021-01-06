var enemy = ["image/characters/enemy-1.png","image/characters/enemy-2.png",
                "image/characters/enemy-3.png","image/characters/enemy-4.png",
                "image/characters/enemy-5.png","image/characters/enemy-6.png",
                "image/characters/enemy-7.png","image/characters/enemy-8.png"];

class enemyClass{
  constructor(images,lastPosition,speed)
  {
    this.images = images;
    this.speed = speed;
    this.lastPosition = lastPosition;
  }
  move()
  {
    var box = document.getElementById("frame");
    var character = document.createElement("img");

    character.src = this.images[0];

    box.appendChild(character);
    character.style.position = "relative";
    
    var pos = window.outerWidth;  //1150
    character.style.left = pos + "px";

    var id = setInterval(frame, this.speed);

    var img = this.images;
    var last = this.lastPosition  ;
    var i = 0;
    function frame() 
    { 
      console.log(window.outerWidth);  
      if (pos <= -120) 
      {
        //clearInterval(id);
        pos =  window.outerWidth; //1150
      } 
      else 
      {
        character.src = img[i];
        character.style.left = pos + "px"; 
        pos -= 40;
        console.log(pos);
        i = i + 1;
        if(i > 7)
        {
            i = 0;
        }  
      }
    }
  }
};  

enemy1 = new enemyClass(enemy,200,100);

enemy1.move();







  

