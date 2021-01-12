/* varible to sync between instructions to show it using animation attribute. */
var currentInstructionElement = 0;
/* get the next button to check if the user pressed on it or not. */
var nextBtn = document.getElementById("NextButton");
/* add Event listener on the next key to appear new instruction when the user presses on it. */
nextBtn.addEventListener("click", currentIns)
/* make interval event to show all instuction continousuly, if the user doesn't press on the next key. */
setInterval(currentInsInterval, 4000);
/* next listener function. */
function currentIns(obj) {
    /* stop the default response of the link tag of next button. */
    obj.preventDefault();
    /* call the animation function to show instructions in animated way. */
    animationMethod();
}
/* interval function */
function currentInsInterval() {
    /* call the animation function to show instructions in animated way. */
    animationMethod();
}

function animationMethod() {
    /* get the five instuction tags from html object to modifiy them bassed on the user or the time. */
    var ins1 = document.getElementById("instruction1");
    var ins2 = document.getElementById("instruction2");
    var ins3 = document.getElementById("instruction3");
    var ins4 = document.getElementById("instruction4");
    var ins5 = document.getElementById("instruction5");
    /* var to put the new istruction in animated mode. */
    var animation = "currentInstruction";
    /* var to stop last instruction from animated mode. */
    var Stop = "stopAnimation"
    /* check to know which should be in animated mode. */
    if (currentInstructionElement === 0) {
        /* stop the last instruction from animated mode. */
        ins1.style.animationName = Stop;
        /* put the new instruction in animated mode. */
        ins2.style.animationName = animation;
        /* make the new instruction appear in the page. */
        ins2.style.display = "block";
        /* increment the sync var to sync between instructions. */
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 1) {
        ins2.style.animationName = Stop;
        ins3.style.animationName = animation;
        ins3.style.display = "block";
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 2) {
        ins3.style.animationName = Stop;
        ins4.style.animationName = animation;
        ins4.style.display = "block";
        currentInstructionElement++;
    }
    else if (currentInstructionElement === 3) {
        ins4.style.animationName = Stop;
        ins5.style.animationName = animation;
        ins5.style.display = "block";
        currentInstructionElement++;
    }
    else {
        /* make all instructions in freeze mode. */
        ins5.style.animationName = Stop;
    }
}
