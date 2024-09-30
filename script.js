var wolverine = document.getElementById("wolverine");
var sabertooth = document.getElementById("sabertooth");
var venom = document.getElementById("venom");
var hulk = document.getElementById("hulk");
var storm = document.getElementById("storm");
var spiderman = document.getElementById("spiderman");
var drestranho = document.getElementById("drestranho");
var colossus = document.getElementById("colossus");
var ironman = document.getElementById("ironman");
var drdoom = document.getElementById("drdoom");
var capitao = document.getElementById("capitao");
var iceman = document.getElementById("iceman");
var ciclope = document.getElementById("ciclope");
var jeangrey = document.getElementById("jeangrey");
var magneto = document.getElementById("magneto");
var psylocke = document.getElementById("psylocke");
var gambit = document.getElementById("gambit");
var rogue = document.getElementById("rogue");
var thanos = document.getElementById("thanos"); 
var blackpanther = document.getElementById("blackpanther");
var omega = document.getElementById("omega");
var massacre = document.getElementById("massacre");
var juggernout = document.getElementById("juggernout");
var apocalipse = document.getElementById("apocalipse"); 

var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");
var x = document.getElementById("reset");


// Click para fixar o personagem na posição player1 ou mover para player2
function setCharacter(characterSrc) {
    // Verifica se player1 está vazio (src não contém nada)
    if (p1.src === window.location.href || p1.src === "") {
        p1.src = characterSrc; // Coloca o personagem no slot de player1
    } 
    // Se player1 já estiver preenchido, coloca no player2
    else if (p2.src === window.location.href || p2.src === "") {
        p2.src = characterSrc; // Coloca o personagem no slot de player2
    }
}

