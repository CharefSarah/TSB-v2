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
var audioHompage = new Audio("assets/music/adventure.mp3");
var audioNiveau1track = new Audio("assets/music/level1.mp3");
var audioNiveau2track = new Audio("assets/music/forest.mp3");
var audioNiveau4track = new Audio("assets/music/music/begining.mp3");
var audioNiveau5track = new Audio("assets/music/music/level1.mp3");
var audioNiveau9track = new Audio("assets/music/bar.mp3");

//bruits
var audioNiveau1bg = new Audio("assets/music/rural1.mp3");
var audioNiveau2bg = new Audio("assets/Sound/level2bg.wav");
var audioNiveau4bg = new Audio("assets/sound/wellwater.mp3");
var audioNiveau3bg = new Audio("assets/Sound/grillon.wav")
var audioNiveau6bg = new Audio("assets/sound/stream.wav");
var audioNiveau7bg = new Audio("assets/Sound/forest.wav");
var audioNiveau8bg = new Audio("assets/Sound/rain.wav");
var audioNiveau9bg = new Audio("assets/Sound/tavern.wav");


let music_audio = document.querySelector('#music_audio');
let sound_effect_audio = document.querySelector('#sound_effect_audio');
let sound_effect_audio_2 = document.querySelector('#sound_effect_audio_2');
let sound_effect_audio_3 = document.querySelector('#sound_effect_audio_3');
let sound_effect_audio_4 = document.querySelector('#sound_effect_audio_4');


// Fonctions
function audiooo(audio_path) {
  music_audio.loop = true;
  music_audio.src = audio_path
  music_audio.play();
};

function audiooo_effect(audio_path) {
  sound_effect_audio.loop = true;
  sound_effect_audio.src = audio_path
  sound_effect_audio.play();
};

function audiooo_effect_2(audio_path) {
  sound_effect_audio.loop = true;
  sound_effect_audio.src = audio_path
  sound_effect_audio.play();
};

function audiooo_effect_3(audio_path) {
  sound_effect_audio.loop = true;
  sound_effect_audio.src = audio_path
  sound_effect_audio.play();
};

function audiooo_effect_4(audio_path) {
  sound_effect_audio.loop = true;
  sound_effect_audio.src = audio_path
  sound_effect_audio.play();
};

// Volume
$('.SFX_volume').mouseup(function () {
  sound_effect_audio.volume = (this.value) / 100;
  sound_effect_audio_2.volume = (this.value) / 100;
  sound_effect_audio_3.volume = (this.value) / 100;
  sound_effect_audio_4.volume = (this.value) / 100;
  console.log(sound_effect_audio.volume);
});

$('.music_volume').mouseup(function () {
  music_audio.volume = (this.value) / 100;
  console.log(music_audio.volume);
});