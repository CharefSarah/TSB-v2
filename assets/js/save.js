/* ------------------------ Objet pour la sauvegarde ------------------------ */
var player = {
    name: "Rodric",
    level: 4,
    gold: 190,
    inventory: ["sword", "shield", "torch"],
    heros: ["rodric", "zorrun", "xonoth"],
}

input = document.getElementById('name');


/* -------------------------------------------------------------------------- */
/*                            Sauvegarde via button                           */
/* -------------------------------------------------------------------------- */
document.getElementById('save').addEventListener('click',
    function save() {
        if (input.value == '') {
            console.table('renseigne un nom batard');
        } else {
            player.name = input.value;
            try {
                // Enregistrement en local de l'objet avec comme nom le nom choisi pour le héros
                localStorage.setItem(player.name, JSON.stringify(player))
            } catch (err) {
                // Message d'erreur dans la console
                console.log("Acces impossible, le navigateur est peut etre osbolete")
            }
            console.log('Game saved');
        }

    });

/* -------------------------------------------------------------------------- */
/*                                 CHargement                                 */
/* -------------------------------------------------------------------------- */

document.getElementById('load').addEventListener('click',
    function load() {
        input = document.getElementById('name');
        toLoad = input.value;
        // penser a passer le nom du fichier via un input
        var player = JSON.parse(localStorage.getItem(toLoad))
        if (player == null) {
            console.log('ERROR');
        } else {
            console.log(player);
            console.table([player.name, player.gold, player.inventory[0], player.heros[2]])
        }




    });

/* -------------------------------------------------------------------------- */
/*                                 SUPPRESION                                 */
/* -------------------------------------------------------------------------- */

document.getElementById('clear').addEventListener('click',
    function clear() {
        window.localStorage.clear(); //clear all localstorage
    });
// window.localStorage.removeItem("my_item_key"); //remove one item