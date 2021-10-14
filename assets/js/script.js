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
#L.939 - Disable button 
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
    d2.style.display = "flex";
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
  document.getElementById("heroHealth").innerHTML = hero.health;
  document.getElementById("heroImg").src = hero.imagePath;
  health.setAttribute("value", hero.health);
  health.setAttribute("max", hero.maxHealth);
}




/* -------------------------------------------------------------------------- */
/*                            Les grosses variables                           */
/* -------------------------------------------------------------------------- */

var round = 1;
document.getElementById("round").innerHTML = round;

var life = 3;

var stockPotion = 3;


/* -------------------------------------------------------------------------- */
/*                                  CONSTRUCT                                 */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Construct Hero  ----------------------------- */
function Hero(name, level, health, maxHealth, healthPerLevel, mana, maxMana, criticChance, criticMultiplier, imagePath, attacksTab, baseDamage, damagePerLevel, equippedWeapon, weaponValue, resistance, faiblesse) {
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
  this.baseDamage = baseDamage;
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
var rodric = new Hero('Rodric', 1, 200, 200, 25, 100, 100, 10, 2, 'assets/img/Group.png', rodricAttacks, 40, 11, 'gourdin', 5, 'none', 'none');
var urim = new Hero('Urim', 1, 180, 180, 20, 100, 100, 20, 2.5, '', urimAttacks, 45, 14, 'couteau de cuisine', 7, 'none', 'none');
var xorrun = new Hero('Xorrun', 1, 155, 155, 17, 100, 100, 10, 1.7, 'assets/img/xorrun.png', xorrunAttacks, 50, 15, 'Baton', 8, 'none', 'none');




/* -------------------------------------------------------------------------- */
/*                              CONSTRUCT MECHANT                             */
/* -------------------------------------------------------------------------- */
function BadGuy(name, health, maxHealth, defence, attack, weakness, resistance, image) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
  this.image = image;
}

//Creation du méchant selon le nombre de round: 
function CreateBadGuy() {
  if (round == 30) {
    var badGuy = new BadGuy("Void", 1300, 1300, 30, 40, "none", "sword", "assets/img/darkknight.png");
  } else if (round == 20) {
    var badGuy = new BadGuy("Ekrid", 850, 850, 30, 50, "none", "none", "assets/img/spider.png");
  } else if (round == 10) {
    var badGuy = new BadGuy("Xonoth", 750, 750, 30, 32, "none", "none", "assets/img/wolf.png");
  } else if (round == 1 || round == 2 || round == 3 || round == 4 || round == 5 || round == 6 || round == 7 || round == 8 || round == 9) {
    var badGuy = new BadGuy("Loup", 300, 300, 10, 30, "all", "none", "assets/img/wolfs.png");
  } else if (round == 11 || round == 12 || round == 13 || round == 14 || round == 15 || round == 16 || round == 17 || round == 18 || round == 19) {
    var badGuy = new BadGuy("Araignée", 400, 400, 10, 30, "all", "none", "assets/img/spider1.png");
  } else {
    var badGuy = new BadGuy("Mort-vivant", 450, 450, 10, 30, "all", "none", "assets/img/skull.png");

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
  console.log(message)
  if (Crit()) {
    console.log('CRIT');
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
  console.log(message)
  combatTextHero.innerHTML = message;
  combatTextHero.classList.toggle('combatHeroAnimation');
  setTimeout(function () {
    combatTextHero.classList.toggle('combatHeroAnimation');
  }, 1100);
}


/* -------------------------------------------------------------------------- */
/*                                    MODAL                                   */
/* -------------------------------------------------------------------------- */

function ModalDeathHero() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalDeathHero").style.display = "block";
}
document.getElementById("dismissDeathHero").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalDeathHero").style.display = "none";
});

function ModalDeathEnnemy() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalDeathEnnemy").style.display = "block";
}
document.getElementById("dismissDeathEnnemy").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalDeathEnnemy").style.display = "none";
});


