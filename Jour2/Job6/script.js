const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let index = 0;

document.addEventListener("keydown", (e) => {

    if (e.key === konamiCode[index]) {
        index++;

        if (index === konamiCode.length) {
            activerKonami();
            index = 0;
        }
    } else {
        index = 0;
    }

});

function activerKonami() {
    document.body.classList.add("konami");
    document.body.innerHTML = "<h1>Bienvenue à La Plateforme_ 🚀</h1>";
}