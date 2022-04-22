

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

// function pauseAudio(audio) {
//   audio.loop = true;
//   audio.pause();
// }

$('.SFX_volume').mouseup(function () {
  sound_effect_audio.volume = (this.value) / 100;
  console.log(sound_effect_audio.volume);
});
$('.music_volume').mouseup(function () {
  music_audio.volume = (this.value) / 100;
  console.log(music_audio.volume);
});