function ModalProgress() {
  if (round == 1) {
    document.body.style.backgroundImage = "url(assets/img/level1.jpg)";
    audiooo(audioNiveau1track);
    audiooo(audioNiveau1bg);

  }

  if (round == 2) {
    document.body.style.backgroundImage = "url(assets/img/level2.jpg)";
    pauseAudio(audioNiveau1bg);
    audiooo(audioNiveau2bg);
    document.getElementById("modalProgressTitle").innerHTML = "A L'AVENTURE !";
    document.getElementById("modalProgressText").innerHTML = "Votre périple commence depuis Myrefall, occupé par les forces de Void les shield-bearers décident de le libérer ! <br>Attaquez les orques qui vous assiègent";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 3) {
    document.body.style.backgroundImage = "url(assets/img/level3.jpg)";
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE ! ";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu les orques qui occupaient Myrefall ! <br>A peine la bataille terminée vous entendez au loin les renfort de Xonoth arrivés !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 4) {
    document.body.style.backgroundImage = "url(assets/img/level4.jpg)";
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Vous avez repoussé les renforts orques et vous remarquez que leurs traces remontent jusqu'au marais, sur la route vous croisez une seconde vague.";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 5) {
    document.body.style.backgroundImage = "url(assets/img/level5.jpg)";
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Encore d'autres orques vaincus ! Après cette récente bataille vous arrivez enfin aux abords des marais bordant Myrefall... <br>Ils grouillent d'orques !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";

  }
  if (round == 6) {
    document.body.style.backgroundImage = "url(assets/img/level6.jpg)";
    pauseAudio(audioNiveau1track);
    pauseAudio(audioNiveau2bg);
    audiooo(audioNiveau2track);
    audiooo(audioNiveau6bg);
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Vous et vos compagnons Shield-bearers vous enfoncez dans les marais, les orques vous encerclent, la bataille sera dure, mais vous entendez déjà au loin les rugissements de Xonoth";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 7) {
    document.body.style.backgroundImage = "url(assets/img/level7.jpg)";
    pauseAudio(audioNiveau6bg);
    audiooo(audioNiveau7bg);
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Orque après orque vous vous approchez de leur chef";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 8) {
    document.body.style.backgroundImage = "url(assets/img/level8.jpg)";
    pauseAudio(audioNiveau7bg);
    audiooo(audioNiveau8bg);
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Après d'autres combats le chemin se dégage, Vous voyez la sortie des marais... Une forêt de laquelle sort les cris de Xonoth !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 9) {
    document.body.style.backgroundImage = "url(assets/img/level9.jpg)";
    pauseAudio(audioNiveau8bg);
    audiooo(audioNiveau9bg);
    pauseAudio(audioNiveau2track);
    audiooo(audioNiveau9track);
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "La sortie est proche, Xonoth envoie ses dernières troupes alors qu'il attend patiemment dans la forêt.";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 10) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ !";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu les derniers orques des forces de Xonoth, à son tour maintenant !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 11) {
    document.getElementById("modalProgressTitle").innerHTML = "BRAVO";
    document.getElementById("modalProgressText").innerHTML = "Après un difficile combat, les Shield-bearers ont vaincu Xonoth! <br> Sur son corps vous trouvez les ordres que Void lui a donné et vous décidez de remonter la piste.";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 12) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Grace aux ordres trouvés sur Xonoth vous décidez d'aller jusqu'au château du lac d'argent au nord d'ici. Mais vous devez d'abord sortir de la forêt dans laquelle, en l'absence des orques, les araignées ont repris leurs droits...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 13) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous continuez votre chemin dans la funeste forêt, mais mefiez vous... Dans les branches au-dessus vous entendez les cliquetis caracteristiques des pattes d'araignées...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 14) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous arrivez bientôt près d'un point d'eau, encore quelques métres et vous pourrez enfin vous reposer... ATTENTION!";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 15) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "La nuit tombe quand vous arrivez prés de l'étang, vous y trouvez un marchand qui vous explique que l'invasion d'araignées vient du château proche d'ici où leur reine a élu domicile. En bon Shield-bearers vous décidez de libérer la région de cette menace.";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 16) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Le nombre d'araignées grandit à mesure que vous approchez de leur tanniére. <br>Tenez bon !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 17) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Entre quelques combats vous trouvez le temps de vous reposer, mais les araignées, elles, ne connaissent pas la fatigue...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 18) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Au loin se dessine la silhouette du château occupé par la reine araignée ! Continuez comme ça Shield-bearers !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 19) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu presque toutes les araignées autour du chateau, La porte est ouverte et vous entendez leur reine, Ekrid, à l'interieur. <br> A l'attaque !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 20) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous arrivez enfin devant Ekrid. Débarrassez la région de ce fléau !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 21) {
    document.getElementById("modalProgressTitle").innerHTML = "BRAVO";
    document.getElementById("modalProgressText").innerHTML = "La perfide araignée a été tué. Vous avez sauvé la région d'un funeste destin. Vous decouvrez dans le chateau la preuve qu'elle avait été envoyé par Void lui-même ainsi que l'endroit ou il se terre. En route pour son donjon!";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 22) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous partez du chateau d'Ekrid en direction de Void mais il est déjà au courant de votre venue... Il a lui meme envoyé son armée de mort-vivants vous arrêtez";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 23) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Les premiers mort-vivants vaincus, vous vous rendez compte qu'arriver jusqu'au château de Void ne sera pas une mince affaire. <br> Tenez bon Shield-bearers !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 24) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous y etes presque ! Les rangs des mort-vivants s'amenuisent tandis que vous avancez en direction des terres de Void.";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 25) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous voilà arrivé dans les terribles terres de Void, au loin son chateau domine tout son royaume. C'est la derniére ligne droite pour vous !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 26) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous grimpez les escarpements autour du château, toujours assailli par les mort-vivants que Void ne cesse d'envoyer... Mais vous avancez !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 27) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Presque ! Vous sentez déjà le soufre se dégager de l'antre de Void tandis que les derniers mort-vivants vous barrent encore la route. <br> Liberer le monde de son joug ! Foncez !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 28) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Les portes de son château n'ont jamais été aussi proches... Bon courage aventurier !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 29) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Se dresse devant vous les derniers mort-vivants de l'armée de Void, une formalité avant le combat final...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 30) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUÉ";
    document.getElementById("modalProgressText").innerHTML = "Vous voilà nez à nez avec le mal incarné, sauvez Myrefall et le reste du monde de son emprise ! ";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if (round == 31) {
    document.getElementById("modalProgressTitle").innerHTML = "VICTOIRE";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu le terrible Void ! Les shield-bearers ont libérer le monde de la domination des forces du mal.<br> Une fois trépassé vous découvrez la source de son pouvoir, la flamme magique d'Ardath, elle est à vous désormais...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src = "assets/img/badge2.png";
    document.getElementById("modalProgressBadge3").src = "assets/img/badge3.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }

}
document.getElementById("dismissModalProgress").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalProgress").style.display = "none";
});




