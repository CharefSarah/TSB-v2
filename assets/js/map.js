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
           if (lvlButton <= maxLvl +1) {
               // Remplace "maxLvl + 1" par "30" ou plus si tu veux tester n'importe quel lvl.
               item.disabled = false;
           }
       });
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
           console.log(maxLvlINT);

           localStorage.setItem("level", lvl);

           if (lvlINT >= maxLvlINT) {
               var bkbk = parseInt(localStorage.getItem('level'));
               localStorage.setItem("maxLevel", bkbk);
           } else {
               maxLvl = item.getAttribute('level');
           }

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