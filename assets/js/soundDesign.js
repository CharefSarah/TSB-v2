function play22() {
  var audio1 = new Audio("assets/Sound/swordsmall.wav");
  audio1.play();
}

function play23() {
  var audio2 = new Audio("assets/Sound/orcPain.wav");
  audio2.play();
}

function playshield() {
  var audioshield = new Audio("assets/Sound/shield.wav");
  audioshield.play();
}

function playP() {
  var audioP = new Audio("assets/Sound/potion.mp3");
  audioP.play();
}

function playHL() {
  var audioHL = new Audio("assets/Sound/heartLoss.ogg");
  audioHL.play();
}

function playHG() {
  var audioHG = new Audio("assets/Sound/heartGain.wav");
  audioHG.play();
}

function playLu() {
  var audioLu = new Audio("assets/Sound/levelUp.ogg");
  audioLu.play();
}


//musiques
// 
var audioHompage = new Audio("assets/music/adventure.mp3");
var audioNiveau1track = new Audio("assets/music/level1.mp3");
var audioNiveau2track = new Audio("assets/music/forest.mp3");
var audioNiveau9track = new Audio("assets/music/bar.mp3");
//bruits
// 
var audioNiveau1bg = new Audio("assets/music/rural1.mp3");
var audioNiveau2bg = new Audio("assets/Sound/mysound.mp3");
var audioNiveau6bg = new Audio("assets/sound/stream.wav");
var audioNiveau7bg = new Audio("assets/Sound/forest.wav");
var audioNiveau8bg = new Audio("assets/Sound/rain.wav");
var audioNiveau9bg = new Audio("assets/Sound/tavern.wav");
//fonctions
//

function audiooo(audio) {
  audio.loop = true;
  audio.play();
}

function pauseAudio(audio) {
  audio.loop = true;
  audio.pause();
}