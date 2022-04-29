   var Button = document.querySelectorAll('.lvlBtn');
   var Shops = document.querySelectorAll('.button_shop');
   var maxLvl = 1;

   rodric_button = document.querySelector('.rodricButton');
   xorrun_button = document.querySelector('.xorrunButton');
   urim_button = document.querySelector('.urimButton');

   window.onload = function () {
       Button.forEach((item, index) => {
           level_number = parseInt(item.getAttribute("level"));
           max_level = parseInt(localStorage.getItem("maxLevel"));
           var picked_hero = localStorage.getItem('pickedHero');

           if (level_number <= max_level + 1) {
               item.disabled = false;
           }

           for (let i = 0; i < Button.length; i++) {
               Button[i] = item.getAttribute('level');
               maximax = parseInt(localStorage.getItem('maxLevel')) + 1;
               if (Button[i].getAttribute('level') == maximax) {
                   Button[i].style.border = "1px solid red"
               }
           }

           if (picked_hero == 'rodric') {
               rodric_button.classList.add('selectHerosActive');
               xorrun_button.classList.remove('selectHerosActive');
               urim_button.classList.remove('selectHerosActive');
           } else if (picked_hero == 'xorrun') {
               xorrun_button.classList.add('selectHerosActive');
               rodric_button.classList.remove('selectHerosActive');
               urim_button.classList.remove('selectHerosActive');
           } else if (picked_hero == 'urim') {
               urim_button.classList.add('selectHerosActive');
               rodric_button.classList.remove('selectHerosActive');
               xorrun_button.classList.remove('selectHerosActive');
           } else {
               rodric_button.classList.add('selectHerosActive');
               xorrun_button.classList.remove('selectHerosActive');
               urim_button.classList.remove('selectHerosActive');
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

       if (localStorage.getItem('last_pirate_level') == '5') {
           window.localStorage.removeItem("on_pirate_quest");
           window.localStorage.removeItem("max_pirate_level");
           window.localStorage.removeItem("last_pirate_level");
           localStorage.setItem('pirate_done', "true")
           window.location.reload();
       }

       if (localStorage.getItem('on_pirate_quest')) {
           Button.forEach((item) => {

               item.disabled = true;
           })
       };

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

   /* -------------------------------------------------------------------------- */
   /*                                 Acces Shop                                 */
   /* -------------------------------------------------------------------------- */
   Shops.forEach((item) => {
       var shop_number = item.getAttribute('LevelSpe');
       let max_level = parseInt(localStorage.getItem("maxLevel"));

       if (max_level == 5) {
           if (shop_number == 'shop1') {
               item.disabled = false;
           }
       } else if (max_level == 10) {
           if (shop_number == 'shop2') {
               item.disabled = false;
           }
       } else if (max_level == 19) {
           if (shop_number == 'shop3') {
               item.disabled = false;
           }
       } else if (max_level == 24) {
           if (shop_number == 'shop4') {
               item.disabled = false;
           }
       } else if (max_level == 28) {
           if (shop_number == 'shop5') {
               item.disabled = false;
           }
       }

       item.addEventListener('click', function () {
           localStorage.setItem('shop_visited', this.getAttribute('LevelSpe'));
           window.location.href = "shop.html";
       });
   });

   /* --------------------------------- pirates -------------------------------- */

   var pirates_level = document.querySelectorAll('.pirate_button');

   pirates_level.forEach((item) => {
       let max_level = parseInt(localStorage.getItem("maxLevel"));
       var pirate_level_number = item.getAttribute('levelPirate');

       if (max_level == 20) {
           if (pirate_level_number == 1) {
               item.disabled = false;
           }
       }

       if (localStorage.getItem('max_pirate_level') === null) {
           localStorage.setItem('max_pirate_level', 1);
       }

       let pirate_max_level = parseInt(localStorage.getItem('max_pirate_level'))

       if (pirate_level_number <= pirate_max_level) {
           item.disabled = false;
       }

       if (localStorage.getItem('pirate_done') == "true") {
           item.disabled = true;
       }

       item.addEventListener('click', function () {
           localStorage.setItem('last_pirate_level', pirate_level_number);
           localStorage.setItem('on_pirate_quest', 'true');
           let pirate_max_level = parseInt(localStorage.getItem('max_pirate_level'));

           if (parseInt(this.getAttribute('levelPirate')) >= pirate_max_level) {
               pirate_max_level++;
               localStorage.setItem('max_pirate_level', pirate_max_level);
           }
           window.location.href = "game.html";

       });
   })



   /* -------------------------------------------------------------------------- */
   /*                               Acces Mini Jeux                              */
   /* -------------------------------------------------------------------------- */
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



   /* -------------------------------------------------------------------------- */
   /*                               Selection Heros                              */
   /* -------------------------------------------------------------------------- */
   rodric_button.addEventListener('click', function () {
       rodric_button.classList.add('selectHerosActive');
       xorrun_button.classList.remove('selectHerosActive');
       urim_button.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'rodric');

   });
   xorrun_button.addEventListener('click', function () {
       xorrun_button.classList.add('selectHerosActive');
       rodric_button.classList.remove('selectHerosActive');
       urim_button.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'xorrun');
   });
   urim_button.addEventListener('click', function () {
       urim_button.classList.add('selectHerosActive');
       rodric_button.classList.remove('selectHerosActive');
       xorrun_button.classList.remove('selectHerosActive');
       localStorage.setItem('pickedHero', 'urim');
   });



   /* -------------------------------------------------------------------------- */
   /*                                   Fleche                                   */
   /* -------------------------------------------------------------------------- */

   // Affichage des fleches
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

   // Navigation avec fleche
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