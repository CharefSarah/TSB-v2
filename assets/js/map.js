   var Button = document.querySelectorAll('.lvlBtn');
   var maxLvl = 1;

   window.onload = function () {
       LLSlvl = parseInt(localStorage.getItem("level"));
       LSMaxLvl = parseInt(localStorage.getItem("maxLevel"));
   };

   window.onload = function () {
       Button.forEach((item, index) => {
           lvlButton = parseInt(item.getAttribute("level"));
           maxLvl = parseInt(localStorage.getItem("maxLevel"));
           var activeOnHeroes = localStorage.getItem('pickedHero');

           if (lvlButton <= maxLvl + 1) {
               item.disabled = false;
           }

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

       var face = localStorage.getItem('imgPers');
       document.querySelector('.rodricButton img').src = face;
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

   function checkLocalStorage() {
       if (localStorage.getItem("maxLevel") === null) {
           localStorage.setItem("maxLevel", 1);
       } else {
           var maxLvl = localStorage.getItem('maxLevel');
           return maxLvl;
       }
   };


   Button.forEach((item, index) => {
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

           document.querySelector('.flecheG').style.display = "none";
           document.querySelector('.flecheD').style.display = "none";
           var x = window.scrollX;
           var y = window.scrollY;
           window.onscroll = function () {
               window.scrollTo(x, y);
           };

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

   //Function Redirection SHOP
   document.querySelector('.shop1').addEventListener('click', function () {
       window.location.href = "shop.html";
   });

   document.querySelector('.shop2').addEventListener('click', function () {
       window.location.href = "shop.html";
   });

   document.querySelector('.shop3').addEventListener('click', function () {
       window.location.href = "shop.html";
   });

   document.querySelector('.shop4').addEventListener('click', function () {
       window.location.href = "shop.html";
   });



   document.querySelector('.cheh').addEventListener('click', function () {
       window.localStorage.clear();
       window.location.href = "index.html";
   });

   document.getElementById('levelTest').addEventListener('click', function () {
       window.location.href = "testlevel.html";
   })

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