// Les variables, en premier la variables pour les couleurs
var game, level, color = ["rgba(255,0,89,1)", "#0099ff", "#a6ff00", "#00F1A3", "#DD02DC", "lightgreen", "lightblue", "orange", "brown", "pink"],
    water = [],
    w = [],
    currentLevel, clicked = [],
    transferring = false,
    t = false,
    size = 1,
    sizechange = 0.05,
    won = false

// tableau de coordonées absolute ( x / y )
// Si tu veux repositionner des fioles c'est avec ca qu'il faut voir mais c'est tordu. ^^ 
var testTubePosition = {
    0: [
        [-110, 68],
        [-20, 68],
        [70, 68],
        [-65, 210],
        [15, 210]
    ],
    1: [
        [-110, 68],
        [-20, 68],
        [70, 68],
        [-110, 210],
        [-20, 210],
        [70, 210]
    ],
    2: [
        [-200, 68],
        [-80, 68],
        [40, 68],
        [160, 68],
        [-140, 210],
        [-20, 210],
        [100, 210]
    ],
    3: [
        [-140, 68],
        [-60, 68],
        [20, 68],
        [100, 68],
        [-140, 210],
        [-60, 210],
        [20, 210],
        [100, 210]
    ],
    7: [
        [-140, 100],
        [-60, 100],
        [20, 100],
        [100, 100],
        [-140, 275],
        [-60, 275],
        [20, 275],
        [100, 275],
        [-140, 450],
        [-60, 450],
        [20, 450],
        [100, 450]
    ],
}

// On load lancement du jeu, 2 = la difficulé. 0 1 2 3 .
// 3 c'etait SPORT.
window.addEventListener("load", function () {
    game = document.getElementById("game");
    level = document.getElementById("level");
    // Variable de la difficulté
    x = 2;
    currentLevel = x;
    won = false;
    level.style.display = "block";
    level.innerHTML = "";
    water = [];
    let a = [],
        c = 0;
    for (let i = 0; i < x + 3; i++) {
        for (let j = 0; j < 4; j++) {
            a.push(color[i]);
        }
    }
    a = shuffle(a);
    for (let i = 0; i < x + 3; i++) {
        water[i] = [];
        for (let j = 0; j < 4; j++) {
            water[i].push(a[c]);
            c++;
        }
    }
    water.push(["transparent", "transparent", "transparent", "transparent"], ["transparent", "transparent", "transparent", "transparent"]);
    w = water.map((a) => [...a]);
    ApplyInfo();

})



function ApplyInfo(a = water) {
    if (!won) {
        let d = 0;
        level.innerHTML = `<div id = 'lvl-heading'></div>`;
        for (let i of testTubePosition[currentLevel]) {
            // Ca créé une fiole + son contenu pour chaque et ca rend le fond pas transparent quand y'as besoin.
            level.innerHTML += `<div class = "test-tube" style="top:${i[1]}px;left:calc(50vw + ${i[0]}px);transform:rotate(0deg);" onclick="Clicked(${d});">
                <div class="colors" style = "background:${a[d][0]};top:100px;"></div>
                <div class="colors" style = "background:${a[d][1]};top:70px;"></div>
                <div class="colors" style = "background:${a[d][2]};top:40px;"></div>
                <div class="colors" style = "background:${a[d][3]};top:10px;"></div>
            </div>`;
            d++;
        }
        // Ca sert a rien cette ligne la mais quand je l'ai enlevé ca a planté. 
        level.innerHTML += ``;
    }
}

window.Clicked = function (x) {
    if (!transferring) {
        if (clicked.length == 0) {
            clicked.push(x);
            // Transition quand on clique sur une fiole, on l'a grossi en 0.2s
            // j'ai mit 1.12 mais si ca te parait trop leger met plus.
            document.getElementsByClassName("test-tube")[x].style.transition = "0.2s linear";
            document.getElementsByClassName("test-tube")[x].style.border = "2px white solid";
            document.getElementsByClassName("test-tube")[x].style.transform = "scale(1.25)";
            document.getElementsByClassName("test-tube")[x].style.animation = "blink 2.5s infinite ease-in-out";

        } else {
            clicked.push(x);
            let el = document.getElementsByClassName("test-tube")[clicked[0]];
            el.style.transform = "scale(1) rotate(0deg)";
            el.style.border = "2px solid rgb(150,150,150)"
            el.style.animation = "";
            if (clicked[0] != clicked[1]) {
                el.style.transition = "1s linear";
                Transfer(...clicked);
            }
            clicked = [];
        }
    }
}

function TransferAnim(a, b) {
    let el = document.getElementsByClassName("test-tube")[a];
    transferring = true;
    el.style.zIndex = "100";
    el.style.top = `calc(${testTubePosition[currentLevel][b][1]}px - 90px)`;
    el.style.left = `calc(50vw + ${testTubePosition[currentLevel][b][0]}px - 70px)`;
    el.style.transform = "rotate(75deg)";
    setTimeout(function () {
        el.style.transform = "rotate(90deg)";
    }, 500)
    setTimeout(function () {
        el.style.left = `calc(50vw + ${testTubePosition[currentLevel][a][0]}px)`;
        el.style.top = `calc(${testTubePosition[currentLevel][a][1]}px)`;
        el.style.transform = "rotate(0deg)";
    }, 1250);
    setTimeout(function () {
        el.style.zIndex = "0";
        transferring = false;
    }, 2300)
}

