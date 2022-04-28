/* -------------------------------------------------------------------------- */
/*                                  SOMMAIRE                                  */
/* -------------------------------------------------------------------------- */
/*
CTRL+G pour aller directement a une ligne :)

L.30 - Fonction pour gerer les panneaux et les selections.
L.60 - Recuperation du niveau depuis la Map
L.79 - Construct Gentils
L.155 - Construct Mechant
L.239 - Text Combat
L.261 - les LEGVEEEELS
L.381 - Choix Persos
L.422 - Lifes
L.461 - Jauges
L.515 - Combat
L.675 - Potions
L.725 - Sidebar

*/
/* -------------------------------------------------------------------------- */
/*                              ----Sommaire----                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*         Fonction & variable pour recuperer le niveau cliqué sur MAP        */
/* -------------------------------------------------------------------------- */
function levelToGet() {
  var levelToGet = localStorage.getItem("level");
  return levelToGet;
}
var round = levelToGet();
document.getElementById("round").innerHTML = round;


/* -------------------------------------------------------------------------- */
/*                               Variable Utile                               */
/* -------------------------------------------------------------------------- */
var life = 2;
var coin = 150;
var stockPotion = 3;


/* -------------------------------------------------------------------------- */
/*                                  CONSTRUCT                                 */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Construct Hero  ----------------------------- */
function Hero(name, level, health, maxHealth, healthPerLevel, mana, maxMana, criticChance, criticMultiplier, imagePath, attacksTab, baseDamageMin, baseDamageMax, damagePerLevel, equippedWeapon, weaponValue, resistance, faiblesse, manaColor, boxShadow, bruitage) {
  var maxLvl = parseInt(localStorage.getItem("maxLevel"));
  this.name = name;
  this.level = level;
  this.health = health;
  this.maxHealth = maxHealth;
  this.hpPerLevel = healthPerLevel;
  // Fonction pour recuperer les pv actuels si y'en a, sinon on prend ceux de base
  var toGoGet = "currentHP" + name;

  if (localStorage.getItem(toGoGet) === null) {
    this.scaledHP = health + (healthPerLevel * maxLvl);
  } else {
    var hphp = parseInt(localStorage.getItem(toGoGet));
    this.scaledHP = hphp;
  }
  this.scaledMaxHP = health + (healthPerLevel * maxLvl);
  this.mana = mana;
  this.maxMana = maxMana;
  this.criticChance = criticChance;
  this.criticMultiplier = criticMultiplier;
  this.imagePath = imagePath;
  this.attacksTab = attacksTab;
  this.baseDamageMin = baseDamageMin;
  this.baseDamageMax = baseDamageMax;
  this.scaledDamageMin = baseDamageMin + (damagePerLevel * maxLvl);
  this.scaledDamageMax = baseDamageMax + (damagePerLevel * maxLvl);
  this.damagePerLevel = damagePerLevel;
  this.equippedWeapon = equippedWeapon;
  this.weaponValue = weaponValue;
  this.resistance = resistance;
  this.faiblesse = faiblesse;
  this.manaColor = manaColor;
  this.boxShadow = boxShadow;
  this.bruitage = bruitage;

}

/* ----------------------- Attaques des persos + ratio ---------------------- */
var rodricAttacks = [
  ["Estoc", 1],
  ["Coup de bouclier", 1.8],
  ["Assaut féroce", 3]
];
var urimAttacks = [
  ["Surinage", 1],
  ["Coup bas", 2],
  ["Assassinat", 3.5]
]
var xorrunAttacks = [
  ["Éclair", 0.8],
  ['Boule de feu', 2.6],
  ['Mega Glace', 4]
]

// affiche les valeurs du héro
function SetHeroValue() {

  document.getElementById("heroName").innerHTML = hero.name;
  document.getElementById("basicAttackName").innerHTML = hero.attacksTab[0][0];
  document.getElementById("bigAttackName").innerHTML = hero.attacksTab[1][0];
  document.getElementById("ultimateAttackName").innerHTML = hero.attacksTab[2][0];
  document.getElementById("heroHealth").innerHTML = hero.scaledHP;
  document.getElementById("max_health_display").innerHTML = " / " + hero.scaledMaxHP;
  health.setAttribute("value", hero.scaledHP);
  document.getElementById("heroImg").src = hero.imagePath;
  health.setAttribute("max", hero.scaledMaxHP);
}

