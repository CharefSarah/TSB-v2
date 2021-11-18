   // Tableau avec tout les button .lvlBtn ( tous sauf les niveaux spé normalement ).
   var Button = document.querySelectorAll('.lvlBtn');
   // Definition du 1er niveau max, sinon on peut rien lancer ce serait quand meme dommage.
   var maxLvl = 1;

   window.onload = function () {
       // On charge les "cookies" pour le lvl et le lvl max, pour charger le bon niveau et limiter au niveau déja fait.
       LLSlvl = parseInt(localStorage.getItem("level"));
       LSMaxLvl = parseInt(localStorage.getItem("maxLevel"));
   };

   window.onload = function () {
       // Pour chaque bouton .lvlButton, on prend l'attribut "level" et on l'enregistre pour charger le bon niveau via le script.
       // Si c'est un niveau superieur au dernier niveau qu'on a fait on augmente "maxLvl" histoire de débloquer celui d'aprés.
       // SI y'as un truc pas clair, t'hesites pas surtout, c'est pas forcément bien expliquer je le crains ^^ 
       Button.forEach((item, index) => {
           lvlButton = parseInt(item.getAttribute("level"));
           maxLvl = parseInt(localStorage.getItem("maxLevel"));
           var activeOnHeroes = localStorage.getItem('pickedHero');

           if (lvlButton <= maxLvl + 1) {
               // Remplace "maxLvl + 1" par "30" ou plus si tu veux tester n'importe quel lvl.
               item.disabled = false;
           }

           //Boucle pour surligner le dernier lvl possible.
           for (let i = 0; i < Button.length; i++) {
               Button[i] = item.getAttribute('level');
               maximax = parseInt(localStorage.getItem('maxLevel')) + 1;
               if (Button[i].getAttribute('level') == maximax) {
                   Button[i].style.border = "1px solid red"
               }

           }

           if (activeOnHeroes == 'rodric') {
               rodBut.classList.add('selectHerosActive');
               xorBut.classList.remove('selectHerosActive');
               uriBut.classList.remove('selectHerosActive');
           } else if (activeOnHeroes == 'xorrun') {
               xorBut.classList.add('selectHerosActive');
               rodBut.classList.remove('selectHerosActive');
               uriBut.classList.remove('selectHerosActive');
           } else if (activeOnHeroes == 'urim') {
               uriBut.classList.add('selectHerosActive');
               rodBut.classList.remove('selectHerosActive');
               xorBut.classList.remove('selectHerosActive');
           } else {
               rodBut.classList.add('selectHerosActive');
               xorBut.classList.remove('selectHerosActive');
               uriBut.classList.remove('selectHerosActive');
           }
       });

       // Condition pour mettre la tete de notre perso dans le bouton
       var face = localStorage.getItem('imgPers');
       document.querySelector('.rodricButton img').src = face;
       // Empecher la selection des heros pas encore debloqué
       var maxLevel = localStorage.getItem('maxLevel');
       if (maxLevel < 10) {
           document.querySelector('.xorrunButton').disabled = true;
           document.querySelector('.xorrunButton').style.pointerEvents = 'none';
           document.querySelector('.urimButton').disabled = true;
           document.querySelector('.urimButton').style.pointerEvents = 'none';

       } else if (maxLevel < 20) {
           document.querySelector('.urimButton').disabled = true;
           document.querySelector('.urimButton').style.pointerEvents = 'none';
       } else {
           console.log("tatou")
       }
   };

   // Fonction pour verifier l'existence du 'cookie', sinon on en créé un avec une valeure 1. ca permettra de l'utiliser et de le modifier plus bas.
   function checkLocalStorage() {
       if (localStorage.getItem("maxLevel") === null) {
           localStorage.setItem("maxLevel", 1);
       } else {
           var maxLvl = localStorage.getItem('maxLevel');
           return maxLvl;
       }
   };


   Button.forEach((item, index) => {
       // ca c'est la fonction pour aller chercher le bon niveau du coup, au dessus c'etait uniquement pour autoriser et disabled les niveaux dont on a acces ou non.
       item.addEventListener('click', function () {
           var lvl = item.getAttribute('level');
           checkLocalStorage();
           var maxLvl = localStorage.getItem('maxLevel');
           var lvlINT = parseInt(lvl);
           var maxLvlINT = parseInt(maxLvl);

           localStorage.setItem("level", lvl);

           if (lvlINT >= maxLvlINT) {
               var bkbk = parseInt(localStorage.getItem('level'));
               localStorage.setItem("maxLevel", bkbk);
           } else {
               maxLvl = item.getAttribute('level');
           }

           // On fait disparaitre les fleches et on les empeche de revenir en bloquant le scroll.
           document.querySelector('.flecheG').style.display = "none";
           document.querySelector('.flecheD').style.display = "none";
           var x = window.scrollX;
           var y = window.scrollY;
           window.onscroll = function () {
               window.scrollTo(x, y);
           };

           // Transition ala pokemon
           var tl = gsap.timeline({
               repeat: 4
           });
           tl.to(".transi", {
               backgroundColor: '#689fff',
               duration: 0.4,
               display: 'block'
           });
           tl.to(".transi", {
               backgroundColor: '#1D0C41',
               duration: 0.4
           });

           setTimeout(function () {
               window.location.href = "game.html";
           }, 1800);

       })
   });


   // Fonction pour clear les saves, faudrat le mettre dans les options avec une confirmation je pense.
   // mais pour tester je l'ai mit a coté
   document.querySelector('.cheh').addEventListener('click', function () {
       window.localStorage.clear();
       window.location.href = "index.html";
       // Le clear refresh histoire d'eviter des soucis
   });

   // Redirection a faire pour les niveau speciaux, du coup j'ai juste mit le tiens pour l'instant
   document.getElementById('levelTest').addEventListener('click', function () {
       window.location.href = "testlevel.html";
   })
   // Redirection a faire pour les niveau speciaux, du coup j'ai juste mit le tiens pour l'instant
   document.getElementById('levelSpe2').addEventListener('click', function () {
       window.location.href = "lvlspe2.html";
   })

   rodBut = document.querySelector('.rodricButton');
   xorBut = document.querySelector('.xorrunButton');
   uriBut = document.querySelector('.urimButton');
   rodBut.addEventListener('click', function () {
       rodBut.classList.add('selectHerosActive');
       xorBut.classList.remove('selectHerosActive');
       uriBut.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'rodric');

   });
   xorBut.addEventListener('click', function () {
       xorBut.classList.add('selectHerosActive');
       rodBut.classList.remove('selectHerosActive');
       uriBut.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'xorrun');
   });
   uriBut.addEventListener('click', function () {
       uriBut.classList.add('selectHerosActive');
       rodBut.classList.remove('selectHerosActive');
       xorBut.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'urim');
   });


   //Display les fleches si y'as besoin uniquement
   window.onscroll = function () {
       if (document.querySelector('html').scrollLeft > 1000) {
           document.querySelector('.flecheG').style.display = "block";
       } else {
           document.querySelector('.flecheG').style.display = "none";
       }

       if (document.querySelector('html').scrollLeft > 2000) {
           document.querySelector('.flecheD').style.display = "none";
       } else {
           document.querySelector('.flecheD').style.display = "block";

       }
   };


   // Bouger la map en cliquant sur les fleches
   document.querySelector('.flecheD').onclick = function () {
       document.querySelector("html").scrollLeft += 1000;
   };

   document.querySelector('.flecheG').onclick = function () {
       document.querySelector("html").scrollLeft -= 1000;
   };

   document.querySelector('.flecheD').ontouch = function () {
       document.querySelector("html").scrollLeft += 1000;
   };

   document.querySelector('.flecheG').ontouch = function () {
       document.querySelector("html").scrollLeft -= 1000;
   };