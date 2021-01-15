var backgroundAudio = document.createElement('audio');
backgroundAudio.setAttribute('src', 'audio/attack-small.mp3');

//Add Sound 
var soundFlag = false;
$('.speaker').on('click', function (params) {
    /* add background sound */
    backgroundAudio.loop = true;

    if (!soundFlag) {
        $('#sound').attr("src", "image/sound.svg");
        backgroundAudio.play();
    } else {
        $('#sound').attr("src", "image/no-sound.svg");
        backgroundAudio.pause();
    }
    soundFlag = !soundFlag;
})