function ModalVictory() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalVictory").style.display = "block";


}
document.getElementById("dismissModalVictory").addEventListener("click", function () {
  document.getElementById("modalVictory").style.display = "none";
  document.location.reload();
})


function ModalGameOver() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalGameOver").style.display = "block";
}
document.getElementById("dismissModalGameOver").addEventListener("click", function () {
  document.getElementById("modalGameOver").style.display = "none";
  document.location.reload();
})

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
      console.log(hero);
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


/* -------------------------------------------------------------------------- */
/*                                   Attacks                                  */
/* -------------------------------------------------------------------------- */

// nombres d'attaques
var basicAttack = 30;
document.getElementById("basicAttack").innerHTML = basicAttack;

function LostBasicAttack() {
  basicAttack = basicAttack - 1;
  document.getElementById("basicAttack").innerHTML = basicAttack;
  if (basicAttack == 0) {
    document.getElementById("baseAttack").disabled = "true";
  }
}
// Nombre de grosses attaques
var bigAttack = 10;
document.getElementById("bigAttack").innerHTML = bigAttack;

function LostBigAttack() {
  bigAttack = bigAttack - 1;
  document.getElementById("bigAttack").innerHTML = bigAttack;
  if (bigAttack == 0) {
    document.getElementById("heavyAttack").disabled = "true";
  }
}

/* -------------------------------------------------------------------------- */
/*                                 Fin du jeu                                 */
/* -------------------------------------------------------------------------- */

// Game over plus refresh de la page
function winner() {
  if (round == 31) {
    ModalVictory();
  }
}
// Game over plus refresh de la page
function EndGame() {
  if (life == 0) {
    ModalGameOver();
  }
}

// mort du héro
function DeathHero() {
  if (hero.health <= 0) {
    ModalDeathHero();
  }
}

