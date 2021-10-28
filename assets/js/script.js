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

// /* ---- Fonction pour gerer les deux panneau avec les selections de perso --- */
// window.onload = function () {
//   d1.style.display = "none";
//   d2.style.display = "none";
// }

// function togg() {
//   if (getComputedStyle(d2).display != "none") {
//     d2.style.display = "none";
//   } else {
//     d2.style.display = "flex"
//   }
// };

// function togg1() {
//   if (getComputedStyle(d1).display != "none") {
//     d1.style.display = "none";
//   } else {
//     d1.style.display = "block";
//   }
// };
// // Disparition des boutons de choix
// function ButtonDisappear() {
//   document.getElementById("knight").style.display = "none";
//   document.getElementById("mage").style.display = "none";
//   document.getElementById("rogue").style.display = "none";
// }


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
var life = 3;
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
  this.scaledHP = health + (healthPerLevel * maxLvl);
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
  document.getElementById("heroImg").src = hero.imagePath;
  health.setAttribute("value", hero.scaledHP);
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

function CreateBadGuy() {
  if (round == 1) {
    var badGuy = new BadGuy("Loup", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 2) {
    var badGuy = new BadGuy("Loup2", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 3) {
    var badGuy = new BadGuy("Loup3", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 4) {
    var badGuy = new BadGuy("Loup4", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 5) {
    var badGuy = new BadGuy("Loup5", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 6) {
    var badGuy = new BadGuy("Loup6", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 7) {
    var badGuy = new BadGuy("Loup7", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 8) {
    var badGuy = new BadGuy("Loup8", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 9) {
    var badGuy = new BadGuy("Loup9", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 10) {
    var badGuy = new BadGuy("Xonoth1", 750, 750, 30, 32, 12, 12, "none", "none", "assets/img/wolf.png", 'bruit.mp3');
  } else if (round == 11) {
    var badGuy = new BadGuy("Loup11", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 12) {
    var badGuy = new BadGuy("Loup12", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 13) {
    var badGuy = new BadGuy("Loup13", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png", 'bruit.mp3');
  } else if (round == 14) {
    var badGuy = new BadGuy("Loup14", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png", 'bruit.mp3');
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

/* -------------------------------------------------------------------------- */
/*                   Switch case des abysses pour les levels                  */
/* -------------------------------------------------------------------------- */
function ModalProgress() {
  round = parseInt(round);
  switch (round) {
    case 1:
      document.body.style.backgroundImage = "url(assets/img/level1.jpg)";
      audiooo(audioNiveau1track);
      audiooo(audioNiveau1bg);
      break;
    case 2:
      document.body.style.backgroundImage = "url(assets/img/level2.jpg)";
      audiooo(audioNiveau1track);
      audiooo(audioNiveau2bg);
      break;
    case 3:
      document.body.style.backgroundImage = "url(assets/img/level3.jpg)"
      break;
    case 4:
      audiooo(audioNiveau1track);
      document.body.style.backgroundImage = "url(assets/img/level4.jpg)"
      break;
    case 5:
      document.body.style.backgroundImage = "url(assets/img/level5.jpg)"
      break;
    case 6:
      document.body.style.backgroundImage = "url(assets/img/level6.jpg)"
      pauseAudio(audioNiveau1track);
      pauseAudio(audioNiveau2bg);
      audiooo(audioNiveau2track);
      audiooo(audioNiveau6bg);
      break;
    case 7:
      document.body.style.backgroundImage = "url(assets/img/level7.jpg)"
      pauseAudio(audioNiveau6bg);
      audiooo(audioNiveau7bg);
      break;
    case 8:
      document.body.style.backgroundImage = "url(assets/img/level8.jpg)"
      pauseAudio(audioNiveau7bg);
      audiooo(audioNiveau8bg);
      break;
    case 9:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      pauseAudio(audioNiveau8bg);
      audiooo(audioNiveau9bg);
      pauseAudio(audioNiveau2track);
      audiooo(audioNiveau9track);
      break;
    case 10:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 11:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 12:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 13:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 14:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 15:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 16:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 17:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 18:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
      break;
    case 19:
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
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
      document.body.style.backgroundImage = "url(assets/img/level9.jpg)"
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
  }
}

// function checkLocalStorage(toCheck, cookieName) {
//   if (localStorage.getItem(toCheck) === null) {
//     localStorage.setItem(toCheck, cookieName);
//   } else {
//     var vavar = localStorage.getItem(toCheck);
//     return vavar;
//   }
// };

/* -------------------------------------------------------------------------- */
/*                         CHOIX DU PERSOS ET ATTRIBUTION                     */
/* -------------------------------------------------------------------------- */
// Chargement du persos, faudra faire une cnodition selon le perso choisi via la map je pense
window.onload = function () {
  var pickedHero = localStorage.getItem('pickedHero');
  if (pickedHero == 'rodric') {
    hero = new Hero('Rodric', 1, 200, 200, 25, 0, 100, 10, 2, 'assets/img/group.png', rodricAttacks, 35, 45, 11, 'gourdin', 5, 'none', 'none', 'linear-gradient(to right, #174ceb 0%, #00c3ff 70%)', '0 5px 150px 0 #00c3ff, 0 5px 25px 0 #00c3ff;', 'bruit.mp3');
  } else if (pickedHero == 'urim') {
    hero = new Hero('Urim', 1, 180, 180, 20, 0, 100, 20, 2.5, '', urimAttacks, 42, 48, 14, 'couteau de cuisine', 7, 'none', 'none', 'linear-gradient(to right, #27c7e3 0%, #24ffbd 70%)', '0 5px 150px 0 #27c7e3, 0 5px 25px 0 #24ffbd', 'bruit.mp3');
  } else if (pickedHero == 'xorrun') {
    hero = new Hero('Xorrun', 1, 155, 155, 17, 0, 100, 10, 1.7, 'assets/img/xorrun.png', xorrunAttacks, 48, 58, 15, 'Baton', 8, 'none', 'none', 'linear-gradient(to right, #8414c9 0%, #ff17f7 70%)', '0 5px 150px 0 #ff17f7, 0 5px 25px 0 #ff17f7;', 'bruit.mp3');
  }
  SetHeroValue();
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
  if (hero.scaledHealth = 0) {
    life = life - 1;
    playHL();
    displayLife();
    hero.scaledHP = hero.scaledMaxHP;
    document.getElementById("heroHealth").innerHTML = maxHp;
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
    round++; // round
    localStorage.setItem("level", round);
    playLu();
    blubluname = hero.name;
    console.log(blubluname);
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
      // Enemy is dead
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                                   Potion                                   */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", function () {
  document.getElementById("stockPotion").innerHTML = stockPotion;
});

document.getElementById("potion").addEventListener("click", function () {
  var hp = scalingHP();
  var maxHp = scalingMaxHP();
  if (stockPotion > 0) {
    heroHealthToGet = hp + 49;
    if (hp < hero.maxHealth && heroHealthToGet < hero.maxHealth) {
      hp = hp + 50;
      stockPotion--;
      document.getElementById("heroHealth").innerHTML = hp;
      document.getElementById("stockPotion").innerHTML = stockPotion;
      MoveAllyHealthBar();
    } else {}
  } else {}
});

function addPotion() {
  potionToAdd = Math.floor(Math.random() * 2) + 1;
  stockPotion = stockPotion + potionToAdd;
  document.getElementById("stockPotion").innerHTML = stockPotion;
  return stockPotion;
}

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
