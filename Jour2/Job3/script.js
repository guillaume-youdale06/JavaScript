function addOne() {
    compteur.textContent = Number(compteur.textContent) + 1;
}

let compteur = document.getElementById("compteur");
let button = document.getElementById("button");
button.addEventListener("click", addOne)