/* ----------------------- Variable pour les fonctions ---------------------- */
// CombatText 
var CombatTextEnnemy = document.querySelector('.combatTextEnnemy');
var combatTextHero = document.querySelector('.combatTextHero');
// Boutton Combat
var smallAttack = document.querySelector('.button1');
var mediumAttack = document.querySelector('.button2');
var bigAttack = document.querySelector('.button3');
var potion = document.querySelector('.button4');
//SideBar
var side = document.querySelector('.side');
//settings
var settings = document.querySelector('.settings');
var settingsPanel = document.querySelector('.settingsPanel');


// Fonction pour les textes des ennemies
function EnnemyTextDisplay(message) {
    CombatTextEnnemy.innerHTML = message;
    CombatTextEnnemy.classList.toggle('combatTextAnimation');
    setTimeout(function () {
        CombatTextEnnemy.classList.toggle('combatTextAnimation');
    }, 2100);
}

// Fonction pour les textes des héros
function HeroTextDisplay(message) {
    console.log(message)
    combatTextHero.innerHTML = message;
    combatTextHero.classList.toggle('combatHeroAnimation');
    setTimeout(function () {
        combatTextHero.classList.toggle('combatHeroAnimation');
    }, 2100);
}

//Fonction pour desactiver puis reactiver les boutons au bout de 2.1s
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
    }, 2100)
}

// Bouton ? Boutton ?
smallAttack.onclick = function () {
    EnnemyTextDisplay('-157 PV');
    DisableButton();
};

mediumAttack.onclick = function () {
    EnnemyTextDisplay('-280PV');
    DisableButton();
};

bigAttack.onclick = function () {
    EnnemyTextDisplay('-521 PV');
    DisableButton();
};

potion.onclick = function () {
    HeroTextDisplay('+110 PV <img src="assets/img/pot.png" style="height:45px">');
    DisableButton();
};

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