var story = ["1.png", "2.png", "3.png", "4.png", "5.png", "7.png", "8.png", "9.png", "11.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "23.png"];
var tell1 = ["There was a city in a world where humanity lives ...", "The walls protect them from gigantic man-eating humanoids !", "There was peace for 100 Years", "Eren , Mikasa and Armin ", "But one day !", "It was a 60 meters tall Tiatn!", "When he broke the wall", "Titans were around Eren's home", "The home was collapsed", "There was a Titan near from them", "The mother told them to run and save there lives", "But ofcourse Eren refused..", "One of the officers came and saved the kids ", "But , he couldn't save the mother..", "She was eaten by that Titan...", "Infront of her child Eren...", "Eren swore to wipe out every last Titan", "So Eren,Mikasa and Armin joined the Survey Corps"];
var tell2 = ["Surrounded by enormous Walls", "Referred to as TITANS ...", "  ", "Have always dreamed to see what behind the Walls ", "Giant Titan broked the Wall ...", "  ", "he allowed the other Titans to enter the city", "Where his mom is there ...", "and hos mother was stucked..", " ", " ", " ", " ", " ", " ", " ", " ", "To kill all the TITANS .."];
backgroundAudio.setAttribute('src', 'audio/Attack on Titan You See Big GIRL.mp3');

console.log(story.length);
console.log(tell1.length);
console.log(tell2.length);
var i = 0;
$(".next").on('click', function (params) {
    if (i != story.length - 1) {
        i++;
        //console.log("nxtif");
    }
    else i = 0;
    $('#immg').attr("src", "image/background/story/" + story[i]);
    $('#tell1').text(tell1[i]);
    $('#tell2').text(tell2[i]);
    $(".numbertext").text(i + 1 + "/18");
    // console.log("nxt");

});
$(".prev").on('click', function (params) {
    console.log(i);
    if (i != 0) {
        i--;
        //console.log("preif");
    }
    else i = story.length - 1;
    $('#immg').attr("src", "image/background/story/" + story[i]);
    $('#tell1').text(tell1[i]);
    $('#tell2').text(tell2[i]);
    $(".numbertext").text(i + 1 + "/18");
    //console.log("pre");
});
