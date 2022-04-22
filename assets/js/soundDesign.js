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

//fonctions
function audiooo(audio_path) {
  music_audio.loop = true;
  music_audio.src = audio_path
  music_audio.play();
}

function audiooo_effect(audio_path) {
  sound_effect_audio.loop = true;
  sound_effect_audio.src = audio_path
  sound_effect_audio.play();
}





$('.SFX_volume').mouseup(function () {
  sound_effect_audio.volume = (this.value) / 100;
  console.log(sound_effect_audio.volume);
});
$('.music_volume').mouseup(function () {
  music_audio.volume = (this.value) / 100;
  console.log(music_audio.volume);
});