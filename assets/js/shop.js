/* -------------------------------------------------------------------------- */
/*                       fonction d'affichage                                 */
/* -------------------------------------------------------------------------- */ 
function DisplayShopItems() {
    document.getElementById("objectName").innerHTML = shop.name;
    document.getElementById("objectType").innerHTML = shop.type;
    document.getElementById("objetImage").src = shop.imagePath;
    document.getElementById("objectDocket").innerHTML = shop.docket;
    document.getElementById("objetStock").innerHTML = shop.stock;
}