function Transfer(a, b) {
    if (!water[b].includes("transparent") || water[a] == ["transparent", "transparent", "transparent", "transparent"]) {
        return;
    }
    let p, q, r = false,
        s = false,
        count = 0,
        c = 0;
    for (let i = 0; i < 4; i++) {
        if (((water[a][i] != "transparent" && water[a][i + 1] == "transparent") || i === 3) && !r) {
            r = true;
            p = [water[a][i], i];
            if (water[a].map(function (x) {
                    if (x == "transparent" || x == p[0]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }).reduce((x, y) => x + y) === 4) {
                p.push(i + 1)
            } else {
                for (let j = 1; j < 4; j++) {
                    if (i - j >= 0 && water[a][i - j] != p[0]) {
                        p.push(j);
                        break;
                    }
                }
            }
        }
        if (((water[b][i] != "transparent" && water[b][i + 1] == "transparent") || water[b][0] == "transparent") && !s) {
            s = true;
            q = [water[b][i], i, water[b].map((x) => x = (x == "transparent") ? 1 : 0).reduce((x, y) => x + y)];
        }
    }

    if (q[0] != "transparent" && p[0] != q[0]) {
        return;
    }
    for (let i = 3; i >= 0; i--) {
        if ((water[a][i] == p[0] || water[a][i] == "transparent") && count < q[2]) {
            if (water[a][i] == p[0]) {
                count++;
            }
            water[a][i] = "transparent";
        } else {
            break;
        }
    }

    c = count;
    setTimeout(function () {
        WaterDec(p, a, c);
    }, 1010);
    setTimeout(function () {
        WaterInc(p, q, b, c);
    }, 1010);
    for (let i = 0; i < 4; i++) {
        if (water[b][i] == "transparent" && count > 0) {
            count--;
            water[b][i] = p[0];
        }
    }
    setTimeout(function () {
        ApplyInfo();
    }, 3020);
    setTimeout(function () {
        TransferAnim(a, b);
    }, 10);
    setTimeout(Won, 3000);
}

function WaterDec(p, a, count) {
    p[1] = 3 - p[1];
    //console.log(count*30);
    document.getElementsByClassName("test-tube")[a].innerHTML += `<div id = "white-bg" style = "top:calc(10px + ${p[1] * 30}px - 1px);"></div>`;
    setTimeout(function () {
        document.getElementById("white-bg").style.height = count * 30 + 1 + "px";
    }, 50);
    setTimeout(function () {
        document.getElementsByClassName("test-tube")[a].innerHTML = `
            <div class="colors" style = "background-color:${water[a][0]};top:100px;"></div>
            <div class="colors" style = "background-color:${water[a][1]};top:70px;"></div>
            <div class="colors" style = "background-color:${water[a][2]};top:40px;"></div>
            <div class="colors" style = "background-color:${water[a][3]};top:10px;"></div>`;
    }, 1050);
}

function WaterInc(p, q, b, count) {
    q[1] = 4 - q[1];
    q[1] -= (q[0] != "transparent" ? 1 : 0);
    document.getElementsByClassName("test-tube")[b].innerHTML += `<div id = "colorful-bg" style = "background-color:${p[0]};top:calc(10px + ${q[1] * 30}px);"></div>`;
    setTimeout(function () {
        document.getElementById("colorful-bg").style.height = count * 30 + 1 + "px";
        document.getElementById("colorful-bg").style.top = `calc(10px + ${q[1] * 30}px - ${count * 30}px)`;
    }, 50);
}



function Won() {
    for (let i of water) {
        if (i[0] != i[1] || i[1] != i[2] || i[2] != i[3]) {
            return;
        }
    }
    won = true;
    //console.log("hello");
    level.innerHTML = `<div id="won">YOU WON!</div>`;
    // Redirection tout a fait brutal quand on gagne, mais les details c'est pour aprés hein XD
    ggdialog = "Bravo, grace a toi ma mere va m'as meme pas m'assassiner ! "
    // Dialog avec ta fonction
    createDiag(ggdialog);
    // redirection aprés du coup
    setTimeout(function () {
        window.location.href = 'map.html'
    }, 3000)
}

function shuffle(x) {
    let a = [],
        len = x.length;
    for (let i = 0; i < len; i++) {
        let n = Math.floor(Math.random() * x.length);
        a.push(x[n]);
        x.splice(n, 1);
    }
    return a;
}



var dialogs = [
        'VIIIITE, aide moi a ranger toutes mes potions sinon j\'aurais jamais mon examen !'
    ],
    initial = 0;
individual = dialogs[initial].split('');

function createDiag(dialog) {

    for (i = 0; i < dialog.length; i++) {
        (function (i) {
            setTimeout(function () {
                $('#dialog').text($('#dialog').text() + dialog[i]);
                if (i == dialog.length - 1) {
                    $('#dialog').prepend('<div id="arrow"></div>');
                    Mousetrap.bind('enter', function () {
                        if (dialogs[initial + 1]) {
                            $('#dialog').text('');
                            initial += 1;
                            individual = dialogs[initial].split('');
                            createDiag(individual);
                        }
                    });
                }
            }, 50 * i);

        }(i));

    }

}
createDiag(individual);