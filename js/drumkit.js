;(function () {
    const clap = new Audio('sounds/clap.wav'),
        hihat = new Audio('sounds/hihat.wav'),
        kick = new Audio('sounds/kick.wav'),
        openhat = new Audio('sounds/openhat.wav'),
        boom = new Audio('sounds/boom.wav'),
        ride = new Audio('sounds/ride.wav'),
        snare = new Audio('sounds/snare.wav'),
        tom = new Audio('sounds/tom.wav'),
        tink = new Audio('sounds/tink.wav');

    const A = document.getElementById("A_btn"),
        S = document.getElementById("S_btn"),
        D = document.getElementById("D_btn"),
        F = document.getElementById("F_btn"),
        G = document.getElementById("G_btn"),
        H = document.getElementById("H_btn"),
        J = document.getElementById("J_btn"),
        K = document.getElementById("K_btn"),
        L = document.getElementById("L_btn");

    const DRUMKIT = document.getElementById("Drumkit");
    DRUMKIT.addEventListener("click", function (e) {
        e.stopPropagation();
        switch (e.target.id){
            case "A_btn" : beatIT(A,clap); break;
            case "S_btn" : beatIT(S,hihat); break;
            case "D_btn" : beatIT(D,kick); break;
            case "F_btn" : beatIT(F,openhat); break;
            case "G_btn" : beatIT(G,boom); break;
            case "H_btn" : beatIT(H,ride); break;
            case "J_btn" : beatIT(J,snare); break;
            case "K_btn" : beatIT(K,tom); break;
            case "L_btn" : beatIT(L,tink); break;

        }
    });

    const BODY = document.getElementsByTagName("body")[0];
    BODY.addEventListener("keydown", function (e) {
        console.log(e.keyCode);
        e.stopPropagation();
        switch (e.keyCode){
            case 65 : beatIT(A,clap); break;
            case 83 : beatIT(S,hihat); break;
            case 68 : beatIT(D,kick); break;
            case 70 : beatIT(F,openhat); break;
            case 71 : beatIT(G,boom); break;
            case 72 : beatIT(H,ride); break;
            case 74 : beatIT(J,snare); break;
            case 75 : beatIT(K,tom); break;
            case 76 : beatIT(L,tink); break;

        }
    });

    function beatIT(element,sound){
        sound.pause();
        sound.currentTime = 0;
        element.classList.add("drumkit__button--active");
        sound.play();
        setTimeout(function() {
            element.classList.remove("drumkit__button--active");

        },100);

    }

}());