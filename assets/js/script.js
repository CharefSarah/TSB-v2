/* 
SOMMAIRE 
#L.21 - Masquer le body pendant la selection
#L.65 - Grosses variables
#L.77 - Construct Hero
#L.127 - Construct Mechant
#L.161 - combat Text
#L.199 - myriade de modals
#L.571 - Choix perso 
#L.622 - Life
#L.678 - Attaques
#L.706 - Fin du jeux
#L.769 - Critiques et Attaques
#L.825 - Trigger de tout sur l'attaque
#L.887 - Potion
#L.962 - SIdebar
#L.986 - ++++++++++++
*/
/* -------------------------------------------------------------------------- */
/*                               Masquer le Body                              */
/* -------------------------------------------------------------------------- */
window.onload = function () {
  d1.style.display = "none";
  d2.style.display = "none";
}

function togg() {
  if (getComputedStyle(d2).display != "none") {
    d2.style.display = "none";
  } else {
    d2.style.display = "flex"
  }
};

function togg1() {
  if (getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
};

// fait disparaitre le choix du héro une fois qu'il a était choisi
function ButtonDisappear() {
  document.getElementById("knight").style.display = "none";
  document.getElementById("mage").style.display = "none";
  document.getElementById("rogue").style.display = "none";
}
// affiche les valeurs du héro
function SetHeroValue() {
  document.getElementById("heroName").innerHTML = hero.name;
  document.getElementById("basicAttackName").innerHTML = hero.attacksTab[0][0];
  document.getElementById("bigAttackName").innerHTML = hero.attacksTab[1][0];
  document.getElementById("ultimateAttackName").innerHTML = hero.attacksTab[2][0];
  document.getElementById("heroHealth").innerHTML = hero.health;
  document.getElementById("heroImg").src = hero.imagePath;
  health.setAttribute("value", hero.health);
  health.setAttribute("max", hero.maxHealth);
}




/* -------------------------------------------------------------------------- */
/*                            Les grosses variables                           */
/* -------------------------------------------------------------------------- */
function levelToGet() {
  var levelToGet = localStorage.getItem("level");
  return levelToGet;
}
var round = levelToGet();
document.getElementById("round").innerHTML = round;

var life = 3;
var coin = 150;
var stockPotion = 3;



/* -------------------------------------------------------------------------- */
/*                                  CONSTRUCT                                 */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Construct Hero  ----------------------------- */
function Hero(name, level, health, maxHealth, healthPerLevel, mana, maxMana, criticChance, criticMultiplier, imagePath, attacksTab, baseDamageMin, baseDamageMax, damagePerLevel, equippedWeapon, weaponValue, resistance, faiblesse) {
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

/* ------------------------------- Objet Hero ------------------------------- */
var rodric = new Hero('Rodric', 1, 200, 200, 25, 0, 100, 10, 2, 'assets/img/Group.png', rodricAttacks, 35, 45, 11, 'gourdin', 5, 'none', 'none');
var urim = new Hero('Urim', 1, 180, 180, 20, 0, 100, 20, 2.5, '', urimAttacks, 42, 48, 14, 'couteau de cuisine', 7, 'none', 'none');
var xorrun = new Hero('Xorrun', 1, 155, 155, 17, 0, 100, 10, 1.7, 'assets/img/xorrun.png', xorrunAttacks, 48, 58, 15, 'Baton', 8, 'none', 'none');







/* -------------------------------------------------------------------------- */
/*                              CONSTRUCT MECHANT                             */
/* -------------------------------------------------------------------------- */
function BadGuy(name, health, maxHealth, criticChance, criticMultiplier, baseDamageMin, baseDamageMax, resistance, faiblesse, imagePath) {
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
}

//Creation du méchant selon le nombre de round: 
//Creation du méchant selon le nombre de round: 
function CreateBadGuy() {
  if (round == 1) {
    var badGuy = new BadGuy("Loup", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png");
  } else if (round == 2) {
    var badGuy = new BadGuy("Loup2", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png");
  } else if (round == 3) {
    var badGuy = new BadGuy("Loup3", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png");
  } else if (round == 4) {
    var badGuy = new BadGuy("Loup4", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png");
  } else if (round == 5) {
    var badGuy = new BadGuy("Loup5", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png");
  } else if (round == 6) {
    var badGuy = new BadGuy("Loup6", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png");
  } else if (round == 7) {
    var badGuy = new BadGuy("Loup7", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 8) {
    var badGuy = new BadGuy("Loup8", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 9) {
    var badGuy = new BadGuy("Loup9", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 10) {
    var badGuy = new BadGuy("Xonoth1", 750, 750, 30, 32, "none", "none", "assets/img/wolf.png");
  } else if (round == 11) {
    var badGuy = new BadGuy("Loup11", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png");
  } else if (round == 12) {
    var badGuy = new BadGuy("Loup12", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png");
  } else if (round == 13) {
    var badGuy = new BadGuy("Loup13", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png");
  } else if (round == 14) {
    var badGuy = new BadGuy("Loup14", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png");
  } else if (round == 15) {
    var badGuy = new BadGuy("Loup15", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png");
  } else if (round == 16) {
    var badGuy = new BadGuy("Loup16", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/buttonu.png");
  } else if (round == 17) {
    var badGuy = new BadGuy("Loup17", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 18) {
    var badGuy = new BadGuy("Loup18", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 19) {
    var badGuy = new BadGuy("Loup19", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 20) {
    var badGuy = new BadGuy("Xonoth2", 750, 750, 30, 32, "none", "none", "assets/img/wolf.png");
  } else if (round == 21) {
    var badGuy = new BadGuy("Loup21", 100, 100, 4, 1.2, 15, 22, "", "", "assets/img/wolfs.png");
  } else if (round == 22) {
    var badGuy = new BadGuy("Loup22", 125, 125, 4, 1.2, 17, 25, "", "", "assets/img/wolfs.png");
  } else if (round == 23) {
    var badGuy = new BadGuy("Loup23", 140, 140, 4, 1.2, 19, 26, "", "", "assets/img/wolfs.png");
  } else if (round == 24) {
    var badGuy = new BadGuy("Loup24", 150, 150, 4, 1.2, 20, 30, "", "", "assets/img/wolfs.png");
  } else if (round == 25) {
    var badGuy = new BadGuy("Loup25", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/wolfs.png");
  } else if (round == 26) {
    var badGuy = new BadGuy("Loup26", 155, 164, 5, 1.2, 22, 31, "", "", "assets/img/buttonu.png");
  } else if (round == 27) {
    var badGuy = new BadGuy("Loup27", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 28) {
    var badGuy = new BadGuy("Loup28", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 29) {
    var badGuy = new BadGuy("Loup29", 100, 100, 100, 100, 100, 100, "", "", "assets/img/wolfs.png");
  } else if (round == 30) {
    var badGuy = new BadGuy("Xonoth3", 750, 750, 30, 32, 12, 12, "none", "none", "assets/img/wolf.png");
  }
  return badGuy
}


/* -------------------------------------------------------------------------- */
/*                         Textes pendant les combats                         */
/* -------------------------------------------------------------------------- */
var CombatTextEnnemy = document.querySelector('.combatTextEnnemy');
var combatTextHero = document.querySelector('.combatTextHero');

/* ------------------------------ Ennemy + crit ----------------------------- */
function EnnemyTextDisplay(message) {
  CombatTextEnnemy.innerHTML = message;
  if (Crit()) {
    CombatTextEnnemy.classList.toggle('combatTextAnimation');
    setTimeout(function () {
      CombatTextEnnemy.classList.toggle('combatTextAnimation');
    }, 2100);
    CombatTextEnnemy.style.fontSize = '64px';
  } else {
    CombatTextEnnemy.classList.toggle('combatTextAnimation');
    setTimeout(function () {
      CombatTextEnnemy.classList.toggle('combatTextAnimation');
    }, 2100);
    CombatTextEnnemy.style.fontSize = '36px';

  }
}

/* ---------------------------------- Hero ---------------------------------- */
function HeroTextDisplay(message) {
  combatTextHero.innerHTML = message;
  combatTextHero.classList.toggle('combatHeroAnimation');
  setTimeout(function () {
    combatTextHero.classList.toggle('combatHeroAnimation');
  }, 1100);
}


/* -------------------------------------------------------------------------- */
/*                                    MODAL                                   */
/* -------------------------------------------------------------------------- */

function ModalProgress() {
  round = parseInt(round);

  // J'ai remplacé les 31 if par un switch case.
  // si tu te souviens pas " Switch (variable qu'on va check)"
  // et chaque "case" c'est un if qui verifie que la varialbe est egale ou pas a ce qu'on a mit aprés "case" 
  // "case 1" par exemple c'est comme " if(round==1){...}"
  switch (round) {
    case 1:
      document.body.style.backgroundImage = "url(assets/img/level1.jpg)";
      audiooo(audioNiveau1track);
      audiooo(audioNiveau1bg);
      break;
    case 2:
      document.body.style.backgroundImage = "url(assets/img/level2.jpg)";
      pauseAudio(audioNiveau1bg);
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


/* -------------------------------------------------------------------------- */
/*                         CHOIX DU PERSOS ET ATTRIBUTION                     */
/* -------------------------------------------------------------------------- */
// Selection de tout les boutons de choix de classes
var classSelectArray = document.querySelectorAll('.classSelect');
// choix de classe selon le bouton : 
var hero = classSelectArray.forEach(element => {
  element.addEventListener('click', function CreateHero() {
    if (element.id == "knight") {
      hero = rodric;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      togg();
      togg1();
      ModalProgress();

      return hero;


    } else if (element.id == "mage") {
      hero = xorrun;
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      togg();
      togg1();
      ModalProgress();

      return hero;


    } else if (element.id == "rogue") {
      hero = urim;
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      togg();
      togg1();
      ModalProgress();

      return hero;

    }
  });
});


/* -------------------------------------------------------------------------- */
/*                                    Life                                    */
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
  if (hero.health <= 0) {
    life = life - 1;
    playHL();
    displayLife();
    hero.health = hero.maxHealth;
    document.getElementById("heroHealth").innerHTML = hero.health;

  }
}

/* --------------------------- Les jauges -------------------------- */
var health = document.getElementById("healthBar");
var badGuyHealth = document.getElementById("badguyHealthBar");


function MoveAllyHealthBar() {
  health.setAttribute("value", hero.health);
  var percentHealth = (hero.health / hero.maxHealth) * 100;
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

/* ---------------------------------- MANA ---------------------------------- */
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


/* ----------------------------- DISPLAY MECHANT ---------------------------- */
function DisplayBadGuy() {
  document.getElementById("badGuyName").innerHTML = badGuy.name;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  badGuyHealth.value = badGuy.health;
  badGuyHealth.setAttribute("value", badGuy.health);
  badGuyHealth.setAttribute("max", badGuy.health);
  document.getElementById("badguyImg").src = badGuy.imagePath;
}

window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  DisplayBadGuy();
});

function DeathEnemy() {
  if (badGuy.health <= 0) {
    round++; // round
    localStorage.setItem("level", round);
    playLu();
    setTimeout(function () {
      window.location.href = "map.html"
    }, 1200);
  }
}

/* -------------------------------------------------------------------------- */
/*                            CRITIQUES ET ATTAQUES                           */
/* -------------------------------------------------------------------------- */

function Crit() {
  critRate = hero.criticChance;
  crit = Math.floor(Math.random() * 100) + 1;
  if (crit <= critRate) {
    return true;
  } else {
    return false;
  }

}

function AttackDamage(attackRatio) {
  var ratio = attackRatio;
  var multiplier = hero.criticMultiplier;
  var max = hero.baseDamageMax + hero.weaponValue;
  var min = hero.baseDamageMin + hero.weaponValue;
  var damage = Math.floor(Math.random() * (max - min + 1) + min);
  attackDamage = Math.floor(damage * ratio);
  if (Crit()) {
    attackDamage = attackDamage * multiplier;
  }
  return attackDamage;
}

function Dodge() {
  dodge = Math.floor(Math.random() * 100) + 1;
  if (dodge <= 10) {
    ennemyDamage = 0;
  } else {
    ennemyDamage = badGuy.attack;
  }
}

function EnnemyAttackDamage() {
  var min = badGuy.baseDamageMin;
  var max = badGuy.baseDamageMax;
  var ennemyAttackDamage = Math.floor(Math.random() * (max - min + 1) + min);
  return ennemyAttackDamage;
}


/* -------------------------------------------------------------------------- */
/*                TRIGGER SUR ATTAQUES DE TOUTES LES FONCTIONS                */
/* -------------------------------------------------------------------------- */

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = AttackDamage(hero.attacksTab[0][1]);
  setTimeout(play22, 500);
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  var ennemyDamage = EnnemyAttackDamage();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  GainMana();
  checkMana();
  MoveEnnemyHealthBar();
  setTimeout(play23, 1500);
  setTimeout(MoveAllyHealthBar, 300);
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
    hero.health = hero.health - ennemyDamage;
    document.getElementById("heroHealth").innerHTML = hero.health;
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
    hero.health = hero.health - ennemyDamage;
    document.getElementById("heroHealth").innerHTML = hero.health;
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



/* ----------------------------- Contre Attaque ----------------------------- */
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
// Initialisation du nombre de potion au chargement
window.addEventListener("load", function () {
  document.getElementById("stockPotion").innerHTML = stockPotion;
});

// Function pour utiliser des potions tant qu'il en reste
document.getElementById("potion").addEventListener("click", function () {
  if (stockPotion > 0) {
    heroHealthToGet = hero.health + 49;
    if (hero.health < hero.maxHealth && heroHealthToGet < hero.maxHealth) {
      hero.health = hero.health + 50;
      stockPotion--;
      document.getElementById("heroHealth").innerHTML = hero.health;
      document.getElementById("stockPotion").innerHTML = stockPotion;
      MoveAllyHealthBar();
    } else {}
  } else {}
});

// Ajout d'un nombre de potion entre 1 et 3.
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