//Couleurs Mana
function colorMana() {
  document.querySelector('.manaBar').style.cssText = "background :" + hero.manaColor + "; box-shadow:" + hero.boxShadow + ";";
}

/* -------------------------------------------------------------------------- */
/*                              CONSTRUCT MECHANT                             */
/* -------------------------------------------------------------------------- */
function BadGuy(name, health, maxHealth, criticChance, criticMultiplier, baseDamageMin, baseDamageMax, resistance, faiblesse, imagePath, bruitage) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.criticChance = criticChance;
  this.criticMultiplier = criticMultiplier;
  this.baseDamageMin = baseDamageMin;
  this.baseDamageMax = baseDamageMax;
  this.resistance = resistance;
  this.faiblesse = faiblesse;
  this.imagePath = imagePath;
  this.bruitage = bruitage
}
/* -------------------------------------------------------------------------- */
/*                              CONSTRUCT SHOP                                */
/* -------------------------------------------------------------------------- */
function Items(name, type, price, stock, used, stat, docket, imagePath, bruitage) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.stock = stock;
  this.used = used;
  this.stat = stat;
  this.docket = docket;
  this.imagePath = imagePath;
  this.bruitage = bruitage
}
/* -------------------------------------------------------------------------- */
/*                              CONSTRUCT INVENTORY                           */
/* -------------------------------------------------------------------------- */
function Inventory(name, type, stock, used, stat, docket, imagePath, bruitage) {
  this.name = name;
  this.type = type;
  this.stock = stock;
  this.used = used;
  this.stat = stat;
  this.docket = docket;
  this.imagePath = imagePath;
  this.bruitage = bruitage
}