// Adiciona evento de clique para cada personagem
wolverine.addEventListener("click", function() {
    setCharacter("./img/wolverine2.gif");
    if (p1.src.includes("wolverine2.gif")) {
        p1.style.height = "200px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("wolverine2.gif")) {
        p2.style.height = "200px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

sabertooth.addEventListener("click", function() {
    setCharacter("./img/sabretooth");
    if (p1.src.includes("sabretooth")) {
        p1.style.height = "230px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("sabretooth")) {
        p2.style.height = "230px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

venom.addEventListener("click", function() {
    setCharacter("./img/venom.gif");
    if (p1.src.includes("venom.gif")) {
        p1.style.height = "210px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "15px 0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("venom.gif")) {
        p2.style.height = "210px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "15px 0px";
        p2.style.marginBottom = "0px";
    }
});

spiderman.addEventListener("click", function() {
    setCharacter("./img/spiderman.gif");
    if (p1.src.includes("spiderman.gif")) {
        p1.style.height = "230px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("spiderman.gif")) {
        p2.style.height = "230px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

drestranho.addEventListener("click", function() {
    setCharacter("./img/drestranho.gif");
    if (p1.src.includes("drestranho.gif")) {
        p1.style.height = "220px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "100px 0px"
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("drestranho.gif")) {
        p2.style.height = "220px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "100px 0px";
        p2.style.marginBottom = "0px";
    }
});

colossus.addEventListener("click", function() {
    setCharacter("./img/colossus.gif");
    if (p1.src.includes("colossus.gif")) {
        p1.style.height = "260px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("colossus.gif")) {
        p2.style.height = "260px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

ironman.addEventListener("click", function() {
    setCharacter("./img/ironman");
    if (p1.src.includes("ironman")) {
        p1.style.height = "210px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px 40px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("ironman")) {
        p2.style.height = "210px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px 40px";
        p2.style.marginBottom = "0px";
    }
});

drdoom.addEventListener("click", function() {
    setCharacter("./img/drdoom.gif");
    if (p1.src.includes("drdoom.gif")) {
        p1.style.height = "190px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("drdoom.gif")) {
        p2.style.height = "190px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

capitao.addEventListener("click", function() {
    setCharacter("./img/capitao");
    if (p1.src.includes("capitao")) {
        p1.style.height = "200px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("capitao")) {
        p2.style.height = "200px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

iceman.addEventListener("click", function() {
    setCharacter("./img/Iceman.gif");
    if (p1.src.includes("Iceman.gif")) {
        p1.style.height = "240px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("Iceman.gif")) {
        p2.style.height = "240px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

ciclope.addEventListener("click", function() {
    setCharacter("./img/ciclope.gif");
    if (p1.src.includes("ciclope.gif")) {
        p1.style.height = "290px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "-40px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("ciclope.gif")) {
        p2.style.height = "290px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "-40px";
    }
});

jeangrey.addEventListener("click", function() {
    setCharacter("./img/jeangrey.webp");
    if (p1.src.includes("jeangrey.webp")) {
        p1.style.height = "200px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "10px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("jeangrey.webp")) {
        p2.style.height = "200px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "10px";
        p2.style.marginBottom = "0px";
    }
});

magneto.addEventListener("click", function() {
    setCharacter("./img/magneto2.gif");
    if (p1.src.includes("magneto2.gif")) {
        p1.style.height = "260px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "100px 0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("magneto2.gif")) {
        p2.style.height = "260px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "100px 0px";
        p2.style.marginBottom = "0px";
    }
});

storm.addEventListener("click", function() {
    setCharacter("./img/storm");
    if (p1.src.includes("storm")) {
        p1.style.height = "228px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("storm")) {
        p2.style.height = "228px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

psylocke.addEventListener("click", function() {
    setCharacter("./img/psylocke.gif");
    if (p1.src.includes("psylocke.gif")) {
        p1.style.height = "180px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "20px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("psylocke.gif")) {
        p2.style.height = "180px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "20px";
        p2.style.marginBottom = "0px";
    }
});

gambit.addEventListener("click", function() {
    setCharacter("./img/gambit.gif");
    if (p1.src.includes("gambit.gif")) {
        p1.style.height = "215px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("gambit.gif")) {
        p2.style.height = "215px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

rogue.addEventListener("click", function() {
    setCharacter("./img/rogue.gif");
    if (p1.src.includes("rogue.gif")) {
        p1.style.height = "180px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "25px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("rogue.gif")) {
        p2.style.height = "180px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "25px";
        p2.style.marginBottom = "0px";
    }
});

thanos.addEventListener("click", function() {
    setCharacter("./img/thanos.gif");
    if (p1.src.includes("thanos.gif")) {
        p1.style.height = "320px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "10px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("thanos.gif")) {
        p2.style.height = "320px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "10px";
        p2.style.marginBottom = "0px";
    }
});

hulk.addEventListener("click", function() {
    setCharacter("./img/hulk.gif");

    if (p1.src.includes("hulk.gif")) {
        p1.style.height = "300px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("hulk.gif")) {
        p2.style.height = "300px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});


blackpanther.addEventListener("click", function() {
    setCharacter("./img/blackpanther.gif");
    if (p1.src.includes("blackpanther.gif")) {
        p1.style.height = "180px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "10px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("blackpanther.gif")) {
        p2.style.height = "180px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "10px";
        p2.style.marginBottom = "0px";
    }
});

omega.addEventListener("click", function() {
    setCharacter("./img/omega.gif");
    if (p1.src.includes("omega.gif")) {
        p1.style.height = "260px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("omega.gif")) {
        p2.style.height = "260px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "0px";
        p2.style.marginBottom = "0px";
    }
});

massacre.addEventListener("click", function() {
    setCharacter("./img/massacre.gif");
    if (p1.src.includes("massacre.gif")) {
        p1.style.height = "450px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "40px 0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("massacre.gif")) {
        p2.style.height = "450px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "40px 0px";
        p2.style.marginBottom = "0px";
    }
});

apocalipse.addEventListener("click", function() {
    setCharacter("./img/apocalypse.gif");
    if (p1.src.includes("apocalypse.gif")) {
        p1.style.height = "290px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "10px 0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("apocalypse.gif")) {
        p2.style.height = "290px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "10px 0px";
        p2.style.marginBottom = "0px";
    }
});

juggernout.addEventListener("click", function() {
    setCharacter("./img/juggernaut.gif");
    if (p1.src.includes("juggernaut.gif")) {
        p1.style.height = "250px"; // Reduz o tamanho do Hulk no player1
        p1.style.padding = "10px 0px";
        p1.style.marginBottom = "0px";
    }

    // Verifica se a imagem do Hulk foi adicionada ao player2
    if (p2.src.includes("juggernaut.gif")) {
        p2.style.height = "250px"; // Reduz o tamanho do Hulk no player2
        p2.style.padding = "10px 0px";
        p2.style.marginBottom = "0px";
    }
});

x.addEventListener("click", function() {
    if (p2.src !== "" && p2.src !== window.location.href) {
        p2.src = "";

    } else if (p1.src !== "" && p1.src !== window.location.href) {
        p1.src = "";
    }
});

