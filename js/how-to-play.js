var NextBtn = document.getElementById("NextButton");
NextBtn.addEventListener("click" , currentIns)
var x = 0;
setInterval(currentInsInterval , 4000);
function currentIns(obj)
{
    obj.preventDefault();
    var ins1 = document.getElementById("instruction1");
    var ins2 = document.getElementById("instruction2");
    var ins3 = document.getElementById("instruction3");
    var ins4 = document.getElementById("instruction4");
    var ins5 = document.getElementById("instruction5");

    var animation = "currentInstruction";
    var Stop = "stopAnimation"
    if(x===0)
    {
        ins1.style.animationName = Stop;
        ins2.style.animationName = animation;
        ins2.style.display = "block";
        x++;
    }
    else if(x===1)
    {
        ins2.style.animationName = Stop;
        ins3.style.animationName = animation;
        ins3.style.display = "block";
        x++;
    }
    else if(x===2)
    {
        ins3.style.animationName = Stop;
        ins4.style.animationName = animation;
        ins4.style.display = "block";
        x++;
    }
    else if(x===3)
    {
        ins4.style.animationName = Stop;
        ins5.style.animationName = animation;
        ins5.style.display = "block";
        x++;
    }
    else
    {
        ins5.style.animationName = Stop;
    }
}
function currentInsInterval()
{
    var ins1 = document.getElementById("instruction1");
    var ins2 = document.getElementById("instruction2");
    var ins3 = document.getElementById("instruction3");
    var ins4 = document.getElementById("instruction4");
    var ins5 = document.getElementById("instruction5");
    var animation = "currentInstruction";
    var Stop = "stopAnimation"
    if(x===0)
    {
        ins1.style.animationName = Stop;
        ins2.style.animationName = animation;
        ins2.style.display = "block";
        x++;
    }
    else if(x===1)
    {
        ins2.style.animationName = Stop;
        ins3.style.animationName = animation;
        ins3.style.display = "block";
        x++;
    }
    else if(x===2)
    {
        ins3.style.animationName = Stop;
        ins4.style.animationName = animation;
        ins4.style.display = "block";
        x++;
    }
    else if(x===3)
    {
        ins4.style.animationName = Stop;
        ins5.style.animationName = animation;
        ins5.style.display = "block";
        x++;
    }
    else
    {
        ins5.style.animationName = Stop;
    }
}
