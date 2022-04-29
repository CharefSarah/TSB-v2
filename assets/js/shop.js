
function load_shop() {
    round = localStorage.getItem('shop_visited');
    console.log(round)
    switch (round) {
        case 'shop1':
            break;
        case 'shop2':
            document.body.style.backgroundImage = 'url("assets/img/level_background/level5.jpg")';
            break;
        case 'shop3':
            break;
        case 'shop4':
            break;
        default:
            break;
    }
}

window.onload = load_shop();