function CreateBadGuy() {
  if (round == 1) {
    var badGuy = new BadGuy("Loup", 400, 400, 4, 1.2, 16, 23, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 2) {
    var badGuy = new BadGuy("Loup", 430, 430, 4, 1.2, 20, 28, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 3) {
    var badGuy = new BadGuy("Loup", 475, 475, 4, 1.2, 27, 34, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 4) {
    var badGuy = new BadGuy("Loup", 480, 480, 4, 1.2, 34, 38, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 5) {
    var badGuy = new BadGuy("Loup", 510, 510, 5, 1.2, 40, 46, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 6) {
    var badGuy = new BadGuy("Loup", 540, 540, 5, 1.2, 46, 51, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 7) {
    var badGuy = new BadGuy("Loup", 570, 570, 5, 1.2, 53, 59, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 8) {
    var badGuy = new BadGuy("Loup", 610, 610, 5, 1.2, 56, 64, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 9) {
    var badGuy = new BadGuy("Loup", 640, 640, 5, 1.2, 67, 72, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 10) {
    var badGuy = new BadGuy("Xonoth1", 750, 750, 30, 32, 12, 12, "none", "none", "assets/img/wolf.png", 'bruit.mp3');
  } else if (round == 11) {
    var badGuy = new BadGuy("Loup11", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 12) {
    var badGuy = new BadGuy("Loup12", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 13) {
    var badGuy = new BadGuy("Loup13", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 14) {
    var badGuy = new BadGuy("Loup14", 2500, 2500, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 15) {
    var badGuy = new BadGuy("Loup15", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 16) {
    var badGuy = new BadGuy("Loup16", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/buttonu.png", 'bruit.mp3');
  } else if (round == 17) {
    var badGuy = new BadGuy("Loup17", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 18) {
    var badGuy = new BadGuy("Loup18", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 19) {
    var badGuy = new BadGuy("Loup19", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 20) {
    var badGuy = new BadGuy("Xonoth2", 750, 750, 30, 32, 12, 12, "none", "none", "assets/img/wolf.png", 'bruit.mp3');
  } else if (round == 21) {
    var badGuy = new BadGuy("Loup21", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 22) {
    var badGuy = new BadGuy("Loup22", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 23) {
    var badGuy = new BadGuy("Loup23", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 24) {
    var badGuy = new BadGuy("Loup24", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 25) {
    var badGuy = new BadGuy("Loup25", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 26) {
    var badGuy = new BadGuy("Loup26", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/buttonu.png", 'bruit.mp3');
  } else if (round == 27) {
    var badGuy = new BadGuy("Loup27", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 28) {
    var badGuy = new BadGuy("Loup28", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 29) {
    var badGuy = new BadGuy("Loup29", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 30) {
    var badGuy = new BadGuy("Xonoth3", 750, 750, 30, 32, 12, 12, "none", "none", "assets/img/wolf.png", 'bruit.mp3');
  } else {
    var badGuy = new BadGuy("Loup", 400, 400, 4, 1.2, 25, 32, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  }
  return badGuy
}


/* -------------------------------------------------------------------------- */
/*                                 Text combat                                */
/* -------------------------------------------------------------------------- */
var CombatTextEnnemy = document.querySelector('.combatTextEnnemy');
var combatTextHero = document.querySelector('.combatTextHero');

function EnnemyTextDisplay(message) {
  CombatTextEnnemy.innerHTML = message;
  CombatTextEnnemy.classList.toggle('combatTextAnimation');
  setTimeout(function () {
    CombatTextEnnemy.classList.toggle('combatTextAnimation');
  }, 2100);
}

function HeroTextDisplay(message) {
  combatTextHero.innerHTML = message;
  combatTextHero.classList.toggle('combatHeroAnimation');
  setTimeout(function () {
    combatTextHero.classList.toggle('combatHeroAnimation');
  }, 1100);
}


function cinematic_and_redirection() {
  // On prend le niveau actuel, on le converti ( DAMN YOU STRING )
  var level = parseInt(localStorage.getItem("level"));
  // On l'incremente pour aprés
  var next_level = level + 1;
  // On attribue le nouveau level au localStorage.
  localStorage.setItem("level", next_level);
  // On actualise et on passe a level+1
  window.location.reload();
}

/* -------------------------------------------------------------------------- */
/*                   Switch case des abysses pour les levels                  */
/* -------------------------------------------------------------------------- */
function ModalProgress() {
  round = parseInt(round);
  switch (round) {
    case 1:
      document.body.style.backgroundImage = "url(assets/img/level_background/level1.jpg)";
      $(".dustyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/level1.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/music/rural1.mp3");
      sound_effect_audio.volume = 0.5;
      audiooo_effect_3("assets/Sound/chicken.wav");
      sound_effect_audio_3.volume = 0.3;

      break;
    case 2:
      document.body.style.backgroundImage = "url(assets/img/level_background/level2.jpg)";
      audiooo("assets/music/music/alexander-nakarada-fairy-of-the-forest.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/music/rural1.mp3");
      sound_effect_audio.volume = 0.3;
      audiooo_effect_2("assets/Sound/windmill.wav");
      sound_effect_audio_2.volume = 0.5;
      break;
    case 3:
      document.body.style.backgroundImage = "url(assets/img//level_background/level3.jpg)";
      audiooo("assets/music/forest.mp3");
      music_audio.volume = 0.4;
      audiooo_effect("assets/Sound/field.wav");
      sound_effect_audio.volume = 0.2;
      audiooo_effect_3("assets/Sound/wellwater.mp3");
      sound_effect_audio_3.volume = 0.5;

      break;
    case 4:
      document.body.style.backgroundImage = "url(assets/img/level_background/level4.jpg)"
      audiooo("assets/music/music/level4.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/field.wav");
      sound_effect_audio.volume = 0.5;

      break;
    case 5:
      document.body.style.backgroundImage = "url(assets/img//level_background/level5.jpg)"
      audiooo("assets/music/music/alexander-nakarada-village-ambiance.mp3");
      music_audio.volume = 0.6;
      audiooo_effect("assets/Sound/town.wav");
      sound_effect_audio.volume = 0.4;
      audiooo_effect_2("assets/music/rural1.mp3");
      sound_effect_audio_2.volume = 0.2;
      break;
    case 6:
      document.body.style.backgroundImage = "url(assets/img/level_background/level6.jpg)"
      audiooo("assets/music/adventure.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.2;
      audiooo_effect_2("assets/Sound/stream.wav");
      sound_effect_audio_2.volume = 0.1;

      break;
    case 7:
      document.body.style.backgroundImage = "url(assets/img/level_background/level7.jpg)"
      audiooo("assets/music/music/alexander-nakarada-planning.mp3");
      music_audio.volume = 0.4;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.2;
      audiooo_effect_2("assets/Sound/stream.wav");
      sound_effect_audio_2.volume = 0.1;
      break;
    case 8:
      document.body.style.backgroundImage = "url(assets/img/level_background/level8.jpg)"
      audiooo("assets/music/music/alexander-nakarada-now-we-ride.mp3");
      music_audio.volume = 0.7;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.3;
      audiooo_effect_2("assets/Sound/wind.mp3");
      sound_effect_audio_2.volume = 1;
      audiooo_effect_3("assets/Sound/stream.wav");
      sound_effect_audio_3.volume = 0.03;
      break;
    case 9:
      document.body.style.backgroundImage = "url(assets/img/level_background/level9.jpg)"
      $(".rainyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/10 11 god-rest-ye-merry-celtishmen.mp3");
      music_audio.volume = 0.3;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.2;
      audiooo_effect_2("assets/Sound/rain.wav");
      sound_effect_audio_2.volume = 0.2;
      console.log('duuuuu' + sound_effect_audio_2.volume)

      break;
    case 10:
      document.body.style.backgroundImage = "url(assets/img/level_background/level10.jpg)"
      $(".rainyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-wintersong.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/stream.wav");
      sound_effect_audio.volume = 0.2;
      audiooo_effect_2("assets/Sound/rain.wav");
      sound_effect_audio_2.volume = 0.3;
      audiooo_effect_3("assets/Sound/owl.wav");
      sound_effect_audio_3.volume = 0.5;
      audiooo_effect_4("assets/Sound/thunder.wav");
      sound_effect_audio_4.volume = 0.7;
      break;
    case 11:
      document.body.style.backgroundImage = "url(assets/img/level_background/level11.jpg)"
      audiooo("assets/music/music/alexander-nakarada-celtic-ambiance.mp3");
      music_audio.volume = 0.2;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.3;
      audiooo_effect_2("assets/Sound/nightinsect.wav");
      sound_effect_audio_2.volume = 0.2;
      audiooo_effect_3("assets/Sound/owl.wav");
      sound_effect_audio_3.volume = 0.2;
      audiooo_effect_4("assets/Sound/campfire.m4a");
      sound_effect_audio_4.volume = 0.3;

      break;
    case 12:
      document.body.style.backgroundImage = "url(assets/img/level_background/level12.jpg)"
      audiooo("assets/music/music/alexander-nakarada-crescendo.mp3");
      music_audio.volume = 0.8;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.3;
      audiooo_effect_2("assets/Sound/wind.mp3");
      sound_effect_audio_2.volume = 0.8;
      audiooo_effect_3("assets/Sound/owl.wav");
      sound_effect_audio_3.volume = 0.2;
      audiooo_effect_4("assets/Sound/nightinsect.wav");
      sound_effect_audio_4.volume = 0.2;
      // Affichage de la video
      //document.querySelector('#cinematic').style.display = 'block';
      // On la demarre 2s aprés, c'etait surtout pour evité que ca rame.
      // setTimeout(function () {
      //  document.querySelector('#cinematic').play();
      //  }, 2000);
      // EventListener pour detecter la fin de la vidéo, la fonction est l.257. Une fois fini, on lance la redirection.
      // document.querySelector('#cinematic').addEventListener('ended', cinematic_and_redirection, false);
      break;
    case 13:
      document.body.style.backgroundImage = "url(assets/img/level_background/level13.jpg)"
      audiooo("assets/music/music/alexander-nakarada-enchanted-forest.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.3;
      audiooo_effect_2("assets/Sound/nightinsect.wav");
      sound_effect_audio_2.volume = 0.2;
      audiooo_effect_3("assets/Sound/owl.wav");
      sound_effect_audio_3.volume = 0.2;
      audiooo_effect_4("assets/Sound/swamp.wav");
      sound_effect_audio_4.volume = 0.3;
  
    
      break;
    case 14:
      document.body.style.backgroundImage = "url(assets/img/level_background/level14.jpg)"
      audiooo("assets/music/music/alexander-nakarada-enchanted-forest.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.7;
      audiooo_effect_2("assets/Sound/nightinsect.wav");
      sound_effect_audio_2.volume = 0.5;
      audiooo_effect_3("assets/Sound/owl.wav");
      sound_effect_audio_3.volume = 0.5;
      audiooo_effect_4("assets/Sound/swamp.wav");
      sound_effect_audio_4.volume = 0.4;
      audiooo_effect_5("assets/Sound/stream.wav");
      sound_effect_audio_5.volume = 0.3;
      break;
    case 15:
      document.body.style.backgroundImage = "url(assets/img/level_background/level15.jpg)"
      $(".mistyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-village-ambiance.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.8;
      audiooo_effect_3("assets/Sound/dove.wav");
      sound_effect_audio_3.volume = 0.2;
      audiooo_effect_6("assets/Sound/wind.mp3");
      sound_effect_audio_6.volume = 0.9;
      break;
    case 16:
      document.body.style.backgroundImage = "url(assets/img/level_background/level16.jpg)"
      $(".mistyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-planning.mp3");
      music_audio.volume = 0.3;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.7;
      audiooo_effect_3("assets/Sound/dove.wav");
      sound_effect_audio_3.volume = 0.08;
      audiooo_effect_6("assets/Sound/wind.mp3");
      sound_effect_audio_6.volume = 0.9;
      break;
    case 17:
      document.body.style.backgroundImage = "url(assets/img/level_background/level17.jpg)"
      $(".mistyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-now-we-ride.mp3");
      music_audio.volume = 0.5;
      audiooo_effect("assets/Sound/ambiantforest.wav");
      sound_effect_audio.volume = 0.4;
      audiooo_effect_3("assets/Sound/wellwater.mp3");
      sound_effect_audio_3.volume = 0.5;
      audiooo_effect_4("assets/Sound/seagull.wav");
      sound_effect_audio_6.volume = 1;
      audiooo_effect_6("assets/Sound/wind.mp3");
      sound_effect_audio_6.volume = 1;

      break;
    case 18:
      document.body.style.backgroundImage = "url(assets/img/level_background/level18.jpg)"
      $(".rainyday").removeClass("fxhide").addClass("fxshow");
      $(".mistyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-heartbeat.mp3");
      music_audio.volume = 0.5;
      audiooo_effect_2("assets/Sound/rain.wav");
      sound_effect_audio_2.volume = 0.3;
      audiooo_effect_4("assets/Sound/thunder.wav");
      sound_effect_audio_4.volume = 0.7;
      break;
    case 19:
      document.body.style.backgroundImage = "url(assets/img/level_background/3187.jpg)"
      break;
    case 20:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 21:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 22:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 23:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 24:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 25:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 26:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 27:
      document.body.style.backgroundImage = "url(assets/img/level_background/level27.jpg)"
      $(".dustyday").removeClass("fxhide").addClass("fxshow");
      audiooo("assets/music/music/alexander-nakarada-night-of-mystery.mp3");
      music_audio.volume = 0.5;
      audiooo_effect_4("assets/Sound/campfire.m4a");
      sound_effect_audio_4.volume = 0.1;
      audiooo_effect_5("assets/Sound/empty.mp3");
      sound_effect_audio_5.volume = 0.5;
      audiooo_effect_6("assets/Sound/wind.mp3");
      sound_effect_audio_6.volume = 1;
      
      break;

    case 28:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 29:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 30:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 31:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    default:
      document.body.style.backgroundImage = "url(assets/img/level1.jpg)"
      audiooo("assets/music/level1.mp3");
      audiooo_effect("assets/music/rural1.mp3");
      break;
  }
}

/* -------------------------------------------------------------------------- */
/*                         CHOIX DU PERSOS ET ATTRIBUTION                     */
/* -------------------------------------------------------------------------- */
// Chargement du persos, faudra faire une cnodition selon le perso choisi via la map je pense
window.onload = function () {
  if (localStorage.getItem('maxLevel') === null) {
    localStorage.setItem('maxLevel', 1);
  }
  var imageHero = localStorage.getItem('imgPers');
  var pickedHero = localStorage.getItem('pickedHero');


  if (pickedHero == 'rodric') {
    var namename = localStorage.getItem('nameHero');
    hero = new Hero(namename, 1, 200, 200, 25, 0, 100, 10, 2, imageHero, rodricAttacks, 45, 60, 13, 'gourdin', 5, 'none', 'none', 'linear-gradient(to right, #174ceb 0%, #00c3ff 70%)', '0 5px 150px 0 #00c3ff, 0 5px 25px 0 #00c3ff;', 'bruit.mp3');
  } else if (pickedHero == 'urim') {
    hero = new Hero('Urim', 1, 180, 180, 22, 0, 100, 20, 2.5, 'assets/img/urim.png', urimAttacks, 46, 54, 14, 'couteau de cuisine', 7, 'none', 'none', 'linear-gradient(to right, #27c7e3 0%, #24ffbd 70%)', '0 5px 150px 0 #27c7e3, 0 5px 25px 0 #24ffbd', 'bruit.mp3');
  } else if (pickedHero == 'xorrun') {
    hero = new Hero('Xorrun', 1, 155, 155, 19, 0, 100, 10, 1.7, 'assets/img/xorrun.png', xorrunAttacks, 48, 58, 15, 'Baton', 8, 'none', 'none', 'linear-gradient(to right, #8414c9 0%, #ff17f7 70%)', '0 5px 150px 0 #ff17f7, 0 5px 25px 0 #ff17f7;', 'bruit.mp3');
  } else {
    var namename = localStorage.getItem('nameHero');
    hero = new Hero(namename, 1, 200, 200, 25, 0, 100, 10, 2, imageHero, rodricAttacks, 35, 45, 11, 'gourdin', 5, 'none', 'none', 'linear-gradient(to right, #174ceb 0%, #00c3ff 70%)', '0 5px 150px 0 #00c3ff, 0 5px 25px 0 #00c3ff;', 'bruit.mp3');
  }

  SetHeroValue();
  MoveAllyHealthBar()
  displayLife();
  ModalProgress();
  colorMana();
  return hero;
}


/* -------------------------------------------------------------------------- */
/*                                    LIFES                                   */
/* -------------------------------------------------------------------------- */
function displayLife() {
  for (let i = 0; i < 9; i++) {
    var heart = "heart" + i;
    document.getElementById(heart).style.display = "none";
  }
  for (let i = 0; i < life; i++) {
    var heart = "heart" + i;
    document.getElementById(heart).style.display = "inline";
  }
}

function addLife() {
  if (round == 5 || round == 10 || round == 15 || round == 20 || round == 25 || round == 30) {
    life = life + 1;
    playHG();
    displayLife();
  }
}

// Compteur de vie
function LostLife() {
  if (hero.scaledHP <= 0) {
    life = life - 1;
    playHL();
    displayLife();
    hero.scaledHP = hero.scaledMaxHP;
    document.getElementById("heroHealth").innerHTML = hero.scaledMaxHP;
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Jauges                                   */
/* -------------------------------------------------------------------------- */
var health = document.getElementById("healthBar");
var badGuyHealth = document.getElementById("badguyHealthBar");

function MoveAllyHealthBar() {
  health.setAttribute("value", hero.scaledHP);
  var percentHealth = (hero.scaledHP / hero.scaledMaxHP) * 100;
  document.getElementById("bar").style.width = percentHealth + "%";
}

function MoveEnnemyHealthBar() {
  badGuyHealth.setAttribute("value", badGuy.health);
  var percentHealth = (badGuy.health / badGuy.maxHealth) * 100;
  if (badGuy.health <= 0) {
    percentHealth = 100;
  }
  document.getElementById("badguyBar").style.width = percentHealth + "%";
}

var heroMana = document.getElementById("heroManaBar");
var heroManaInside = document.getElementById("manaBar");

function MoveHeroManaBar() {
  heroMana.setAttribute("value", hero.mana);
  var percentMana = (hero.mana / hero.maxMana) * 100;
  heroManaInside.style.width = percentMana + "%";
}

function GainMana() {
  if (hero.mana >= 81) {
    hero.mana = 100;
  } else {
    hero.mana += 20;
  }
  var percentMana = (hero.mana / hero.maxMana) * 100;
  heroManaInside.style.width = percentMana + "%";
}

function loseMana(value) {
  hero.mana -= value;
  var percentMana = (hero.mana / hero.maxMana) * 100;
  heroManaInside.style.width = percentMana + "%";
}

function checkMana() {
  if (hero.mana >= 75) {
    document.getElementById("ultiAttack").disabled = false;
    document.getElementById("heavyAttack").disabled = false;
  } else if (hero.mana >= 25) {
    document.getElementById("ultiAttack").disabled = true;
    document.getElementById("heavyAttack").disabled = false;
  } else {
    document.getElementById("ultiAttack").disabled = true;
    document.getElementById("heavyAttack").disabled = true;
  }
}

/* -------------------------------------------------------------------------- */
/*                        Combat & fonction d'affichage                       */
/* -------------------------------------------------------------------------- */
//Affichage du méchant
function DisplayBadGuy() {
  document.getElementById("badGuyName").innerHTML = badGuy.name;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  document.getElementById("badguy_max_health_display").innerHTML = " / " + badGuy.maxHealth;
  badGuyHealth.value = badGuy.health;
  badGuyHealth.setAttribute("value", badGuy.health);
  badGuyHealth.setAttribute("max", badGuy.health);
  document.getElementById("badguyImg").src = badGuy.imagePath;
}

// Utilisation de l'affichage du méchant au chargement
window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  DisplayBadGuy();
});

// CHeck si l'ennemi est mort et redirection
function DeathEnemy() {
  if (badGuy.health <= 0) {
    document.getElementById('baseAttack').disabled = true;
    document.getElementById('heavyAttack').disabled = true;
    document.getElementById('ultiAttack').disabled = true;
    document.getElementById('potion').disabled = true;
    document.getElementById('badGuyHealth').innerHTML = "0";
    document.getElementById("badguyBar").style.width = 0 + "%";

    ToRegister = "currentHP" + hero.name;
    localStorage.setItem(ToRegister, hero.scaledHP)
    round++; // round
    localStorage.setItem("level", round);
    playLu();
    blubluname = hero.name;
    addPotion();
    localStorage.setItem(blubluname, JSON.stringify(hero)); //stringify object and store
    setTimeout(function () {
      window.location.href = "map.html"
    }, 1200);

  }
}

//Fonction pour calculer le taux de critique basé sur la chance de crit du perso
function Crit() {
  critRate = hero.criticChance;
  crit = Math.floor(Math.random() * 100) + 1;
  if (crit <= critRate) {
    return true;
  } else {
    return false;
  }

}

//Calcul dégat du persos
function AttackDamage(attackRatio) {
  var ratio = attackRatio;
  var multiplier = hero.criticMultiplier;
  var max = hero.scaledDamageMin + hero.weaponValue;
  var min = hero.scaledDamageMax + hero.weaponValue;
  var damage = Math.floor(Math.random() * (max - min + 1) + min);
  attackDamage = Math.floor(damage * ratio);
  if (Crit()) {
    attackDamage = attackDamage * multiplier;
  }
  return attackDamage;
}

//Chance d'esquive
function Dodge() {
  dodge = Math.floor(Math.random() * 100) + 1;
  if (dodge <= 10) {
    ennemyDamage = 0;
  } else {
    ennemyDamage = badGuy.attack;
  }
}

// Calcul des dégats de l'ennemi
function EnnemyAttackDamage() {
  var min = badGuy.baseDamageMin;
  var max = badGuy.baseDamageMax;
  var ennemyAttackDamage = Math.floor(Math.random() * (max - min + 1) + min);
  return ennemyAttackDamage;
}

/* -------------------------------------------------------------------------- */
/*             Gros trigger de tout ca pour chaque type d'attaque             */
/* -------------------------------------------------------------------------- */
document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  setTimeout(play22, 500);
  damage = AttackDamage(hero.attacksTab[0][1]);
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  var ennemyDamage = EnnemyAttackDamage();
  hero.scaledHP = hero.scaledHP - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.scaledHP;
  GainMana();
  checkMana();
  MoveEnnemyHealthBar();
  setTimeout(play23, 1500);
  setTimeout(MoveAllyHealthBar(), 300);
  LostLife();
  EnnemyTextDisplay(damage);
  DeathEnemy();
  setTimeout(function () {
    HeroTextDisplay(ennemyDamage);
  }, 1100)
});

document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  if (hero.mana >= 25) {
    damage = AttackDamage(hero.attacksTab[1][1]);
    playshield();
    badGuy.health = badGuy.health - damage;
    document.getElementById("badGuyHealth").innerHTML = badGuy.health;
    Dodge();
    var ennemyDamage = EnnemyAttackDamage();
    hero.scaledHP = hero.scaledHP - ennemyDamage;
    document.getElementById("heroHealth").innerHTML = hero.scaledHP;
    loseMana(25);
    checkMana();
    MoveEnnemyHealthBar();
    setTimeout(MoveAllyHealthBar, 300);
    LostLife();
    EnnemyTextDisplay(damage);
    DeathEnemy();
    setTimeout(function () {
      HeroTextDisplay(ennemyDamage);
    }, 1100)
  }
});

document.getElementById("ultiAttack").addEventListener("click", function UltimateAttack() {
  if (hero.mana >= 75) {
    damage = AttackDamage(hero.attacksTab[2][1]);
    playshield();
    badGuy.health = badGuy.health - damage;
    document.getElementById("badGuyHealth").innerHTML = badGuy.health;
    Dodge();
    var ennemyDamage = EnnemyAttackDamage();
    hero.scaledHP = hero.scaledHP - ennemyDamage;
    document.getElementById("heroHealth").innerHTML = hero.scaledHP;
    loseMana(75);
    checkMana();
    MoveEnnemyHealthBar();
    setTimeout(MoveAllyHealthBar, 300);
    LostLife();
    EnnemyTextDisplay(damage);
    DeathEnemy();
    setTimeout(function () {
      HeroTextDisplay(ennemyDamage);
    }, 1100)
  }
});


//Contre
function CunterAttack() {
  if (health = health - attackDamage) {
    attack = hero.health - attack;
    elseif(health <= 0); {
      // Enemy is dead lol 
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                                   Potion                                   */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", function () {
  if (localStorage.getItem('stockPotion') === null) {
    document.getElementById("stockPotion").innerHTML = stockPotion;
  } else {
    stockPotion = parseInt(localStorage.getItem('stockPotion'));
    document.getElementById("stockPotion").innerHTML = stockPotion;
  }
});

document.getElementById("potion").addEventListener("click", function () {
  if (stockPotion > 0) {
    heroHealthToGet = hero.scaledHP + 49;
    if (heroHealthToGet < hero.scaledMaxHP) {

      hero.scaledHP = hero.scaledHP + 50;
      stockPotion--;
      document.getElementById("heroHealth").innerHTML = hero.scaledHP;
      document.getElementById("stockPotion").innerHTML = stockPotion;
      MoveAllyHealthBar();
      potionTextDisplay('-1 Potion <img class="potIcoMessage" src="assets/img/potion.png">');


    } else {
      potionTextDisplay('Trop de PV');
    }

    if (stockPotion == 0) {
      document.querySelector('.popo').src = "assets/img/pot.png";
    }
  } else {
    potionTextDisplay('Vous n\'avez plus de potion');
  }
});

function addPotion() {
  potionToAdd = Math.floor(Math.random() * 3) + 1;
  stockPotion = stockPotion + potionToAdd;
  document.getElementById("stockPotion").innerHTML = stockPotion;
  localStorage.setItem("stockPotion", stockPotion);
  return stockPotion;
}


function potionTextDisplay(message) {
  potText = document.querySelector('.combatTextPotion');
  potText.innerHTML = message;
  potText.classList.toggle('combatTextAnimation');
  setTimeout(function () {
    potText.classList.toggle('combatTextAnimation');
  }, 2100);
}


/* ------------------------------- tremblement ------------------------------ */
$(document).ready(function () {
  $("#baseAttack").click(function () {
    $(".badguyImg").effect("shake", {
      times: 2
    }, 400);
    $(".heroImg").effect("shake", {
      times: 1
    }, 120);

  });
  $("#heavyAttack").click(function () {
    $(".badguyImg").effect("shake", {
      times: 3
    }, 300);
    $(".heroImg").effect("shake", {
      times: 1
    }, 260);

  });
});

/* -------------------------------------------------------------------------- */
/*                                   Sidebar                                  */
/* -------------------------------------------------------------------------- */

var side = document.querySelector('.side');

var settings = document.querySelector('.settings');
var settingsPanel = document.querySelector('.settingsPanel');
/* --------------------------------- sidebar -------------------------------- */

side.addEventListener('click', function () {
  side.classList.toggle('side-open');
  document.querySelector('main').classList.toggle('blurred');
});


var settings = document.querySelector('.settings');
var settingsPanel = document.querySelector('.settingsPanel');
settings.onclick = function () {
  settingsPanel.classList.toggle('settings-hidden');
}

function items(name, level, health, maxHealth, healthPerLevel, mana, maxMana, criticChance, criticMultiplier, imagePath, attacksTab, baseDamageMin, baseDamageMax, damagePerLevel, equippedWeapon, weaponValue, resistance, faiblesse, bruitage) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.maxHealth = maxHealth;
  this.healthPerLevel = healthPerLevel;
  this.mana = mana;
  this.maxMana = maxMana;
  this.criticChance = criticChance;
  this.criticMultiplier = criticMultiplier;
  this.imagePath = imagePath;
  this.attacksTab = attacksTab;
  this.baseDamageMin = baseDamageMin;
  this.baseDamageMax = baseDamageMax;
  this.damagePerLevel = damagePerLevel;
  this.equippedWeapon = equippedWeapon;
  this.weaponValue = weaponValue;
  this.resistance = resistance;
  this.faiblesse = faiblesse;
  this.bruitage = bruitage;
}