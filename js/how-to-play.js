/* get the user browser dimensions*/
document.getElementById("htmlID").style.height = window.outerHeight;
document.getElementById("htmlID").style.width = window.outerWidth;

/* make the window response at any size*/
window.addEventListener("resize", function () {
    /* get the user browser NEW dimensions*/
    document.getElementById("htmlID").style.height = window.outerHeight;
    document.getElementById("htmlID").style.width = window.outerWidth;
});

/*var between instructions*/
var currentInstructionElement = 0;
/*//get button next*/
var nextBtn = document.getElementById("NextButton");

/*Get  instruction*/
var ins1 = document.getElementById("instruction1");
var ins2 = document.getElementById("instruction2");
var ins3 = document.getElementById("instruction3");
var ins4 = document.getElementById("instruction4");
var ins5 = document.getElementById("instruction5");

/* var to put the new istruction in animated mode*/
var animation1 = "currentInstruction";
var animation2 = "currentInstruction2";

/* var to stop last instruction from animated mode*/
var Stop = "stopAnimation";

/*Set Audio*/
backgroundAudio.setAttribute('src', 'audio/how-to-play.mp3');

/* moving to the next instruction by click */
nextBtn.addEventListener("click", currentIns);
function currentIns(obj) {
    obj.preventDefault();
    animationMethod();  //call animation
}

/* moving to the next instruction continousuly*/
setInterval(currentInsInterval, 4000);
function currentInsInterval() {
    animationMethod();  //call animation
}

/*Function to Show instruction in animated way*/
function animationMethod() {
    /* check to know which should be in animated mode*/
    if (currentInstructionElement === 0) {
        /* stop the last instruction from animated mode*/
        ins1.style.animationName = Stop;
        /* put the new instruction in animated mode*/
        ins2.style.animationName = animation1;
        /* make the new instruction appear in the page*/
        ins2.style.display = "block";
        /* increment the sync var to sync between instructions*/
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 1) {
        ins2.style.animationName = Stop;
        ins3.style.animationName = animation1;
        ins3.style.display = "block";
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 2) {
        ins3.style.animationName = Stop;
        ins4.style.animationName = animation2;
        ins4.style.display = "block";
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 3) {
        ins4.style.animationName = Stop;
        ins5.style.animationName = animation2;
        ins5.style.display = "block";
        currentInstructionElement++;
    }
    else {
        /* make all instructions in freeze mode*/
        ins5.style.animationName = Stop;
    }
}