/* ----------------------------- DISPLAY MECHANT ---------------------------- */
function DisplayBadGuy() {
  document.getElementById("badGuyName").innerHTML = badGuy.name;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  badGuyHealth.value = badGuy.health;
  badGuyHealth.setAttribute("value", badGuy.health);
  badGuyHealth.setAttribute("max", badGuy.health);
  document.getElementById("badguyImg").src = badGuy.image;
}

// création du méchant
window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  DisplayBadGuy();
});


// mort du méchant
function DeathEnemy() {
  if (badGuy.health <= 0) {
    round++;
    playLu()
    document.getElementById("round").innerHTML = round;
    badGuy = CreateBadGuy();
    badGuy.health = badGuy.maxHealth
    DisplayBadGuy();
    addLife();
    addPotion();
    basicAttack = 30;
    document.getElementById("basicAttack").innerHTML = basicAttack;
    document.getElementById("baseAttack").disabled = false;
    bigAttack = 10;
    document.getElementById("bigAttack").innerHTML = bigAttack;
    document.getElementById("heavyAttack").disabled = false;
    ModalProgress();

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
//Petit Steak
function BaseAttackDamage() {
  ratio = hero.attacksTab[0][1];
  multiplier = hero.criticMultiplier;
  attackDamage = hero.baseDamage * ratio;
  if (Crit()) {
    attackDamage = attackDamage * multiplier;
  }
  return attackDamage;
}

//Gros Steak
function HeavyAttackDamage() {
  ratio = hero.attacksTab[1][1]
  multiplier = hero.criticMultiplier;
  console.log(multiplier)
  attackDamage = hero.baseDamage * ratio;
  if (Crit()) {
    attackDamage = attackDamage * multiplier;
  }
  return attackDamage;
}

//Chance d'esquive, 10%
function Dodge() {
  dodge = Math.floor(Math.random() * 100) + 1;
  if (dodge <= 10) {
    ennemyDamage = 0;
  } else {
    ennemyDamage = badGuy.attack;
  }
}

//Fonction pour faire bouger les jauges

function disable() {
  document.getElementById("baseAttack").disabled = true;
  setTimeout(function () {
    document.getElementById("baseAttack").disabled = false;
  }, 1500);
}

/* -------------------------------------------------------------------------- */
/*                TRIGGER SUR ATTAQUES DE TOUTES LES FONCTIONS                */
/* -------------------------------------------------------------------------- */

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  setTimeout(play22, 500);
  setTimeout(disable);
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBasicAttack();
  MoveEnnemyHealthBar();
  setTimeout(play23, 1500);
  setTimeout(MoveAllyHealthBar, 300);
  DeathHero();
  LostLife();
  EndGame();
  DeathEnemy();
  winner();
  EnnemyTextDisplay(damage);
  setTimeout(function () {
    HeroTextDisplay(ennemyDamage);
  }, 1100)
});


document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  damage = HeavyAttackDamage();
  playshield();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBigAttack();
  MoveEnnemyHealthBar();
  setTimeout(MoveAllyHealthBar, 300);
  EndGame();
  LostLife();
  DeathHero();
  DeathEnemy();
  winner();
  EnnemyTextDisplay(damage);
  setTimeout(function () {
    HeroTextDisplay(ennemyDamage);
  }, 1100)
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
/*                               Disable Button                               */
/* -------------------------------------------------------------------------- */
var smallAttack = document.querySelector('.button1');
var mediumAttack = document.querySelector('.button2');
var bigAttack = document.querySelector('.button3');
var potion = document.querySelector('.button4');

function DisableButton() {
  smallAttack.disabled = true;
  mediumAttack.disabled = true;
  bigAttack.disabled = true;
  potion.disabled = true;
  setTimeout(function () {
    smallAttack.disabled = false;
    mediumAttack.disabled = false;
    bigAttack.disabled = false;
    potion.disabled = false;
  }, 1100)
}



/* -------------------------------------------------------------------------- */
/*                                   Sidebar                                  */
/* -------------------------------------------------------------------------- */
//SideBar
var side = document.querySelector('.side');
//settings
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



/* -------------------------------------------------------------------------- */
/*                             LES NOUVEAUX TRUCS                             */
/* -------------------------------------------------------------------------- */