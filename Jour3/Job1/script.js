let txt = document.getElementById("txt");
txt.style.display = "none";

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", affiche);

function affiche() {
    if(txt.style.display == "none") {
        txt.style.display = "block";
        bouton.textContent = "Enlève";
    } else {
        txt.style.display = "none";
        bouton.textContent = "Affiche";
    }
}
