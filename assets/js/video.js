window.addEventListener("load", function () {
  document.getElementById("iframe").pause();
});

document.querySelector('.launchButton').addEventListener('click', function () {
  event.preventDefault();
  var iframe = document.querySelector('#iframe');
  document.getElementById("header").style.display = 'none';
  iframe.style.display = "block";
  iframe.play();
  setTimeout(function () {
    window.location.href = "game.html";
  }, 5500);
});


document.querySelector('.launchButton2').addEventListener('click', function () {
  event.preventDefault();
  var iframe = document.querySelector('#iframe');
  document.getElementById("header").style.display = 'none';
  iframe.style.display = "block";
  iframe.play();
  setTimeout(function () {
    window.location.href = "game.html";
  }, 5500);
});